import { db } from "../firebase-config/firebase";
import { collection, addDoc, getDocs} from "firebase/firestore";

const userRef = collection(db, "users");

interface InputValue {
    name: string;
    email: string;
    address: string;
  }

  class UserServices {
    getAllUsers = async () => {
      try {
        return await getDocs(userRef);
      } catch (error) {
        // Handle the error
        console.error('Error getting all users:', error);
        throw error;
      }
    };
  
    addNewUser = async (newUser: InputValue) => {
      try {
        return await addDoc(userRef, newUser);
      } catch (error) {
        // Handle the error
        console.error('Error adding a new user:', error);
        throw error;
      }
    };
  }
  

export default UserServices;
