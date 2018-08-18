import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDruJRy4HIcvxPLJGyY7Ntzp_YeyDOgPL8",
	authDomain: "react-wes-bos-2ddb4.firebaseapp.com",
	databaseURL: "https://react-wes-bos-2ddb4.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
