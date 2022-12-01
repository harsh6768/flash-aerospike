# Aerospike

Aerospike Database is a flash memory and in-memory open source distributed key value NoSQL database management system, marketed by the company also named Aerospike

The Real-time Data Platform
The multi-model, NoSQL real-time data platform for multi-cloud, large-scale JSON and SQL use cases. The Aerospike database has the lowest latency with predictable performance at any scale, with industry-leading uptime, requiring up to 80% less infrastructure.


Go to [Official Aerospike Website](https://aerospike.com/) to read more. 


## Install Aerospike on Ubuntu : 

Follow [this link ](https://docs.aerospike.com/tools/install/ubuntu) to install aerospike tools on ubuntu.

 There are multiple steps to install aerospike on linux :
 
 1. Run below command to download aerospike into linux 
 
        wget -O aerospike.tgz https://download.aerospike.com/artifacts/aerospike-server-community/6.0.0.5/aerospike-server-community-6.0.0.5-ubuntu18.04.tgz --no-check-certificate
               
 2. unzip tgz file , run below command 
 
        tar -xvf aerospike.tgz
  
  3.  Go to the aerospike folder , run below command 

        cd aerospike-server-community-6.0.0.5-ubuntu18.04/
        
  4.  Run below command to install aerospike by running below command 

        sudo  ./asinstall 
  
  5. Configure Aerospike conf file , go the below mentioned path and edit aerospike.conf

       cd /etc/aerospike/aerospike.conf
       
  6. vi aerospike.conf 


        # Aerospike database configuration file for use with systemd.

    service {
            paxos-single-replica-limit 1 # Number of nodes where the replica count is automatically reduced to 1.
            proto-fd-max 15000
    }

    logging {

        # Log file must be an absolute path.
        file /opt/logs/aerospike.log {
            context any info
       }

        # Send log messages to stdout
        console {
            context any info
        }
    }
    #
    #


    network {
            service {
                    address any
                    port 3000
            }

            heartbeat {
                    mode mesh
                    address Ip_address_of_server
                    port 3002
                    #mesh-seed-address-port 127.0.0.1 3002 # IP address for seed node in the cluster
                    #mesh-seed-address-port 127.0.0.1 3002 # IP address for seed node in the cluster
                    #mesh-seed-address-port 127.0.0.1 3002 # IP address for seed node in the cluster

                    # To use unicast-mesh heartbeats, remove the 3 lines above, and see
                    # aerospike_mesh.conf for alternative.

                    interval 150
                    timeout 10
            }

            fabric {
                    port 3001
            }

            info {
                    port 3003
            }
      }


      namespace test_users{
            replication-factor 2
            memory-size 4G

            storage-engine device {
            file /opt/aerospike/data/user.dat
            filesize 20G
            data-in-memory false
       }
      }
      
  7. Create log folder for aerospike logs 

     /opt/

## Install aerospike on mac or windows : 

Step 1 : You have to install setup of [Docker Desktop](https://www.docker.com/products/docker-desktop/) on mac and run Docker Desktop. 

<img src="https://github.com/harsh6768/flash-aerospike/blob/master/Images/Screenshot%202022-08-16%20at%2010.49.06%20PM.png"/>


Step 2 : Deploying Aerospike clusters with Docker :

    follow this link to download the aerospike : https://www.docker.com/products/docker-desktop/ 
 
Step 3 : We will be running Aerospike Community Version of container on Mac : 

<img src="https://github.com/harsh6768/flash-aerospike/blob/master/Images/Screenshot%202022-08-16%20at%2010.51.05%20PM.png"/>

        
Run below command  to install docker image : 
    
    
     docker pull aerospike/aerospike-server
     

### Docker Container Run images, for better understading : 

https://docs.aerospike.com/tools/deploy_guides/docker/tools

Run below command to run the container of aerospike on detach mode : 

    
    docker run -d --name aerospike -p 3000-3002:3000-3002 aerospike/aerospike-server
    
    
    
Follow this link to have better understanding [Docker Image](https://hub.docker.com/r/aerospike/aerospike-server)




## Run Aerospike Query Language ( AQL ) in docker image by running below command

        
     docker run -ti aerospike/aerospike-server aql -h  $(docker inspect -f '{{.NetworkSettings.IPAddress }}' aerospike)


<img src="https://github.com/harsh6768/flash-aerospike/blob/master/Images/Screenshot%202022-08-16%20at%2011.16.27%20PM.png"/>

                                               
                                               
 # Aerospike Configuration 
 
 #### Aerospike uses a single file to configure a database node. The default location of the configuration file is 
 
    /etc/aerospike/aerospike.conf


#### Goto Aerospike Documentation for detailed information of [Aerospike Configuration](https://docs.aerospike.com/server/operations/configure)


### Basic Configuration Of Aerospike , File default location /etc/aerospike/aerospike.conf


    # Aerospike database configuration file for use with systemd.

    service {
            paxos-single-replica-limit 1 # Number of nodes where the replica count is automatically reduced to 1.
            proto-fd-max 15000
    }

    logging {

        # Log file must be an absolute path.
        file /opt/logs/aerospike.log {
            context any info
       }

        # Send log messages to stdout
        console {
            context any info
        }
    }
    #
    #


    network {
            service {
                    address any
                    port 3000
            }

            heartbeat {
                    mode mesh
                    address 127.0.0.1
                    port 3002
                    mesh-seed-address-port 127.0.0.1 3002 # IP address for seed node in the cluster
                    mesh-seed-address-port 127.0.0.1 3002 # IP address for seed node in the cluster
                    mesh-seed-address-port 127.0.0.1 3002 # IP address for seed node in the cluster

                    # To use unicast-mesh heartbeats, remove the 3 lines above, and see
                    # aerospike_mesh.conf for alternative.

                    interval 150
                    timeout 10
            }

            fabric {
                    port 3001
            }

            info {
                    port 3003
            }
    }


    namespace test_users{
            replication-factor 2
            memory-size 4G

            storage-engine device {
            file /opt/aerospike/data/user.dat
            filesize 20G
            data-in-memory false
      }
    }
