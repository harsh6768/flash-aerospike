'use strict';
const aerospike=require('aerospike');
const config=require('config');
const aerospikeServer=config.get('config.aerospikeServer')
console.log("aerospikeServer")

class AerospikeService{
    aerospikeClient=null;
    constructor(){}
    static async initilize(){    //singleton method
        if(!this.aerospikeClient){
            this.aerospikeClient = await aerospike.client({
                hosts: aerospikeServer.hosts
            }).connect()
            delete aerospikeClient.constuctor; // so that duplicate singleton instance won't happen
            return this.aerospikeClient || {}
        }
        return  this.aerospikeClient;
    }
}

module.exports = AerospikeService;