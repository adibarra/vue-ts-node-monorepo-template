<h1 align="center">
  <a href="__APP_URL__/">
    <img src="./packages/client/public/favicon.svg" alt="Logo" height="128">
  </a>
  <br>
  __APP_NAME__
</h1>

<h3 align="center"><strong>A template for a vue + ts + node fullstack monorepo.</strong></h3>

<p align="center">
  <a href="https://github.com/__APP_GITHUB__/issues">
    <img src="https://img.shields.io/github/issues/__APP_GITHUB__" alt="issues">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/last-commit/__APP_GITHUB__" alt="last commit">
  </a>
  <br />
  <a href="#tooling">Tooling</a> •
  <a href="#environment-setup">Environment Setup</a> •
  <a href="#run-project">Run Project</a> •
  <a href="#license">License</a>
</p>

<!-- ![screenshot](./.github/screenshot.png) -->

## Overview

This template is a fullstack monorepo that uses Vue, TypeScript, and Node. It is set up to be a starting point for a new project.

Search and replace the following placeholders:
`__APP_NAME__`: The name of the app.
`__APP_DESCRIPTION__`: A brief description of the app.
`__APP_URL__`: The full URL of the app.
`__APP_GITHUB__`: The GitHub repository of the app.

## Tooling

#### VSCode

VSCode is **highly recommended**, the repo is currently set up to take advantage of devcontainers which automatically set up all dependencies for you. This is the easiest way to get the project up and running. Instructions for installing VSCode can be found [here](https://code.visualstudio.com/download).

#### Docker

If you want to take advantage of the devcontainer then docker is **required**. If you are planning on setting up the environment manually then it is not needed. Instructions for installing Docker can be found [here](https://www.docker.com/products/docker-desktop/).

## Environment Setup

This is a one-time setup. If you have already done this, you can skip to the next section.

1.  Open Docker Desktop. Make sure it is updated and running before continuing.
2.  Open VSCode and install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
3.  In VSCode, press `Ctrl+Shift+P` and type `Git: Clone`.
4.  You may be prompted to login to your GitHub account. Sign in.
5.  Type `__APP_GITHUB__`. Select it.
6.  If prompted, select the `main` branch.
7.  Once cloned, you should see a popup in the bottom right corner of the screen. Click `Reopen in Container`.
8.  Let the container build. This can take **1-5 minutes** depending on your machine (only the first time).
9.  Once the build is complete, you can begin development.
10. Make sure to fill out the `.env` files with the appropriate values.

<details>
<summary>Manual Environment Setup</summary>
The devcontainer does this for you **and** ensures parity with the production environment.

1. Install [nvm](https://github.com/nvm-sh/nvm) for your platform.
2. Git clone the repository.
3. Run the following commands:

```bash
  $ nvm use || nvm install --lts
  $ corepack enable
  $ corepack install
  $ cp --no-clobber .env.example .env.production
  $ cp --no-clobber .env.example .env.development
```

6. Additionally, make sure to fill out the `.env` files with the appropriate values.
</details>

## Reconnect to Environment (devcontainer)

You can re-attach the devcontainer by doing the following from a new VSCode window:

1. Click the `Remote Explorer` tab.
2. Select `Dev Containers` in the dropdown menu.
3. Find the correct container.
4. Click the `→` button to re-attach the container.
5. You can now continue development.

## Run Project

Make sure you are in the repo's root directory before running these commands.

```bash
  # # # # # # # # # # # # # # # # # # # # # # # #
  # Start the development environment           #
  # Access the app here: http://localhost:3333  #
  # # # # # # # # # # # # # # # # # # # # # # # #
  $ pnpm dev

  # --- OR ---

  # # # # # # # # # # # # # # # # # # # # # # # #
  # Build and run for production (preview mode) #
  # Access the app here: http://localhost:3000  #
  # # # # # # # # # # # # # # # # # # # # # # # #
  $ pnpm build && pnpm preview
```

## Project Scripts

| Scripts        | Description                                        |
| -------------- | -------------------------------------------------- |
| pnpm install   | installs dependencies for entire project           |
| pnpm dev       | runs development environment                       |
| pnpm clean     | removes build artifacts                            |
| pnpm clean:all | removes build artifacts and dependencies           |
| pnpm lint      | prints warnings about code formatting              |
| pnpm lint:fix  | auto-fixes the code formatting                     |
| pnpm build     | builds the app for production                      |
| pnpm preview   | runs the full built app in production preview mode |

## License

Licensed under the MIT license.
