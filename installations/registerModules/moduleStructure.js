//If the new module is added then firstly the registeries document will get delete and will then 
//again get created with the registries document containing new module

const MongoServices = require("../../libs/mongoServices/mongoServices");
const modulesList = require("./modules");

// Add new module structure here.
const addNewModule = async () => {
  // add your module data below
  let response;
  try {
    // delete the documents of registry collection.
    response = await MongoServices.deleteManyDocuments("registries", {});
    // add new modules to registries.
    for (let item of modulesList) {
      response = await MongoServices.createDocument("registries", item);
    }
    return response;
  } catch (error) {
    throw new Error("Error while registering modules", error);
  }
};

module.exports = addNewModule;
