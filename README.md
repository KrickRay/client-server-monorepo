# Base

## Structure

-   root
    -   packages
        -   app
        -   client
        -   server

## Init

-   Yarn
    ```sh
    npm i -g yarn
    ```

## Bootstrap

```sh
yarn bootstrap
```

## Start

```sh
yarn start
```

## Deps

-   Add to root

    ```sh
    yarn add <PACKAGE> -W [--dev]
    ```

-   [Add to scope](https://github.com/lerna/lerna/tree/master/commands/add)
    ```sh
    lerna add <PACKAGE/SCOPE> --scope=<SCOPE> [--dev]
    ```
