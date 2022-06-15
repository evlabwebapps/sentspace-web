react-build:
	yarn build

docker-build: react-build
	docker build --tag fedorenkolanguagelab/evlabwebapps-sentspace:latest .

docker-push: docker-build
	docker push fedorenkolanguagelab/evlabwebapps-sentspace:latest

build-push: docker-build docker-push
