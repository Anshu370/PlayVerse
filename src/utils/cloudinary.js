import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";
import { fileURLToPath } from "url";

cloudinary.config({ 
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`, 
  api_key: `${process.env.CLOUDINARY_API_KEY}`, 
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null

        // Upload Files on the Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // files uploaded successfully
        console.log("File uploaded on cloudinary", response.url);
        
        return response;
    }catch(error){
        // remove the file form local path
        fs.unlinkSync(localFilePath);
        console.log("File removed Successfully");        
        return null;
    }
}


export { uploadOnCloudinary }