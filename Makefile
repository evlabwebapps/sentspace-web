react-build:
	yarn build

docker-build: react-build
	docker build --tag aamirov/evlabwebapps-sentspace:latest .

docker-push: docker-build
	docker push aamirov/evlabwebapps-sentspace:latest

build-push: docker-build docker-push