import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*
Steps for authentication

Step-1: initial Setup
1. firebase: Create project
2. create web app
3. get configuration
4.initialize firebase
5. Enable auth method

Step-2: 
1. Create Login Component
2. Create register Componen
3. Create Route for Login and Register

Step-3
1. set up sign in method
2. setup sign out method
3. user state
4. special observer

Step-4
1. Create a auth Context
2. Create Context provider
3. set context Provider Context value
4. use auth Provider
5. Create useauth Hook
*/