# Library build base stack

Example how to build custom library with:
- Vite.js Library mode
- Rollup TBD

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

```
├── apps
│   ├── example-app
│   │   ├── vite.config.js
├── packages
│   ├── vitejs-library-base-setup
│   │   ├── .storybook
│   ├── rollup-library-base-setup
```

- `example-app`: Vite.js exampole app to test libraries
- `vitejs-library-base-setup`: Vite.js library based on Library Mode
- `ollup-library-base-setup`: Rollup library TBD

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Autoprefixer]() parse CSS and add vendor prefixes

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop
To run `example-app`
```
yarn dev
```

To build separate libvraries
```
cd packages/[library name]
yarn build
```

### Throubleshootig
#### Autoprefixer
create `postcss.congif.js`
```
export default {
  plugins: {
    autoprefixer: {},
  },
}
```

and to `package.json` add
```
"browserslist": [
  "> 1%",
  "last 5 versions"
]
```
