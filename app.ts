import express, {Request, Response} from 'express'
import http from 'http'
import fs from 'fs'
import router from './src/routes/urlRoutes'

const app = express()
const server = http.createServer(app);

app.use(express.json({ limit: '10kb' }));


app.use('/', router)

// testing routes
app.get("/", (req:Request,res:Response)=>{
  const readmePath = 'README.md';
  const data = fs.readFileSync(readmePath, 'utf-8');
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end(data);
})


export default app