const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app1 = express();
const app2 = express();
const port1 = 3000;
const port2 = 4000;


const data1 = {
  "airport-center":["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"],
  "mall-center":["06:13","07:13","08:13","09:13","10:13","11:13","12:13","13:13","14:13","15:13","16:13","17:13","18:13","19:13","20:13"],
  "park-center":["06:25","07:25","08:25","09:25","10:25","11:25","12:25","13:25","14:25","15:25","16:25","17:25","18:25","19:25","20:25"],
  "government-center":["06:30","07:30","08:30","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30"],
  "hotel-center":["06:35","07:35","08:35","09:35","10:35","11:35","12:35","13:35","14:35","15:35","16:35","17:35","18:35","19:35","20:35"],
  "center-center":["06:45","07:45","08:45","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:45","18:45","19:45","20:45"],
"center-airport":["06:01","07:01","08:01","09:00","10:00","11:00","12:00","13:00","14:00","15:00","20:00","17:00","18:00","19:00","20:00"],
"hotel-airport" :["06:15","07:15","08:15","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15","20:15"],
 "government-airport":["06:25","07:25","08:25","09:25","10:25","11:25","12:25","13:25","14:25","15:25","16:25","17:25","18:25","19:25","20:25"],
 "park-airport" :["06:30","07:30","08:30","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30"],
 "mall-airport" :["06:35","07:35","08:35","09:35","10:35","11:35","12:35","13:35","14:35","15:35","16:35","17:35","18:35","19:35","20:35"],
 "airport-airport" :["06:45","07:45","08:45","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:45","18:45","19:45","20:45"]};

app1.use(cors());
// Serve the JSON file from a folder
app1.get('/data1', (req, res) => {
    res.json(data1);
  });
;

app1.listen(port1, () => {
  console.log(`Server is running on http://localhost:${port1}`);
});



 
var data2 = {};

function fetchData() {
  data2 = JSON.parse(fs.readFileSync('./BusPing.json'));
};

// Fetch immediately and then every 10 seconds
fetchData();
setInterval(fetchData, 10000);
  //file where the bus reports its expected time at eah station (its outside our system). based on their navigation app with an API

app2.use(cors());
// Serve the JSON file from a folder
app2.get('/data2', (req, res) => {
    res.json(data2);
  });


app2.listen(port2, () => {
  console.log(`Server is running on http://localhost:${port2}`);
});

//server2



