# Toki Pona dictionary

A simple Toki Pona - English dictionary with search function.

This dictionary strives to cover all the words as used by Toki Pona speakers without forgetting about the official dictionary. So it includes some unofficial words and meanings but they are always marked with an asterisk.

This dictionary uses many sources for its information, please see the credits file for more detail.

## Development

The project uses NPM and its ecosystem. So to run it you need at least:

- Node 14.

To begin install depencies using NPM:

```
npm i
```

Now you can start up a server for development:

```
npm start
```

This will lint the code and make the page available at `http://localhost:9000/`.

### Build

To build everything for release or deployment use:

```
npm run build
```

### Utilities

The project includes other commands to aid development.

To see the page in any other device in your local netwrok you can use the following command:

```
npm run start:open
```

This will make the page available under `<IP of the device running the dev server>:9000`. Good for testing in mobile devices.

The command `npm run start:prod` does the same but uses production mode (more optimizations).

#### Linting

To project uses ESLint, to run it use:

```
npm run lint
```
