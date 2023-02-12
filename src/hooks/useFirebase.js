import {useState, useCallback, useMemo} from "react";
import firebase from "firebase/compat/app";
import {get, onValue, push, ref, set, remove} from "firebase/database";
import {getDatabase} from "firebase/database";
import {useDispatch} from "react-redux";
import {setUserName, setUserPhotoURL, clearUser} from "../store/slices/userSlice";
import * as firebaseui from "firebaseui";

const useFirebase = () => {

    const dispatch = useDispatch();

    const firebaseConfig = useMemo(() => (
        {
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_DATABASE_URL,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID
        }
    ), []);

    /*
    * don't useMemo to initialize
    * and get the db
    * it will break your app
    */

    const firebaseApp =  firebase.initializeApp(firebaseConfig);

    const database = getDatabase(firebaseApp);

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const getRef = useCallback((path = '') => (
        ref(database, path)
    ), []);

    const observeDataChanging = useCallback((path = '', dataConverter) => {
        const dataRef = getRef(path);

        try {
            onValue(dataRef, (snapshot) => {
                if (snapshot.exists()) {
                    const dataArray = dataConverter(snapshot);
                    setData(dataArray);
                } else {
                    setData([]);
                }
            });
        } catch (error) {
            setError(error);
        }
    }, []);

    const observeAuthStateChanging = useCallback((navigateInstance) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(setUserName(user.displayName || 'Guest'));
                dispatch(setUserPhotoURL(user.photoURL || ''));
            } else {
                navigateInstance('/signIn');
                dispatch(clearUser());
            }
        });
    }, []);

    const authSignOut = useCallback(() => {
        firebase.auth().signOut();
    }, []);

    const pushData = useCallback((path = '', data) => {
        const ref = getRef(path);

        return push(ref, data);
    }, []);

    const setDataWithoutReplacement = useCallback((path, data, errorHandler) => {
        const ref = getRef(path);

        return get(ref)
            .then(snapshot => {
                if (snapshot.exists()) {
                    errorHandler();
                } else {
                    set(ref, data);
                }
            })
    }, []);

    const authUiConfig = useMemo(() => (
        {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
            ]
        }
    ), []);

    const renderAuthUi = useCallback((containerSelector) => {
        if(firebaseui.auth.AuthUI.getInstance()) {
            const ui = firebaseui.auth.AuthUI.getInstance()
            ui.start(containerSelector, authUiConfig)
        } else {
            const ui = new firebaseui.auth.AuthUI(firebase.auth())
            ui.start(containerSelector, authUiConfig)
        }
    }, []);

    const deleteData = useCallback((path) => {
        const dataRef = getRef(path);

        return  remove(dataRef);
    }, []);

    return {
        observeDataChanging,
        data,
        error,
        observeAuthStateChanging,
        authSignOut,
        pushData,
        setDataWithoutReplacement,
        renderAuthUi,
        deleteData
    }
}

export default useFirebase;