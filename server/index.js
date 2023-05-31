import dotenv from 'dotenv';
dotenv.config();// Hebergement config
import connectToDatabase from './database.js';
import express from 'express';
import path from 'path'
//Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

connectToDatabase();

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal',(req,res)=>res.send(process.env.PAYPAL_CLIENT_ID));// Hebergement config


const port = process.env.PORT || 5000;

// Hebergement config
const __direname = path.resolve()
app.use('/uploads',express.static(path.join(new URL('.', import.meta.url).pathname,'uploads')));

if(process.env.NODE_ENV =='production'){
  app.use(express.static(path.join(__direname,'/client/build')));

  app.get('*',(req,res)=> res.sendFile(path.resolve(__direname,'client','build','index.html')))
}// Hebergement config




app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
