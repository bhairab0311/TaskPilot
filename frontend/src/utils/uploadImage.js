// uploadImage

import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData(); // Create a new FormData instance
  formData.append("image", imageFile); // Append the image file to form data

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set header for file upload
      },
    });

    return response.data; // Return response data
  } catch (error) {
    console.error("Error uploading the image:", error); // Log the error
    throw error; // Rethrow error for further handling
  }
};


export default uploadImage;
