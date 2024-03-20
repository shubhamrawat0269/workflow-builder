import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useEffect } from "react";
import { app } from "../../Firebase";

const UserDashboard = () => {
  // 1. to get the data from Real time DB , we use below method
  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "user");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log("DATA RECIEVED: ", data);
    });
  }, []);

  // 2. to delete data from Real time DB
  const handleDeleteData = (id) => {
    const db = getDatabase(app);
    const userRef = ref(db, "user/" + id);
    remove(userRef);
  };

  // 3. update / edit the data in Real time DB and UI

  // 4.  How to upload an image on DB and display it on UI
  return <div>UserDashboard</div>;
};

export default UserDashboard;
