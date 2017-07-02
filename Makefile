install:
	npm install
start:
	npm run babel-node -- src/bin/brain-progression.js
publish:
	npm publish
lint:
	npm run eslint -- src
