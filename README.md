# Steps for local enviroment

## First Step

Create a file name `keys.dev.js` in _server/config/keys_ folder.

Add following into the file

```js
/**
 * Following are the variables used in the app.
 * In production mode this variable should be stored in environment variable on the server.
 *
 * MONGO_URI: it is the connection url of mongoDB i.e. for local: mongodb://localhost:27017/github-explorer
 *
 * TOKEN_KEY: it can be any random string, used as a secret key when creating a login token
 */

module.exports = {
    MONGO_URI: "<your mongo uri>",
    TOKEN_KEY: "<random text>"
};
```

## Second Step

Intall **server** and and **client** dependencies by running following commands

#### For Server Dependencies

> Make sure you are on the root folder.

```bash
npm install
```

#### For Client Dependencies

```bash
cd client
npm install
```

## Third Step

> Make sure you are on the root folder.

To spin up the development server run the following command.

```bash
npm run dev
```

# Available Scripts

> Make sure you are on the root folder.

**For running only Server**

```bash
npm run server
```

**For running only Client**

```bash
npm run client
```
