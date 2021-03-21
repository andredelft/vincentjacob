HOST_PORT=5002
IMAGE_TAG=vincentjacob
CONTAINER_NAME=VincentJacob

build:
	docker build -t $(IMAGE_TAG) .

run:
	docker run --name $(CONTAINER_NAME) -p $(HOST_PORT):8000 --detach $(IMAGE_TAG)

update:
	make build
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)
	make run
