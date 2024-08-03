
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";


export class Authservice {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account
                .create(ID.unique(), email, password, name)

            if (userAccount) {
                return this.login({ email, password })

            } else {
                return userAccount
            }

        } catch (err) {
            console.log(err)
            throw err
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)

        } catch (error) {
            throw error
        }
        return null
    }
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: ", error);
        }
        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout() ::", error);

        }
    }
}


// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('66adf0620007bf06f2d6');                 // Your project ID

// const account = new Account(client);

const authservice = new Authservice();

export default authservice;