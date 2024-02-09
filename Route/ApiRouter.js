const  { Request, Response, Router } = require("express");
const axios = require("axios");
const { Agent } = require("https");
const fs = require('fs');
const path = require('path'); 
const sql = require("mssql");
const { startTunnel } = require("../utils/constants");
var LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch');
const router = Router();
require("dotenv").config();

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
        httpsAgent: new Agent({ rejectUnauthorized: false }),
      })
      .then(function (response) {
        res.status(200).send(response.data);
      }).catch((err)=>console.log(err))
  }
  await reqData();
});
router.post("/reportPrefData", async (req,res) => {
  const { filterdata, requst } = req.body;
  const filePath = path.resolve(__dirname, '../data.json');

  const fileData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileData);
  const url = process.env.BASE_URL + requst;
  if (filterdata.menuId === "239") {
   await reqMenu();
  } else {
   await reqData();
  }
  async function reqMenu() {
    return res.status(200).send(data[0].data);
  }

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
router.post("/autoCompleteData", async (req,res) => {
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
  await reqData();
});
router.post("/generateReports", async (req,res) => {
  const { filterdata, requst } = req.body;
  let url= process.env.R_B_U + requst + `?${filterdata}`;


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
  await reqData();
});
router.post("/reportsGenerate", async (req,res) => {
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
  await reqData();
});
router.post("/vhCount", async (req,res) => {
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
  await reqData();
});
router.post("/vhDetailsList", async (req,res) => {
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
  await reqData();
});
router.post("/todayDetails", async (req,res) => {
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
        httpsAgent: new Agent({ rejectUnauthorized: false }),
      })
      .then(function (response) {
        res.status(200).send(response.data);
      
      }).catch((err)=>  res.status(400).json({
        message: `server retuned error:${err}`,
      }))
  }
  await reqData();
});
router.post("/loginUserAuth", async (req,res) => {
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
        httpsAgent: new Agent({ rejectUnauthorized: false }),
      })
      .then(function (response) {
        res.status(200).send(response.data);
      
      }).catch((err)=> res.status(400).json({
        message: `server response error:${err}`,
      }))
  }
  await reqData();
});
router.post("/proDet", async (req,res) => {
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
  await reqData();
});
router.post("/callOut", async (req,res) => {
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
  await reqData();
});
router.post("/transPorters", async (req,res) => {
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
  await reqData();
});
router.post("/upProf", async (req,res) => {
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
  await reqData();
});
router.post("/vehiDetails", async (req,res) => {
  const { filterdata, requst } = req.body;

  const url = process.env.R_B_U + requst + `?${filterdata}`;
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
      }).catch((err)=>res.status(500).send({message:`error recieved from response: ${err}`}))
  }
  await reqData();
});
router.post("/menus", async (req,res) => {
  const { filterdata, requst } = req.body;
  const filePath = path.resolve(__dirname, '../menu.json');
   
  const fileData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileData);
  if (filterdata) {
    res.status(200).send(data)
  }else{
    res.status(500).send({status:false, data:"",message:"failed"})
  }
  //const url = process.env.BASE_URL +requst
  //console.log(url);
  // async function reqData() {
  //   await axios
  //     .post(url,filterdata, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       responseType: "stream",
  //       httpsAgent: new Agent({ rejectUnauthorized: false }),
  //     })
  //     .then(function (response) {
  //       let data = "";
  //       response.data.on("data", (chunk) => {
  //         data += chunk.toString();
  //       });
  //       response.data.on("end", () => {
  //         const stringResponse = JSON.stringify(data);
  //         if (stringResponse.match("html") || data === undefined) {
  //           res.status(400).json({
  //             message: "server response is unknown",
  //           });
  //         } else {
  //           const jsonData = JSON.parse(data);
  //           res.status(200).send(jsonData);
  //         }
  //       });
  //     });
  // }
  // await reqData();
});
// router.get("/trackByCreteria", async (req, res) => {
//   const {
//     vehicleId,
//     consignerId,
//     consigneeId,
//     carrierId,
//     routeId,
//     lrNumber,
//     invoiceNumber,
//     material,
//     status
//   } = req.query;
//   let whereStat;
//   const closureFromDate = req.query.closureFromDate 
//   const closureToDate = req.query.closureToDate 
//   const dispatchFromDate = req.query.dispatchFromDate
//   const dispatchToDate = req.query.dispatchToDate

