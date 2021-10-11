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

Step-2: Setup Components
1. Create Login Component
2. Create register Componen
3. Create Route for Login and Register

Step-3 Set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer

Step-4 Create auth Context hook (useAuth)
1. Create a auth Context
2. Create Context provider
3. set context Provider Context value
4. use auth Provider
5. Create useauth Hook

Step-5  Create Privet Route
1. create privet Route
2. Set Privet Route

Step-6 Redirect After Login
1. After login redirect user to their desired destination
*/