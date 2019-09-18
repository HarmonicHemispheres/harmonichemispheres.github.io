
install:
	yarn install

dev:
	gatsby develop

build:
	gatsby build

deploy:
	gatsby build
	git add -f public && git commit -m "Deploying Website (dir: '/public'"
	git subtree push --prefix public origin master