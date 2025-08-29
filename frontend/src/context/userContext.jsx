import React, { createContext, useState, useEffect } from "react";
import { API_PATHS } from "../utils/apiPaths.js";
import axiosInstance from "../utils/axiosInstance.js";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to track user
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // If user is already set, exit early
    if (user) return;

    // Retrieve the access token from localStorage
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      setLoading(false); // Stop loading if no token is found
      return;
    }

    const fetchUser = async () => {
      try {
        // Fetch user profile from API
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
        setUser(response.data); // Set user data from response
      } catch (error) {
        console.error("User not authenticated", error); // Log the error
        clearUser(); // Clear user state in case of error
      } finally {
        setLoading(false); // Stop loading irrespective of success or failure
      }
    };

    fetchUser(); // Call the async function to fetch user
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
    setLoading(false);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
