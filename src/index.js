import dotenv from "dotenv";
import routes from "./routes";
import helmet from "helmet";
import express from "express";
import validate from "express-validation";
import cors from 'cors';
import Youch from "youch";
import BusinessException from "./exceptions/BusinessException";


dotenv.config();

const port = process.env.API_PORT;

const app = express()

app.use(cors())

app.use(helmet());

app.use(routes);

app.use(async (err, req, res, next) => {
  if (err instanceof BusinessException){
    let data = {
      name : err.name,
      message: err.message,
    }
    return res.status(err.status).json(data);
  }
  if (err instanceof validate.ValidationError) {
    return res.status(err.status).json(err);
  }
  if (process.env.NODE_ENV !== "production"){
    const youch = new Youch(err, req);
    return res.json(await youch.toJSON());
  }
  
  return res.status(err.status || 500).json({ error: "Internal Server Error" });
});

app.use

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});