//   if (closureFromDate != "") {
//     if (closureToDate != "") {
//       whereStat = ` cm.pod_Date between '${closureFromDate}' and '${closureToDate}'`;
//       //whereStat = " FORMAT(cm.pod_Date, 'yyyy-MM-dd HH:mm:ss') between '" + closureFrom + "' and '" + closureTo + "'";
//     }
//   }
//   if (dispatchFromDate != "") {
//     if (dispatchToDate != "") {
//       if (whereStat != "") {
//         whereStat =
//           whereStat +
//           ` AND cm.dispatch_Date BETWEEN ${dispatchFromDate} AND ${dispatchToDate}`;
//       } else {
//         whereStat = ` cm.dispatch_Date between ${dispatchFromDate} and ${dispatchToDate}`;
//       }
//     }
//   }
//   if (vehicleId != "") {
//     whereStat = whereStat + `and ve.iVehicle=${vehicleId}`;
//   }
//   if (consignerId != "") {
//     whereStat = whereStat + `and cm.consigner_id=${consignerId}`;
//   }
//   if (consigneeId != "") {
//     whereStat = whereStat + `and cm.consignee_id=${consigneeId}`;
//   }
//   if (carrierId != "") {
//     whereStat = whereStat + `and cm.carrier_id=${carrierId}`;
//   }
//   if (routeId != "") {
//     whereStat = whereStat + `and cm.route_id=${routeId}`;
//   }
//   if (lrNumber != "") {
//     whereStat =
//       whereStat +
//       `cm.ADDITIONAL_INFO.value('(additionalInfo/lrNumber)[1]', 'nvarchar(MAX)')=${lrNumber}`;
//   }
//   if (invoiceNumber != "") {
//     whereStat =
//       whereStat +
//       `and cm.ADDITIONAL_INFO.value('(additionalInfo/invoiceNumber)[1]', 'nvarchar(MAX)') = ${invoiceNumber}`;
//   }
//   if (material != "") {
//     whereStat =
//       whereStat +
//       `and cm.ADDITIONAL_INFO.value('(additionalInfo/material)[1]', 'nvarchar(MAX)') = ${material}`;
//   }

