import { Client, Databases, stoarge , Query, ID } from "appwrite";
import conf from "../conf/conf";


export class storageService {
    client = new client()
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
      this.databases = new Databases(this.client)
      this.bucket = new Storage(this.client)

    }


async function createDocument(){
   try{
    const result = await this.databases.createDocument(ID.unique(),
    conf.appwriteDatabaseId,conf.appwriteCollectionId,{"title": "Hamlet"})
   }catch(error){
     console.error(error)
   }    
}


}

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

const promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
