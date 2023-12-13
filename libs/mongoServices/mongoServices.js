require("dotenv").config();
const { filter } = require("lodash");
const { MongoClient, ObjectId } = require("mongodb");

class MongoServices {
  // MongoDB connection URI
  uri = process.env.MONGOOSE_URL_LEGO;

  //  Function to connect to the MongoDB database
  connect = async () => {
    const client = new MongoClient(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      console.log("Connected to MongoDB");
      return client.db();
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  };

  // Create a new document in the specified collection
  createDocument = async (collectionName, data) => {
    const db = await this.connect();
    const collection = db.collection(collectionName);

    // Check if the collection exists and it has documents
    const collectionInfo = await db
      .listCollections({ name: collectionName })
      .toArray();
    if (collectionInfo.length === 0) {
      console.warn(
        `Collection '${collectionName}' does not exist or is empty. Creating it...`
      );
      await db.createCollection(collectionName);
      console.log(`Collection '${collectionName}' created.`);
    }
    
    if (Object.keys(data).length === 0) {
      console.warn("Empty Query Found. Please Check!");
      return null;
    } else {
      const result = await collection.insertOne(data);
      console.log(
        `Inserted a new document into ${collectionName} with ID: ${result.insertedId}`
      );
      return result.insertedId;
    }
  };

  // Insert/Create many documents
  createManyDocuments = async (collectionName, data) => {
    const db = await this.connect();
    const collection = db.collection(collectionName);
    const collectionInfo = await db
      .listCollections({ name: collectionName })
      .toArray();
    if (collectionInfo.length === 0) {
      console.warn(
        `Collection '${collectionName}' does not exist or is empty. Creating it...`
      );
      await db.createCollection(collectionName);
      console.log(`Collection '${collectionName}' created.`);
    }

    if (Object.keys(data).length === 0) {
      console.warn("Empty Query Found. Please Check!");
      return null;
    } else {
      const result = await collection.insertMany(data);
      console.log(
        `Inserted a new document into ${collectionName} with ID: ${result.insertedId}`
      );
      return result.insertedId;
    }
  };

  // Read documents from the specified collection
  readDocument = async (collectionName, query = {}, options = {}) => {
    const db = await this.connect();
    const collection = db.collection(collectionName);
    const documents = await collection.find(query, options).toArray();
    return documents;
  };

  // Update a document in the specified collection
  updateDocument = async (collectionName, uniqueParam, newData) => {
    const db = await this.connect();
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(uniqueParam, { $set: newData });
    if (result.modifiedCount === 1) {
      console.log(
        `Updated document with ID ${JSON.stringify(
          result
        )} in ${collectionName}`
      );
      return true;
    } else {
      console.log(`Document with ID ${result} not found in ${collectionName}`);
      return false;
    }
  };

  // Update a document in the specified collection using different params.
  updateDocumentAlter = async (
    collectionName,
    uniqueParam,
    updateKey,
    updatedValue
  ) => {
    uniqueParam = { _id: new ObjectId(uniqueParam) };
    const newData = { [updateKey]: updatedValue };
    const db = await this.connect();
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(uniqueParam, { $set: newData });

    if (result.modifiedCount === 1) {
      console.log(`Updated document with ID ${result} in ${collectionName}`);
      return true;
    } else {
      console.log(`Document with ID ${result} not found in ${collectionName}`);
      return false;
    }
  };

  updateManyDocuments = async (collectionName, filter, update) => {
    const db = await this.connect();
    const collection = db.collection(collectionName);

    if (
      !filter ||
      (typeof filter === "object" && Object.keys(filter).length === 0)
    ) {
      console.warn("Filter is empty. Please check!");
      return null;
    }

    if (!update || Object.keys(update).length === 0) {
      console.warn("Update is empty. Please check!");
      return null;
    }

    const result = await collection.updateMany(filter, { $set: update });

    if (result.modifiedCount > 0) {
      console.log(
        `Updated ${result.modifiedCount} documents in ${collectionName}`
      );
      return true;
    } else {
      console.log(
        `No documents found in ${collectionName} matching the filter.`
      );
      return false;
    }
  };

  // Delete a document from the specified collection
  deleteDocument = async (collectionName, query = {}) => {
    const db = await this.connect();
    const collection = db.collection(collectionName);
    if (Object.keys(query).length === 0) {
      console.warn("Empty Query found. Please Check!");
      return null;
    } else {
      const result = await collection.deleteOne(query);

      if (result.deletedCount === 1) {
        console.log(`Deleted document with ID ${id} from ${collectionName}`);
        return true;
      } else {
        console.log(`Document with ID ${id} not found in ${collectionName}`);
        return false;
      }
    }
  };

  // Delete multiple document from collection.
  deleteManyDocuments = async (collectionName, query = {}) => {
    const db = await this.connect();
    const collection = db.collection(collectionName);
    const result = await collection.deleteMany(query);
    if (Object.keys(query).length === 0) {
      console.warn("Empty Query found. Please Check!");
      return null;
    } else {
      if (result.deletedCount) {
        console.log(`Delete ${result.deletedCount} documents`);
        return true;
      } else {
        console.log(`Document not found`);
      }
    }
  };

  paginate = async (collectionName, pageNo, limit, query = {}) => {
    try {
      const db = await this.connect();
      const collection = db.collection(collectionName);
      const skipCount = (pageNo - 1) * limit;
      const result = await collection
        .find(query)
        .sort({ createdAt: -1 }) // Sort by createdAt in descending order (latest first)
        .skip(skipCount)
        .limit(limit)
        .toArray();

      return result;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new MongoServices();
