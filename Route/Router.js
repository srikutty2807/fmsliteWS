const Router = require("express");
const axios = require("axios");
const { Agent } = require("https");
const data = require("../data.json");
const router = Router()
require("dotenv").config();
const httpClient = axios.create();
httpClient.defaults.timeout = 100000;
router.post("/filterReportData", async (req, res) => {
    const { filterdata, requst } = req.body;
  
    const url = process.env.BASE_URL + requst;
    console.log(url);
    async function reqData() {
      await axios
        .post(url, filterdata, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "stream",
          httpsAgent: new Agent({ rejectUnauthorized: false }),
        })
        .then(function (response) {
          let data = "";
          response.data.on("data", (chunk) => {
            data += chunk.toString();
          });
          response.data.on("end", () => {
            const stringResponse = JSON.stringify(data);
            if (stringResponse.match("html") || data === undefined) {
              res.status(400).json({
                message: "server response is unknown",
              });
            } else {
              const jsonData = JSON.parse(data);
              res.status(200).send(jsonData);
            }
          });
        });
    }
    reqData();
  });
  router.post("/reportPrefData", async (req, res) => {
    const { filterdata, requst } = req.body;
  
    const url = process.env.BASE_URL + requst;
    if (filterdata.menuId === "239") {
     reqMenu()
    } else{
      reqData()
    }
    async function reqMenu(){
    return res.status(200).send(data[0].data);
  }
  
    async function reqData() {
      await axios.post(url, filterdata, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "stream",
          httpsAgent: new Agent({ rejectUnauthorized: false }),
        })
        .then(function (response) {
          let data = "";
          response.data.on("data", (chunk) => {
            data += chunk.toString();
          });
          response.data.on("end", () => {
            const stringResponse = JSON.stringify(data);
            if (stringResponse.match("html") || data === undefined) {
              res.status(400).json({
                message: "server request problem",
              });
            } else {
              const jsonData = JSON.parse(data);
              res.status(200).send(jsonData);
            }
          });
        });
    }
  });
  router.post("/autoCompleteData", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/generateReports", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.R_B_U + requst+`?${filterdata}`
      console.log(url);
      async function reqData() {
        await axios
          .get(url, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/reportsGenerate", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },

            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/vhCount", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.C_B_U + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/vhDetailsList", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/todayDetails", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/loginUserAuth", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/proDet", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/callOut", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/transPorters", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/upProf", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.BASE_URL + requst;
      console.log(url);
      async function reqData() {
        await axios
          .post(url, filterdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/vehiDetails", async (req, res) => {
      const { filterdata, requst } = req.body;
    
      const url = process.env.R_B_U + requst +`?${filterdata}`
      console.log(url);
      async function reqData() {
        await axios
          .get(url, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            responseType: "stream",
            httpsAgent: new Agent({ rejectUnauthorized: false }),
          })
          .then(function (response) {
            let data = "";
            response.data.on("data", (chunk) => {
              data += chunk.toString();
            });
            response.data.on("end", () => {
              const stringResponse = JSON.stringify(data);
              if (stringResponse.match("html") || data === undefined) {
                res.status(400).json({
                  message: "server response is unknown",
                });
              } else {
                const jsonData = JSON.parse(data);
                res.status(200).send(jsonData);
              }
            });
          });
      }
      reqData();
    });
    router.post("/menus", async (req, res) => {
        const { filterdata, requst } = req.body;
      
        const url = process.env.BASE_URL + requst
        console.log(url);
        async function reqData() {
          await axios
            .post(url, filterdata, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              responseType: "stream",
              httpsAgent: new Agent({ rejectUnauthorized: false }),
            })
            .then(function (response) {
              let data = "";
              response.data.on("data", (chunk) => {
                data += chunk.toString();
              });
              response.data.on("end", () => {
                const stringResponse = JSON.stringify(data);
                if (stringResponse.match("html") || data === undefined) {
                  res.status(400).json({
                    message: "server response is unknown",
                  });
                } else {
                  const jsonData = JSON.parse(data);
                  res.status(200).send(jsonData);
                }
              });
            });
        }
        reqData();
      });

module.exports = router;
