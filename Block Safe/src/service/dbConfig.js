import config from "../cofigVarbale/config.js"; // Adjust path as needed
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services {
  Client = new Client();
  databases;
  storage;

  constructor() {
    // Set up Appwrite client with endpoint and project ID from config
    this.Client.setEndpoint(config.appWriteUrl).setProject(
      config.appWriteProjectId
    );
    this.databases = new Databases(this.Client);
    this.storage = new Storage(this.Client);
  }

  // Method to create a post with title, slug, status, userId, URL, and CID
  async createPost({ title, slug, Status, userId, fileUrl, cid }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDbId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          Status,
          userId,
          fileUrl, // Store file URL
          cid, // Store content ID (cid)
        }
      );
    } catch (error) {
      console.error("Appwrite service :: createPost :: error", error.message);
    }
  }

  // Method to update a post with the new data, including file URL and CID
  async updatePost(slug, { title, status, fileUrl, cid }) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDbId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
          fileUrl, // Update file URL
          cid, // Update content ID (cid)
        }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error.message);
    }
  }

  // Method to delete a post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDbId,
        config.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePost :: error", error.message);
      return false;
    }
  }

  // Method to retrieve a single post using its slug
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appWriteDbId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error.message);
      return false;
    }
  }

  // Method to retrieve all posts based on query filters
  async getPosts(queries = [Query.equal("Status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appWriteDbId,
        config.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Appwrite service :: getPosts :: error", error.message);
      return false;
    }
  }

  // Method to upload a file (image, etc.)
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Appwrite service :: uploadFile :: error", error.message);
      return false;
    }
  }

  // Method to delete a file by fileId
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteFile :: error", error.message);
      return false;
    }
  }

  // Method to get file preview by fileId
  getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(config.appWriteBucketId, fileId);
    } catch (error) {
      console.error(
        "Appwrite service :: getFilePreview :: error",
        error.message
      );
    }
  }
}

// Create instance of Services and export for use in other parts of the app
const services = new Services();
export default services;
