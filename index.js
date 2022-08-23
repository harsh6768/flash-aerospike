const express=require('express');
const app= express();

//GET CONFIG from default config file
const config=require('config')
const serverConfig=config.get('serverConfig')

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended : false}))

//routes
app.use('/',require('./routes/routes'))
const PORT=serverConfig.PORT || 9000
app.listen(PORT,async()=>{
    console.log(`Server is up and running on port ${PORT}`);
})