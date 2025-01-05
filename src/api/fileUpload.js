export const fileUpload = async (file) => {
  try {
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "multiLibrary"); 

    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/multi-library/image/upload";
    const cloudinaryResponse = await fetch(cloudinaryUrl, {
      method: "POST",
      body: uploadData,
    });
    const data = await cloudinaryResponse.json();
    return data.secure_url;
  } catch (error) {
    throw error;
  }
};
