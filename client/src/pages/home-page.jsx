import React, { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  
  //login user data
  const getUserData = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/getAccessToken",
        {},
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return <div>home-page</div>;
};

export default HomePage;
