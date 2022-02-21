# Data For Good

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Docker 

If you wish to use Docker, a default Dockerfile is available in `.devcontainer/` to build a docker using a node image from Microsoft.

If using VSCode to develop, the additionnal file `.devcontainer/devcontainer.json` will allow to:

* Suggest opening/starting the container when opening the repository in VSCode
* Forward port 3000 to the local host (default port for Docusaurus development server)
* Run `yarn install` to install required dependencies for the project
* Install VSCode ESLint extension
