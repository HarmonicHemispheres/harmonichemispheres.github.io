
install:
	yarn install

dev:
	gatsby develop

build:
	gatsby build

deploy:
	gatsby build
	mv public docs
	git add -f docs && git commit -m "Deploying Website"
	git push