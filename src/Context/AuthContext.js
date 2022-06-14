import {createContext, useContext, useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
    } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {auth, db} from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    // create user
    const createUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password);
        return setDoc(doc(db, 'users', email), {
            name:name,
            images: [], 
        });
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    },[]);

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    )
};

export const UserAuth = () => {
    // makes UserContext available throughout app
    return useContext(UserContext);
}