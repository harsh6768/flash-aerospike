const Router=require('express').Router();
const AerospikeController=require('../controller/aerospike')

Router.route('/insertIntoAerospike').post(AerospikeController.insert);
Router.route('/insertIntoAerospike').put(AerospikeController.update);
Router.route('/insertIntoAerospike').delete(AerospikeController.deleteData);


module.exports=Router;