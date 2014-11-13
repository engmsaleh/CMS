//     shovelapps.js
//
//     Shovel apps client library.
//      under the MIT license.
//
//     Created by Shovel app Inc. <oscar@shovelapps.com>
//

var myApp = new Framework7({
  pushState: true,
  // remove 300 ms delay on touch events
  fastClicks: true
});

var $$ = Dom7;


// prepare every element with .view 
// as a F& view. 
$$(".view").each(function() {
  myApp.addView(this);
})

// prepare every element with .view 
// as a F& view. 
$$("[data-popup-visible]").each(function() {
  myApp.popup(this);
});



function ShovelAppsClient() {
  this.init();
}

ShovelAppsClient.prototype = {
  backendUrl: "http://localhost:3000",
  socket: undefined,
  init: function() {
    this.initAppDefinition();
    this.configureRivets();
    this.initSocket();
  },
  initAppDefinition: function() {
    this.app = {
      title: "My app",
      author: "Shovel apps Inc."
    };
  },
  /**
   * Connects the socket mechanism to the backend
   */
  initSocket: function() {
    var _this = this;
    this.whenConnected(function() {
      if (window.io !== undefined) {
        _this.socket = io.connect(_this.backendUrl);
      }
    });
  },
  whenConnected: function(callback) {
    callback();
  },
  whenPhonegapAvailable: function(callback) {
    var _this = this;
    document.addEventListener("deviceready", callback, false);

  },
  configureRivets: function() {

    rivets.configure({
      prefix: 'shovelapps'
    });
    rivets.bind($("[data-binded]"), {
      app: this.app
    });
  }
};

shovelapps = new ShovelAppsClient();


// var view1 = myApp.addView('#view-1');
// var view2 = myApp.addView('#view-2', {
//   dynamicNavbar: true
// });
// var view3 = myApp.addView('#view-3');
// var view4 = myApp.addView('#view-4');

// myApp.addNotification({
//   title: 'Shovel apps',
//   subtitle: 'This is your first full stack app',
//   message: 'You are editing app JSConfAr ',
//   media: '<img width="44" height="44" style="border-radius:100%" src="assets/icon.png">'
// });