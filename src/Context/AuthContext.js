import {createContext, useContext, useEffect, useState} from 'react';
import {auth, db, storage} from '../firebase';
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
    } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';


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

    const uploadImage = (image) => {
        if(image == null) return;
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        uploadBytes(imageRef, image)
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
        <UserContext.Provider value={{ createUser, user, logout, signIn, uploadImage }}>
            {children}
        </UserContext.Provider>
    )
};

export const UserAuth = () => {
    // makes UserContext available throughout app
    return useContext(UserContext);
}