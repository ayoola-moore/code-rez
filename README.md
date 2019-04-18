# Rezdy

Technical assessment for Rezdy. As part of assessment, I have added a couple of features which were not explicitly required but was to ensure proper documentation, code quality, and organization.

For example, storybookJs was used in implementing a design system/component library for the product, as well other code quality check like husky and linted-staged was introduced in the process.

Flow was also used to ensure 100% test coverage. I have also alternated between snapshot, unit, and integration test

# Notable tech stack includes the following

1. React
2. Redux
3. Flow
4. Jest
5. Storybook
6. Sass
7. Prettier & ES6 linting (specifically to keep code uniformed for feature collaboration)

#Key architecture follows these principles

1. Separating business logic as Javascript specific functions
2. Managing state using Redux containers
3. Keeping components presentational & reusuable
4. Follows a system design paradigm
5. Styling property uses sass variable

#Project structure [ !important ]

### src/components

Components are designed as self-contained. Containing their test files, styles, stories, and utilities etc.

This directory is a representation of presentation and re-usable components

### src/features

This would contain the business logic of the application as specified as a feature requirement. This would also be self-contained as it is in with the case of component directory

Since we are using redux, the most common files to be found in this directory are actions.js, reducers.js etc which composes the business logic

### src/routes

This directory contains 3 important structures

1. routeLinks - Which is basic object representation of all our links
2. routes - Which is controls the switch/routing of application
3. It's sub-directories - This is like a page representation to our application. They are special type of component which composes of components from our library and feature from the features directory. The directory would contain for example - Home (showing the home route), Recipe (showing the list of recipe)

\*\* structuring of application is always of a huge debate. If Rezdy paradigm differs from this, I would like to explan my view as why this is a preference for scalability, project management, and organization. I believe if the "components" directory contain reusable atoms, and the "features" contains our verbs / business logic e.g get recipe.

There should be a special component that composes both together. I also understand that some companies preference differ than what I have stated here e.g the sub-directories as stated above would also be contained within component or features directory. This shouldn't be a mark down.

###src/utils
Contains codebase shared across multiple units. By default, I have this directory ready when starting a new project

###src/stories && .storybook
\*\* Contains configuration setting for storybook, generic style guide. However, all stories are contained within their component directories and only generic design system should be located here.

###src/styleGuide
This support the components, they entail things such line-spacing, color, fonts, margin, padding defination etc. This entails a more generalist approach to controlling the order of things within our application.

###src/styleGuide/styles
Contains generic styling such as css-reset, design tokens, story styling etc. However, please note, that component are self-contained and as such maintain their styling. This directory should only contain generic wide styles and in doing implement the design atoms specified.

### src/rootReducer

Since we adopted the self-contained approach in building our component. Its required to have a known integration point for Redux and React. It was decided to use a common convention and thus, name it rootReducer. Its also a crucial to run a couple of integration test.

#scripts (source from package.json)
Preferably you want to keep an eye on the following script in seperate tabs when developing. See below.

1. Storybook
2. Flow
3. Test

The normal convention would be "npm run ..." without the quote and ... replaced with the tag name

```Scripts
    "start": "react-scripts start",
    "build": "react-scripts build",
    "serve": "serve -s build",
    "test": "react-scripts test",
    "lint:js": "eslint . --ext .js,.jsx",
    "eject": "react-scripts eject",
    "flow": "flow",
    "storybook": "start-storybook -p 9009 -s public",
    "build-storybook": "build-storybook -s public"
```

## Run locally

1. [Clone the repo](#1-clone-the-repo)
2. [Run the application](#2-run-the-application)
3. run "flow-typed install" before running flow

### 1. Clone the repo

Clone the repo locally. In a terminal, run:

```
$ git clone git@github.com:ayoola-moore/code-rez.git
```

### 2. Run the application

1. Install [Node.js](https://nodejs.org/en/)
2. Run the following commands in a terminal:

```
$ npm install

$ npm run start
```

Verify app is running and working correctly.

## Run the application using Docker

1. [Build the image](#1-build-the-image)
2. [Run the image](#2-run-the-image)

## Prerequisites:

1. [Create Docker account](https://cloud.docker.com/)

2. [Install Docker CLI](https://docs.docker.com/install/)

3. [Retrieve and save your Docker user id](https://cloud.docker.com/)

### 1. Build the image

In a terminal, run:

```
$ docker build -t $docker_username/rezdy .
```

Your image should be listed by running:

```
$ docker images
```

### 2. Run the image

In a terminal, run:

```
$ docker run -p 3000:3000 -d $docker_username/rezdy
```

You can now access the application at http://localhost:3000

###Authored By - [Ayoola Moore](https://www.linkedin.com/in/ayoola-moore/){:target='\_blank'} for Rezdy
