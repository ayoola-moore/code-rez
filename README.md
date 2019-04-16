# Rezdy
Technical assessment for Rezdy

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

Since we are using redux, the most common actions.js, reducers.js etc which composes the business logic


###src/utils
Contains codebase shared across multiple units

###src/stories && .storybook
** Contains configuration setting for storybook, generic style guide. However, all stories are contained within their component directories and only generic design system should be located here.  

###src/styleGuide
The very fundamental of building scalability and maintainable application is proper documentation. This application uses a design system which create multiple design atoms. This directory essential holds the design system within the application in terms of header, fonts, spacing etc. All these are considered atoms

It follows the intuitive order, in a manner depicted in the storybook. The whole idea is construct atom (component)  which create uniformity and those atoms are used within our component. Consider then as associate or helper components.

###src/styleGuide/styles
Contains generic styling such as css-reset, design tokens, story styling etc. However, please note, that component are self-contained and as such maintain their styling. This directory should only contain generic wide styles and in doing implement the design atoms specified.

### src/rootReducer
Since we adopted the self-contained approach in building our component. Its required to have a known integration point for Redux and React. It was decided to use a common convention and thus, name it rootReducer. Its also a crucial to run a couple of integration test.



#scripts (source from package.json)
```Scripts
    "start": "react-scripts start",
    "build": "react-scripts build",
    "serve": "serve -s build",
    "test": "react-scripts test",
    "pretest": "npm run flow",
    "lint:js": "eslint . --ext .js,.jsx",
    "eject": "react-scripts eject",
    "flow": "flow",
    "storybook": "start-storybook -p 9009 -s public",
    "build-storybook": "build-storybook -s public"
```

## Run locally
1. [Clone the repo](#1-clone-the-repo)
2. [Run the application](#2-run-the-application)

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


###Authored By - [Ayoola Moore](https://www.linkedin.com/in/ayoola-moore/){:target='_blank'} for Rezdy
