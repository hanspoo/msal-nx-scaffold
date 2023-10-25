# msal-nx-scaffold

The azure demo proyect 1-call-api, but with nx.

We have not found a project using NX/typescript for azure react/nodejs authentication. So we have
adapted the original MS project. This is the adaptation.

```
git clone https://github.com/hanspoo/msal-nx-scaffold
cd msal-nx-scaffold
npm install

npm run start:spa
npm run start:api
```

## SSL

Today there is an ssl error, so in development disable certificate validation:

```
export NODE_TLS_REJECT_UNAUTHORIZED=0
```

## Usage

### .env file

Create a file named .env and put it in the root.

```
VITE_TENANT_ID=XXXXXXXXXXXXXXXXXXXXXXXXX
VITE_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXX
```

## Original project

For credentials follow ms tutorials:

https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial
