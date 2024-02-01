import conf from "../conf/conf";

import { Client, ID, Databases } from 'appwrite';

export class Service {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async sendMail({ name, email, message }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    name,
                    email,
                    message,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: sendMail :: error", error);
        }
    }
}

const service = new Service();

export default service