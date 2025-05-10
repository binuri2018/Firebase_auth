// src/pages/Profile.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { getUserProfile, updateProfilePicture } from "../services/firestore";
import "../styles/Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const profileData = await getUserProfile(user.uid);
        setUserData(profileData);
      }
    };
    fetchUserData();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await updateProfilePicture(auth.currentUser.uid, file);
      const profileData = await getUserProfile(auth.currentUser.uid);
      setUserData(profileData);
    }
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      {userData.profilePicture ? (
        <img
          src={userData.profilePicture}
          alt="Profile"
          className="profile-image"
        />
      ) : (
        <div className="placeholder-image">No Profile Picture</div>
      )}
      <h3>{userData.name}</h3>
      <p>{userData.email}</p>
      <label className="upload-btn">
        Upload Profile Picture
        <input type="file" onChange={handleImageUpload} />
      </label>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Profile;
