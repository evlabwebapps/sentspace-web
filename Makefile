react-build:
	yarn build

docker-build: react-build
	sudo docker build --tag fedorenkolanguagelab/evlabwebapps-sentspace:latest .

docker-push: docker-build
	sudo docker push fedorenkolanguagelab/evlabwebapps-sentspace:latest

build-push: docker-build docker-push
