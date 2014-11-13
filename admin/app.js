var myApp = new Framework7({
  pushState: true,
  fastClick: true
});

var $$ = Dom7;
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
  dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

myApp.addNotification({
  title: 'ShovelApps',
  subtitle: 'You are in editor mode',
  message: 'You are editing app JSConfAr ',
  media: '<img width="44" height="44" style="border-radius:100%" src="img/icon.png">'
});