import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js'; 

// configure env
dotenv.config(); // call kortese

// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// database config
connectDB();

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product",productRoutes);

// rest api
app.get('/', (req, res) => {
  res.send('<h1>Welcome to BAJAR.COM</h1>');
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
