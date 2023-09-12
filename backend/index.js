import express from "express";
import Moralis from "moralis";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 8888;
dotenv.config();

app.use(cors());
app.use(express.json());

const INFURA_API_KEY = process.env.INFURA_API_KEY;

app.get("/getWalletBalance", async (req, res) => {
  try {
    const { query } = req;
    const response = await Moralis.EvmApi.balance.getNativeBalance({
      chain: "0xaa36a7",
      address: query.address,
    });

    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(400).json;
  }
});

Moralis.start({
  apiKey: INFURA_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log("Listening for API Calls");
  });
});
