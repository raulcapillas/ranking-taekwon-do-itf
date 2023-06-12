# itf-ranking

Empty project.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```

To run cypress:

```sh
npm cypress:open
```


# Apendix #

## ReactJS folder structure ##

- https://dev.to/yacouri/reactjs-folder-structure-boilerplate-155n

### 📁 Components ### 
This folder contains all of our application presentational components (Stateless Components).

### 📁 Containers ###
In this folder we have the Stateful components (Smart component) where we keep tracking the state.

### 📁 Constants ###
In this file we group all constants like regex.

### 📁 Helpers ###
Here we create and export functions that will be re-used in different places in our application.

### 📁 Hooks ###
A folder made for customized hooks.

### 📁 Layouts ###
It contains layout files such as Navbar, Footer, Sidebar.
Layouts are used to wrap a specific components.

### 📁 Pages ###
This folder contains pages components like Home, Contact etc...
Each page wrapped with a specific Layout

### 📁 Validations ###
Here we write our form validation and rules using a library like [Formik](https://formik.org/docs/overview).

### 📁 Services ###
In this folder we manage all of the API requests by creating files for each service.

### 📁 Context ###
This folder contains all the context files where we manage and globalize the state in our application such as theming styles.

### 📁 Config ###
All of our application configuration will be here in this folder.

### 📁 i18n ###
This folder is made for multi-language support.
You can create subfolders with a JSON file for each language you want to translate.
Take a look to their Step by Step guide [HERE](https://react.i18next.com/latest/using-with-hooks).


## Create android folder ##

1. Open terminal and launch this:
$ ionic capacitor add android


LDPI: Portrait: 200 X 320px
MDPI: Portrait: 320 X 480px
HDPI: Portrait: 480 X 800px
XHDPI: Portrait: 720 X 1280px
XXHDPI: Portrait: 960 X 1600px
XXXHDPI: Portrait: 1440 x 2560px