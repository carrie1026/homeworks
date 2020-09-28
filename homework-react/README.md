# Home work - Instructions
The main technical stack：react + react-router + axios

# Start project

## First, start mock server
Please clone or download this mock server project to your local, and use `npm` or `yarn` to install the dependences and start server:

```
npm install
npm start
```

Or

```
yarn install
yarn start
```

## Then, Start homework project server
Please clone or download this project to your local, and use `npm` or `yarn` to install the dependences and start server:

```
npm install
npm run dev
```

Or

```
yarn install
yarn dev
```

Then you can access `http://localhost:8086/agent` to see.

## Building
```
npm run build
```
or
```
yarn build
```
To build project, output file: 'dist'


## Documentation
- [api](src/api): set global apis, use axios 
- [containers](src/containers): functional unit
    - [app](src/containers/app): entry module
    - [agent](src/containers/app): agent mudule
    - [header](): pages default component: header
    - [footer](): pages default component: footer
    - [menu](): pages default component: menu
- [components](src/components): ui components
- [utils](src/utils): package functions
- [route](src/route.js): set page routers



## About browser
Develop && debug : Chrome
Test: Chrome && Firefox && Safari , all pass.