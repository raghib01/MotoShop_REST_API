const express = require("express");

const app = express();
app.use(express.json()); // POST methods, when user input here you can insert data from user

const allYamahaBikes = [
  {
    id: 1,
    bikeName: "MT 15",
    milage: "45 kmpl",
    engine: "155cc",
    price: 525000,
  },
  {
    id: 2,
    bikeName: "R15 v4",
    milage: "40 kmpl",
    engine: "155cc",
    price: 555000,
  },
  {
    id: 3,
    bikeName: "Fazer",
    milage: "45 kmpl",
    engine: "149.5 cc",
    price: 299000,
  },
  {
    id: 4,
    bikeName: "FZ-S v2",
    milage: "40 kmpl",
    engine: "149cc",
    price: 225000,
  },
];
const allSuzukiBikes = [
  {
    bikeName: "Gixxer SF",
    milage: "50 kmpl",
    engine: "155cc",
    price: 319950,
  },
  {
    bikeName: "Bandit",
    milage: "50 kmpl",
    engine: "147.5cc",
    price: 349950,
  },
  {
    bikeName: "samurai",
    milage: "50 kmpl",
    engine: "149.5 cc",
    price: 149950,
  },
  {
    bikeName: "Monotone",
    milage: "45 kmpl",
    engine: "154.9cc",
    price: 199950,
  },
];

app.get("/yamaha", (req, res) => {
  if (req.query.price == "150000") {
    const ratedBikes = allYamahaBikes.filter((bike) => bike.bike <= 150000);
    return res.json(ratedBikes);
  }
  if (req.query.price == "200000") {
    const ratedBikes = allYamahaBikes.filter((bike) => bike.price <= 200000);
    return res.json(ratedBikes);
  }
  if (req.query.price == "500000") {
    const ratedBikes = allYamahaBikes.filter((bike) => bike.price <= 500000);
    return res.json(ratedBikes);
  }
  if (req.query.name == "fazer") {
    const ratedBikes = allYamahaBikes.filter(
      (bike) => bike.bikeName == "Fazer"
    );
    return res.json(ratedBikes);
  }
  if (req.query.name == "R15") {
    const ratedBikes = allYamahaBikes.filter(
      (bike) => bike.bikeName == "R15 v4"
    );
    return res.json(ratedBikes);
  }
  if (req.query.name == "fzsv2") {
    const ratedBikes = allYamahaBikes.filter(
      (bike) => bike.bikeName == "FZ-S v2"
    );
    return res.json(ratedBikes);
  }
  return res.json(allYamahaBikes);
});
app.post("/yamaha", (req, res) => {
  //input users data
  const inputYamaha = req.body;
  allYamahaBikes.push(inputYamaha);
  res.json(allYamahaBikes);
});

app.get("/suzuki", (req, res) => {
  res.json(allSuzukiBikes);
});

app.post("/suzuki", (req, res) => {
  const inputSuzuki = req.body;
  allSuzukiBikes.push(inputSuzuki);
  res.json(allSuzukiBikes);
});

app.delete("/yamaha");

app.listen(4040, () => {
  console.log("server is listening port 4040");
});
