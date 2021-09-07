import express from 'express'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from 'cors'


dotenv.config();


import Connection from './database/db.js';
import defaultData from './default.js';
import Routes from './routes/routes.js'
import { v4 as uuid } from 'uuid';

const app=express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/',Routes);



const PORT= process.env.PORT || 8000;


const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const URL=`mongodb+srv://${username}:${password}@ecommerceweb.xcihq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

Connection(process.env.MONGODB_URI || URL);

if(process.env.NODE_ENV ==="production"){
    app.use(express.static('client/build'));
}

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
})

defaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = '/callback'
paytmParams['EMAIL'] = 'codeforinterview01@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'
