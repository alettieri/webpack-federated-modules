# Example app for Federated Module Components using Webpack

This app demonstrates how one could setup a webpack app with Federated Modules. It consists of two applications

## App A

`Host`: `http://localhost:3001`

*App A* is a standalone application. It contains common components in the `src/components` directory. Those will be exposed and will allow *App B* to consume them.

## App B

`Host`: `http://localhost:/3002`

*App B* is a standalone application. It consumes components from *App A*.


## Setup

```
yarn install
```

## Develop

```
yarn dev
```

## Build

```
yarn build
```