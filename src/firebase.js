
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCDCs6rcvahHM-e_RrMU4SqOAvzfbNi8WY",
  authDomain: "netflit-clone-a2973.firebaseapp.com",
  projectId: "netflit-clone-a2973",
  storageBucket: "netflit-clone-a2973.firebasestorage.app",
  messagingSenderId: "1097281291774",
  appId: "1:1097281291774:web:4d6096f724d842a6bdecaf"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db= getFirestore(app);

const signup= async(name, email, password)=>{
    try{
        const res =await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }
}

const login= async(email,password)=>{
    try {
      await  signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error); 
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};