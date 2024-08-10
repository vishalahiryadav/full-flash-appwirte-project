const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteApiKey:String(import.meta.env.VITE_APPWRITE_API_KEY),
    appwriteApiSecret:String(import.meta.env.VITE_APPWRITE_API_SECRET),
    appwriteApiEndpoint:String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),


}

export default conf