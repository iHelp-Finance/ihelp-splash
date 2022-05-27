# iHelp Main Splash Website

This  project implements a react Next.js client.

For production, the project is designed to be deployed as a series of k8s microservice deployments.

For development, the client app can be deployed as a single nodejs app running on a local machine. Development mode starts with hot reload and watch on client side.

NOTE - the app proxies through the primary iHelp Dapp to get client stats. This is set in the package.json file.

#### Development instructions:

```
# install the requirements
yarn install

npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/home.js`. The page auto-updates as you edit the file.
