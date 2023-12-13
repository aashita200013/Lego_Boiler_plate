const addNewModule = require("./moduleStructure");

addNewModule()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
  });