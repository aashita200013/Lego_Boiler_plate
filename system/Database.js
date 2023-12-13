//Custom database related operations

require("dotenv").config();
const { MongoClient } = require("mongodb");

class Database {
  constructor() {
    const uri = process.env.MONGOOSE_URL_LEGO;
    this.client = new MongoClient(uri);
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Connected to the MongoDB database".green);
    } catch (error) {
      console.error("Error connecting to the database".red, error);
    }
  }

  // UPSERT Operation for modules only.
  async insertOrUpdateDocument(collectionName, document) {
    try {
      const collection = this.client.db().collection(collectionName);
      const filter = { moduleName: document.moduleName };
      const existingDocument = await collection.findOne(filter);

      if (existingDocument) {
        const update = { $set: document };
        const result = await collection.updateOne(filter, update);
        console.log("Document updated:", result.modifiedCount);
        return result.modifiedCount;
      } else {
        const result = await collection.insertOne(document);
        console.log("Document inserted:", result.insertedId);
        return result.insertedId;
      }
    } catch (error) {
      console.error("Error inserting/updating document", error);
    }
  }

  async insertDocument(collectionName, document) {
    try {
      const collection = this.client.db().collection(collectionName);
      const result = await collection.insertOne(document);
      console.log("Document inserted:".green, result.insertedId);
      return result.insertedId;
    } catch (error) {
      console.error("Error inserting document".red, error);
    }
  }

  async updateDocument(collectionName, filter, update) {
    try {
      const collection = this.client.db().collection(collectionName);
      const result = await collection.updateOne(filter, update);
      console.log("Document updated:".green, result.modifiedCount);
      return result.modifiedCount;
    } catch (error) {
      console.error("Error updating document".red, error);
    }
  }

  async deleteDocument(collectionName, filter) {
    try {
      const collection = this.client.db().collection(collectionName);
      const result = await collection.deleteOne(filter);
      console.log("Document deleted:".green, result.deletedCount);
      return result.deletedCount;
    } catch (error) {
      console.error("Error deleting document".red, error);
    }
  }

  async findDocuments(collectionName, filter) {
    console.log("filter", filter);
    try {
      const collection = this.client.db().collection(collectionName);
      const documents = await collection.find(filter).toArray();
      return documents;
    } catch (error) {
      console.error("Error finding documents".red, error);
    }
  }

  async listDocuments(collectionName) {
    try {
      const collection = this.client.db().collection(collectionName);
      const documents = await collection.find().toArray();
      return documents;
    } catch (error) {
      return error;
    }
  }

  async close() {
    await this.client.close();
    console.log("Connection to the MongoDB database closed".red);
  }
}

module.exports = Database;
