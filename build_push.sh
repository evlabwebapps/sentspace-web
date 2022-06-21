#!/bin/sh

yarn build

sudo docker build --tag aamirov/evlabwebapps-sentspace:latest .
# docker push aamirov/evlabwebapps-sentspace:latest
