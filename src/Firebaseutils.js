 import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase";

const getUserDetails = async (uid) => {
  const userCollectionRef = await collection(db, "users");
  const q = query(userCollectionRef, where("uid", "==", uid));
  const data = await getDocs(q);
  return { data: data.docs[0].data(), id: data.docs[0].id };
};

const addOrUpdateDocs = async (uid, userDetails) => {
  const userCollectionRef = collection(db, "users");
  const q = query(userCollectionRef, where("uid", "==", uid));
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    //   console.log("no uid");
    await addDoc(collection(db, "users"), userDetails);
  } else {
    const userDoc = doc(db, "users", docs.docs[0].id);
    //   console.log(userDoc);
    await updateDoc(userDoc, { ...userDetails });
  }
};

export { getUserDetails, addOrUpdateDocs };
