import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({ path: './.env' });
import app from './app'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DATABASE: string;
    }
  }
}

const DATABASE = process?.env?.DATABASE || "";
const DATABASE_PASSWORD = process?.env?.DATABASE_PASSWORD || ""

const DB = DATABASE.replace(
  '<PASSWORD>',
  DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});