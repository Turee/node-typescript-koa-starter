# Node TypeScript Koa Starter [![CircleCI](https://circleci.com/gh/Turee/node-typescript-koa-starter.svg?style=svg)](https://circleci.com/gh/Turee/node-typescript-koa-starter)

Bare minimum for getting started with Koa + TypeScript.

**Getting started**

```bash
mkdir your-project
cd your-project
git init
git remote add template git@github.com:Turee/node-typescript-koa-starter.git
git fetch template
git reset --hard template/master
```

**Has:**

- Configuration using environment variables.
- [Yup](https://github.com/jquense/yup) for environment variable validation.
- [Jest](https://github.com/facebook/jest) and [supertest](https://github.com/visionmedia/supertest) for testing.
- [Prettier](https://prettier.io/) for code automagic code formatting.
- Dockerfile.

**Usage:**

Start development: `yarn start` 

Build for production `yarn build`

Test: `yarn test`

Watch tests: `yarn watch-test`
