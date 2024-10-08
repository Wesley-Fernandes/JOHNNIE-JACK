import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

if (!process.env.NEXT_PUBLIC_API_KEY) {
	console.error("No Firebase config found. Please set NEXT_PUBLIC_API_KEY");
}
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
	appId: process.env.NEXT_PUBLIC_APP_ID as string,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID as string,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };
