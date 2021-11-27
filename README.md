## Repo Github

https://github.com/kant003/kenko

## Url deploy

https://kenko--app.web.app/

## Create a .env file for firebase configure

Create a file .env on root 

```
REACT_APP_API_KEY=xxx

REACT_APP_AUTH_DOMAIN=xxx

REACT_APP_DATABASE_URL=xxx

REACT_APP_PROJECT_ID=xxx

REACT_APP_STORAGE_BUCKET=xxx

REACT_APP_MESSAGING_SENDER_ID=xxx

REACT_APP_ID=xxx

REACT_APP_CONFIRMATION_EMAIL_REDIRECT=http://localhost:3000

```


## Install
### `npm install`


## Start server

### `npm start`


## Run tests

### `npm test`


## Create app (build)

### `npm run build`


## Deployar on firebase

### `npm install -g firebase-tools`
### `firebase login`
### `firebase init`


? What do you want to use as your public directory? build

? Configure as a single-page app (rewrite all urls to /index.html)? Yes

? Set up automatic builds and deploys with GitHub? No

? File build/index.html already exists. Overwrite? No

### `firebase deploy`

### BLOCKCHAIN
Hardhat para el manejo de los contratos
Ethers para el puente React -> Blockchain

En contracts está el contrato de Kenk, token simple para el 
hackathon que unicamente mintea tokens en cuanto se le indica
una transaccion al método giveTokens con el address y la cantidad
que se le pase por parametro, esto solo es así en entorno de pruebas.

Abrir una blockchain local para deployar y testear el contrato

`npx hardhat node`

Compilar el contrato

`npx hardhat compile`

Deployar el contrato al localhost

`npx hardhat run scripts/deploy.js --network localhost`


# API Backend

https://github.com/kant003/kenkoBackend
