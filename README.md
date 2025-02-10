# Manual for Coltiva devices

The manual website is built using [Docusaurus](https://docusaurus.io/), a static website generator. The website is hosted on Github Pages: https://coltiva.github.io/coltiva-user-docs/

### Installation

Install Node.js on your computer to do local development. For example, using a pre-built installer: https://nodejs.org/en/download/prebuilt-installer   

Then run `npm install`

### Local Development

```
npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

Any changes pushed to `master` are built and deployed to Github Pages using [Github Actions](https://github.com/coltiva/coltiva-user-docs/actions).
