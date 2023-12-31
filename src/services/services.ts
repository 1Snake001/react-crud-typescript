import { db } from "../firebase-config/firebase";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const userRef = collection(db, "users");

interface InputValue {
  id?: string;
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
      console.error("Error getting all users:", error);
      throw error;
    }
  };

  addNewUser = async (newUser: InputValue) => {
    try {
      return await addDoc(userRef, newUser);
    } catch (error) {
      // Handle the error
      console.error("Error adding a new user:", error);
      throw error;
    }
  };

  deleteUser = async (id: string) => {
    try {
      const userDoc = doc(userRef, id);
      return await deleteDoc(userDoc);
    } catch (error) {
      // Handle the error
      console.error("Error adding a new user:", error);
      throw error;
    }
  };

  updateUser = async (id: string, updatedUser: any) => {
    const userDoc = doc(userRef, id);
    return await updateDoc(userDoc, updatedUser);
  };

  getUserById = async (id: string) => {
    try {
      const userDoc = await getDoc(doc(userRef, id));
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      // Handle the error
      console.error("Error getting user by ID:", error);
      throw error;
    }
  };
}

export default UserServices;