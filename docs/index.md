---
 layout: default
---

##Shovel apps Panel

**Shovel apps panel** is a small full stack hybrid app. It's a mobile oriented web app with a backend panel that allows you to configure the app frontend and backend services. From the panel, you can request Shovel apps platform for a mobile app for iOS 7.x , Windows Phone 8.x and Android 4.x platforms.

* [What sorcery is this?](#what-sorcery-is-this)
* [Installation](#installation)
* [Running](#running)
* [Rest API Endpoints](#rest-api-endpoints)
* [License](#license)
* **Development**
 * [Plugins](#plugins)
 * [Roadmap](#roadmap)
* **You can git clone it and start it** as any other node project. 
* Customized
* Use plugins that connect your appt to the [Shovel apps Platform]()
* **Build Android binariesfiles from the admin panel**

You could think about Shovelapps Panel as _A pluggable CMS frontend and backend for mobile apps_. 


![Seen in the browser](https://cldup.com/4Q-ZFM5hYG.gif)
![Seen in the mobile as an hybrid app](https://cldup.com/4Q-ZFM5hYG.gif)


##What does Shovel apps Panel offer?

* **A consistent CSS based UI**. You don't have to fight with margins, responsivenes and stuff. You use the [components](#components) in the templates and that's it.
* **Easily customizable templates**.
 * The template is an HTML file. It uses custom elements as `<navbar></navbar>` `<content-block></content-block>`, `<tab-bar></tab-bar>`, etc for simplifying the definition of the app views structure.
 * The custom elements are defined as a wrapper/facade to simple DIVs with some CSS classes applied
* A backend panel that lets you defin data objects that the mobile app will consume.
* A plugin mechanism in which you can define plugins in the form of new HTML custom elements attached to custom functionality. 

##What sorcery is this?

In brief

* As soon as you `npm start` you get a mobile, responsive iOS7 look-alike web app at `http://localhost:300`. * This is how you final mobile app looks like*
* This web app can compile itself to an hybrid mobile app using Shovel apps platform backend service transparently. 
 * This app uses a local backend (`http://localhost:3000/admin`) for its own config and resources.
 * This app gives you access to a building system that lets you download this app as a mobile binary.

##Installation

You may download or clone the Github hosted source. You get the same code.

###Downloading 

[Download latest release](https://github.com/oskosk/shovelapps-panel/archive/master.zip)

or on the command line

```
$ wget https://github.com/oskosk/shovelapps-panel/archive/master.zip
```

###Clone using git

```
# clone latest release
$ git clone https://github.com/shovelapps/shovelapps-panel
## Install Shovel panel dependencies
$ npm install
```

###Running

```
$ npm start
```

We recommend to install `nodemon` and 
```
# Install node package globally
$ sudo npm install -g nodemon
# run the Shovel apps panel with 
$ nodemon` # instead of `npm start`
```

### Folder structure

Once cloned (or unzipped) you get:

```
├── admin
│   ├── fonts
│   ├── img
│   └── lib
├── builds
├── lib
├── plugins
├── templates
│   └── starter
└── main.js
```

## Components



## Plugins


###Default plugins

###Plugin Interface

 plugins/shovelapps-form


## API endpoints

GET /

HTML render of the app

GET /admin

This server the Shovel Panel admin backend. 

## REST API endpoints

### POST /api/1/user

Add user

### GET /api/1/app/:id/ 

Get app

### GET /api/1/app/

## Javascript client API

##
 Internal NodeJS API

##Roadmap

### Shovel Panel Frontend App
* Individual styles for each platform (WP8, Android 4.x and iOS >=7).
* Links to Google Play download in left panel.
* Links to App store download in left panel.
* Links to Google Play download in left panel.
* Read plugins.
* Define plugin file structure.
* Non-scalable Android building node.
* Android building nodes.
* Non-scalable iOS building node .
* iOS building nodes.
* Non-scalable Windows Phone building node.
* Windows Phone building nodes. 
* **Render and cache the frontend** (as sailsjs does).
* Implement data binding (maybe via Rivets.js) and attach the binding to socket.io emissions.


###Shovel Panel Admin Backend

* Use memory storage
* Use config files
* Use disk storage
* Use mongodb storage
* Add file based configuration
* Let the user define Data Models
* Let the user define pages inside templated views

## License

**Shovel apps Panel** is distributed as free software under the MIT License.
