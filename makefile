
install:
	yarn install

dev:
	gatsby develop

build:
	gatsby build

deploy:
	git subtree push --prefix public origin master