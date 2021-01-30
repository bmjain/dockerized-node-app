### Dockerizing a NodeJS-Angular App with AutoComplete field

#### Prerequisites
- Docker
- Node v14.15.4 (For Local Install)

To run this app locally on the client machine, follow the instructions listed [here](code/Readme.md)

#### Instruction to run as Docker Application 

In order to run this as a Docker application, here are the steps to be followed.

- From the parent folder, Build the Docker image using the command `docker build -t node-web-app .`
- After the build is successful, check if the docker image is created using the command `docker images`
- Now, Run the Docker Image using the command `docker run -p 49160:3000 -d node-web-app`
- Verify if the docker container is up and running by running the command `docker ps` and `docker logs <container_id>`
- If the container is running, navigate to http://localhost:49160 to view the application running on the browser


## For Curl Instructions
- Once the docker application is running on the browser, run the command `curl http://localhost:49160/api/getData?q=rich` from your terminal and the output should be list of names matching the query.
