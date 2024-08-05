import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf/conf";


export class storageService {
    client = new Client()
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }


 async function getPost(slug) {
    try {
    return await this.databases.getDocument(
            conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
    } catch (error) {
        console.error(error)
        return false;
    }
}


}

