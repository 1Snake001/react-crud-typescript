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
    return await getDocs(userRef);
  };

  addNewUser = async (newUser:InputValue) => {
    return await addDoc(userRef, newUser);
  }
};

export default UserServices;