//   if (status == "1") {
//     whereStat = whereStat + ` AND cm.POD_DATE IS NULL`;
//   } else if (status == "2") {
//     whereStat = whereStat + ` AND cm.POD_DATE IS NULL AND cm.ONTIME = 0`;
//   } else if (status == "3") {
//     whereStat = whereStat + ` AND cm.POD_DATE IS NULL AND cm.ONTIME = 1`;
//   } else if (status == "4") {
//     whereStat =
//       whereStat + ` AND cm.POD_DATE < GETDATE() AND cm.POD_TYPE IN('A', 'P')`;
//   } else if (status == "5") {
//     whereStat =
//       whereStat +
//       ` AND cm.POD_DATE < GETDATE() AND cm.POD_TYPE IN('A', 'P') AND cm.ONTIME = 0`;
//   } else if (status == "6") {
//     whereStat =
//       whereStat +
//       ` AND cm.POD_DATE < GETDATE() AND cm.POD_TYPE IN('A', 'P') AND cm.ONTIME = 1`;
//   } else if (status == "7") {
//     whereStat =
//       whereStat +
//       ` AND cm.POD_DATE IS NULL AND(cm.ETA BETWEEN GETDATE() AND DATEADD(hh, 2, GETDATE()))`;
//   } else if (status == "8") {
//     whereStat =
//       whereStat +
//       ` AND cm.POD_DATE IS NULL AND(cm.ETA BETWEEN GETDATE() AND DATEADD(hh, 24, GETDATE()))`;
//   } else if (status == "9") {
//     whereStat = whereStat + ` AND cm.POD_TYPE IN('E')`;
//   } else if (status == "10") {
//     whereStat = whereStat + ` AND cm.POD_TYPE IN('C')`;
//   } else if (status == "11") {
//     whereStat = whereStat + ` AND cm.POD_TYPE <> 'M'`;
//   } else if (status == "12") {
//     whereStat = whereStat + ` AND cm.POD_TYPE IN('FFE')`;
//   } else if (status == "13") {
//     whereStat = whereStat + ` AND cm.POD_TYPE IN('FRE')`;
//   } else if (status == "14") {
//     whereStat = whereStat + ` AND cm.POD_TYPE IN('FFE', 'FRE')`;
//   } else if (status == "15") {
//     whereStat = whereStat + ` AND cm.POD_TYPE IN('IA')`;
//   } else if (status == "16") {
//     whereStat = whereStat + ` AND cm.POD_TYPE = 'M'`;
//   }
//   try {
//     //whereStat = "cm.pod_Date between ${closureFromDate} and ${closureToDate}";
//     const fconfig = {
//       user: process.env.DB_USER,
//       server: process.env.DB_SERVER || "localhost",
//       database: process.env.DB_DATABASE,
//       password: process.env.DB_PASSWORD,
//       options: {
//         encrypt: false,
//       },
//     };
//    await sql.connect(fconfig)
//       .then(async () => {
//         console.log("connected to sql");
//       })
//       .catch((err) => console.error("Error connecting to sql", err));
//     const query = `SELECT
//           cm.consignment_id,
//            cm.ADDITIONAL_INFO.value('(additionalInfo/lrNumber)[1]', 
//            'nvarchar(MAX)') 'lrNumber', 
//            cm.VEHICLE_NUMBER as 'vehicleNumber', ve.DRIVER_ID 'driverId',
//             ve.sDriverName 'driverName',
//              cr.CONSIGNER_NAME as 'consignerName',
//               COALESCE(STUFF((SELECT '-' + RouteNode.value('@name', 'VARCHAR(MAX)') FROM ROUTE_NODE_INFO.nodes('/routeNodes/routeNode[position() > 1]') AS Route(RouteNode) FOR XML PATH(''), TYPE).value('.', 'VARCHAR(MAX)'), 1, 1, ''), '') as consigneeName,
//                ca.CARRIER_NAME as 'carrierName', 
//                cm.ADDITIONAL_INFO.value('(additionalInfo/invoiceNumber)[1]', 'nvarchar(MAX)') invoiceNumber,
//                 cm.ADDITIONAL_INFO.value('(additionalInfo/expectedClosure)[1]', 'nvarchar(MAX)') expectedClosure, 
//                 format(cm.DISPATCH_DATE,'yyyy-MM-dd hh:mm:ss') as 'dispatchDate', 
//                 cm.ETA as 'eta', format(cm.POD_DATE,'yyyy-MM-dd hh:mm:ss') as 'closureDate', 
//                 cm.POD_TYPE as 'closureType', 
//                 case when ONTIME = '1' then 'onTime' else 'Delay' end onTime,
//                  case when ONROUTE= '1' then 'onRoute' else 'NA' end onRoute, 
//                  TP_INFO.value('(//distance/actual)[1]', 'VARCHAR(10)') distance, case when cm.POD_TYPE = 'A' then 'Auto Closed' else POD_REASON end 'closureReason', 
//                  ll.BATTERY_LEVEL 'batteryLevel', 
//                  ll.iSpeed speed, 
//                  format(ll.Received_DateTime,'yyyy-MM-dd hh:mm:ss') as lastLocationDatetime, 
//                  'NA' as lastLocation, 
//                  TP_INFO.value('(//transitTime/planned)[1]', 'VARCHAR(10)') AS 'plannedTransitTime',
//                   ll.dLatitude 'latitude', 
//                   ll.dLongitude  'longitude',
//                    COALESCE(STUFF((SELECT '-' + RouteNode.value('@crossedDate', 'VARCHAR(MAX)') FROM ROUTE_NODE_INFO.nodes('/routeNodes/routeNode[position() = 1]') AS Route(RouteNode) FOR XML PATH(''), TYPE).value('.', 'VARCHAR(MAX)'), 1, 1, ''), '') AS 'consignerOut', 
//                    cm.TP_INFO.value('(tpInfo/maxSpeed)[1]', 'INT') maxSpeed, 
//                    cm.TP_INFO.value('(tpInfo/avgSpeed)[1]', 'INT') avgSpeed, 
//                    COALESCE(STUFF((SELECT '/ ' + RouteNode.value('@name', 'VARCHAR(MAX)') FROM ROUTE_NODE_INFO.nodes('/routeNodes/routeNode') AS Route(RouteNode) FOR XML PATH(''), TYPE).value('.', 'VARCHAR(MAX)'), 1, 1, ''), '') AS fullRouteName, 
//                    'NA' as 'nextConsignerCode', 
//                    'NA' as 'nextConsigneeCode', 
//                    'NA' as 'nextConsignerName', 
//                    'NA' as 'nextConsigneeName', 
//                    'NA' as 'nextDispatchDate', 
//                    'NA' as 'returnDate', 
//                    'NA' as 'reverseDistance',
//                     case when IS_FORWARD_CLOSED_BY_ALT = '1' then 'YES' else 'NO' end isClosedByAlt,
//                      'NA' as 'customerType', 
//                      cm.IS_CONSIDER_FOR_RETURN as 'isConsiderForReturn', 
//                      'NA' as 'noOfTimesViolated', 
//                      TP_INFO.value('(//distance/actual)[1]', 'VARCHAR(10)') as forwardDistance,
//                       COALESCE(STUFF((SELECT '/ ' + RouteNode.value('@crossedDate', 'VARCHAR(MAX)') FROM ROUTE_NODE_INFO.nodes('/routeNodes/routeNode[position() > 1]') AS Route(RouteNode) FOR XML PATH(''), TYPE).value('.', 'VARCHAR(MAX)'), 1, 1, ''), '') as crossedDate,
//                        COALESCE(STUFF((SELECT '/ ' + RouteNode.value('@outDate', 'VARCHAR(MAX)') FROM ROUTE_NODE_INFO.nodes('/routeNodes/routeNode[position() > 1]') AS Route(RouteNode) FOR XML PATH(''), TYPE).value('.', 'VARCHAR(MAX)'), 1, 1, ''), '') as exitDate
//             FROM
//               Mtrak16.dbo.vehicles ve
//               JOIN CmsDb.dbo.consignment_master cm ON cm.VEHICLE_ID = ve.iVehicle
//               JOIN CmsDb.dbo.consigner_master cr WITH (NOLOCK) ON cr.CONSIGNER_ID = cm.CONSIGNER_ID
//               JOIN CmsDb.dbo.consignee_master ce WITH (NOLOCK) ON ce.CONSIGNEE_ID = cm.CONSIGNEE_ID
//               JOIN CmsDb.dbo.carrier_master ca WITH (NOLOCK) ON ca.CARRIER_ID = cm.CARRIER_ID
//               JOIN trakounifieddb.dbo.LastLocations ll ON ll.iVehicle = cm.VEHICLE_ID
//             WHERE
//               ${whereStat}`;

//     const request = new sql.Request();
//     const result = await request.query(query);
//     const rows = result.recordset;
//     console.log(rows)
//     if (rows.length > -1) {
//       res.status(200).json({ status: true, data: rows, message: "success" });
//     } else {
//       res
//         .status(200)
//         .json({ status: true, data: rows, message: "no data found" });
//     }
//   } catch (error) {
//     console.error("Error executing query:", whereStat);
//     res.status(500).json({ error: `Internal Server Error: ${error}` });
//   }
// });
router.post("/newGetMenus",async (req,res) => {
  const {filterdata,requst} = req.body
  
  const url = process.env.R_B_U + requst +`?${filterdata}`;
  console.log(url)
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
            console.log(jsonData)
            res.status(200).send(jsonData);
          }
        });
      });
  }
  await reqData();
})
router.get("/newFilterData", async (req,res) => {
  //const { filterdata, requst } = req.body;

  const url = process.env.R_B_U + "GetLandMark"
  console.log(url);
  async function reqData() {
    await axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        httpsAgent: new Agent({ rejectUnauthorized: false }),
      })
      .then(function (response) {
        res.status(200).send(response.data);

      });
  }
 await reqData();
});
router.post("/newFilterVehicle", async (req,res) => {
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
 await reqData();
});
router.get("/getConsigner", async (req,res) => {
  //const { filterdata, requst } = req.body;

  const url = process.env.R_B_U+ "GetConsigner"
  console.log(url);
  async function reqData() {
    await axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        httpsAgent: new Agent({ rejectUnauthorized: false }),
      })
      .then(function (response) {
        res.status(200).send(response.data);
     
      }).catch(error=>console.log(error))
  }
 await reqData();
});
router.get("/getConsignee", async (req,res) => {
  //const { filterdata, requst } = req.body;

  const url = process.env.R_B_U + "GetConsignee"
  console.log(url);
  async function reqData() {
    await axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        httpsAgent: new Agent({ rejectUnauthorized: false }),
      })
      .then(function (response) {
        res.status(200).send(response.data);
      }).catch(error=>console.log(error))
  }
 await reqData();
});
router.post("/changePass", async (req,res) => {
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
  await reqData();
});
router.post("/checkLog", async (req,res) => {
  const { filterdata, requst } = req.body;
   
  const url = process.env.BASE_URL +requst
  console.log(url);
  async function reqData() {
    await axios
      .post(url,filterdata, {
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
        response.data.on("end", async () => {
          const stringResponse = JSON.stringify(data);
          if (stringResponse.match("html") || data === undefined) {
            res.status(400).json({
              message: "server response is unknown",
            });
          } else {
            const jsonData = JSON.parse(data);
            console.log(jsonData)
            localStorage.setItem(process.env.KEY_LOG,jsonData.status)
            res.status(200).send(jsonData);
          }
        });
      }).catch((err)=>res.status(500).send({message: err}))
  }
  await reqData();
});

module.exports = router;
