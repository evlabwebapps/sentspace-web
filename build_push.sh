#!/bin/sh

yarn build

docker build --tag aamirov/evlabwebapps-sentspace:latest .
docker push aamirov/evlabwebapps-sentspace:latest
