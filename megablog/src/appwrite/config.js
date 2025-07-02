import conf from "../conf.js";
import { Client, ID ,Databases,Storage,Query} from "appwrite";


export class Service{
    Client = new Client();
    databases;
    bucket;
    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases= new Databases(this.Client)
            this.bucket = new Storage(this.Client)
    }

}


const service = new Service();
export default service