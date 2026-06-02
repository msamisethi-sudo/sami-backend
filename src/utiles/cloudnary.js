import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


import { v2 as cloudinary } from 'cloudinary';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNERY_CLOUDNAME, 
        api_key: process.env.CLOUDNERY_API_KEY, 
        api_secret: process.env.CLOUDNERY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });