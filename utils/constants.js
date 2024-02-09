const axios = require("axios");
const { Response } = require("express")
const { Agent }= require("https");
const localtunnel = require("localtunnel");
 async function postReqData(url,filterdata,res) {
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
  async function getReqData() {
    const tunnel = await localtunnel({ port: Number(process.env.PORT) });

    // the assigned public url for your tunnel
    // i.e. https://abcdefgjhij.localtunnel.me
    tunnel.url;
    console.log(tunnel.url)
      
  
    tunnel.on('close', () => {
      // tunnels are closed
  
    });
  }
  
  module.exports = {postReqData,getReqData}