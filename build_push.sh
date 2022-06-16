#!/bin/sh

yarn build

sudo docker build --tag fedorenkolanguagelab/evlabwebapps-sentspace:latest .
sudo docker push fedorenkolanguagelab/evlabwebapps-sentspace:latest
