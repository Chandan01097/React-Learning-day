import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    Client = new Client();
    databases;
    bucket;
    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.Client)
        this.bucket = new Storage(this.Client)
    }
    async createPost({ tittle, slug, content, featuredImage,
        status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error)
        }
    }

    async updatePost(slug, { tittle, content, featuredImage,
        status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error)
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error)
            return false;
        }
    }
    async getPost(slug){
   try {
      return await this.databases.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
            )
   } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error ", error)
        return false;
   }
    }
    async getPosts(queries =[Query.equal("status","active")]) {
        try {
           return await this.databases.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
       console.log("Appwrite service :: getCurrentUser :: error ", error)
       return false;
        }
    }
  // file upload Service
  async uploadFile (file){
  try {
    return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file

    )
  } catch (error) {
       console.log("Appwrite service :: getCurrentUser :: error ", error)
       return false;
  }
  }

  // Delete File
  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
    conf.appwriteBucketId, // bucketId
    fileId, // fileId
);
return true;
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error ", error)
       return false;
    }
  }

  getFilePrview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
  }
}


const service = new Service();
export default service