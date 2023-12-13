const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const { magicJson } = require("./system");

const app = express();


app.post("/service",  async (req, res) => {
    try {
      // GetBody DATA
      const { body } = req;
      const request = JSON.parse(body.request);
      const data = request;
      let proceed = false;



      const datanbase = new Database();
    getModule = await datanbase.findDocuments("registries", {
      API: data.endpoint,
    });
    if (getModule[0].isSecure === false) {
      proceed = true;
    }
    if (!getModule.length) {
      throw new Error("Given Module not found.");
    }

      const dataJson = _.cloneDeep(magicJson);
      
      const requestValue = {
        data: data
      };

     // Load Modules
     moduleName = `./sourcecode/${data.endpoint}/${data.endpoint}`;
     const module = require(moduleName);
     // Execute module
     const moduleResponseValue = await module[data.executor](requestValue);

           // Create Response
           dataJson.type = "response";
           dataJson.data.push(moduleResponseValue);

           const endpoint = await request.endpoint;
           const executor = await request.executor;
           const reqData = await request.data;
           const json = {
            endpoint: endpoint,
            executor: executor,
            data: reqData,
            response: dataJson.data[0],
          };

      res.send(dataJson);
    } catch (error) {
      const errorJson = _.cloneDeep(magicJson);
      (errorJson.type = "error"),
        errorJson.data.push({
          message: "something is wrong with server.",
          details: `${error}`,
        });
      console.log(`${error}`.red);
      // errorlogger.log("error", `type: response ${JSON.stringify(errorJson)}`);
      try {
        res.send(errorJson);
      } catch (err) {
        console.log(err);
      }
    }
  });

//Adding Header for CORPS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
//MongoDB Connection + Server setting(port 8080)
mongoose.connect('mongodb://localhost:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});