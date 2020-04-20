# **OAUTH 2.0**

## Dependencies
- docker-compose
- postgreSQL
- FusionAuth

# Steps to setup

## Install docker-compose first from https://docs.docker.com/compose/install/

then run these commands in shell
```zsh
curl -o docker-compose.yml https://raw.githubusercontent.com/FusionAuth/fusionauth-containers/master/docker/fusionauth/docker-compose.yml

curl -o .env https://raw.githubusercontent.com/FusionAuth/fusionauth-containers/master/docker/fusionauth/.env

docker-compose up
```

FushionAuth should be running on http://localhost:9011

## FushionAuth Setup
- create a new application
- change Authorized Redirect URL to
```
http://localhost:9000/oauth-callback
```
- change logout URL to your sign in page URL. for me it was just my main page
```
http://localhost:3000
```
- click save
- select users from the side panel
- you should see an application called FushionAuth. register your username to your new application


- clone the repository
- run npm install in root