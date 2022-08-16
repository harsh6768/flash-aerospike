# Aerospike

Aerospike Database is a flash memory and in-memory open source distributed key value NoSQL database management system, marketed by the company also named Aerospike

The Real-time Data Platform
The multi-model, NoSQL real-time data platform for multi-cloud, large-scale JSON and SQL use cases. The Aerospike database has the lowest latency with predictable performance at any scale, with industry-leading uptime, requiring up to 80% less infrastructure.


Go to [Official Aerospike Website](https://aerospike.com/) to read more. 


## Install aerospike on mac or windows : 

Step 1 : You have to install setup of [Docker Desktop](https://www.docker.com/products/docker-desktop/) on mac and run Docker Desktop. 

Step 2 : Deploying Aerospike clusters with Docker :

    follow this link to download the aerospike : https://www.docker.com/products/docker-desktop/ 
 
Step 3 : We will be running Aerospike Community Version of container on Mac : 

        
Run below command  to install docker image : 
    
    
     docker pull aerospike/aerospike-server
     
     
Run below command to run the container of aerospike on detach mode : 

    
    docker run -d --name aerospike -p 3000-3002:3000-3002 aerospike/aerospike-server
    
    
    
Follow this link to have better understanding [Docker Image](https://hub.docker.com/r/aerospike/aerospike-server)









                                                   
