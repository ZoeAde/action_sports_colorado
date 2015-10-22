$(document).on('ready', function() {
  console.log('sanity check!');

});


raptor.api.on("ready", function(event, el) {
  raptor.settings("defaultIFrame", el.name);

  el.onload = function(){
    raptor.api.load();
  };

});

raptor.api.on("inboundReady", function(event, data) {
  console.log("inbound commands ready");

// EXAMPLE OF EVENT TRIGGERING FOR GOOGLE ANALYTICS:
// $("#trackB_btnOne").on("click", function() {
//   ga('send', 'event', { eventCategory: 'button', eventAction: 'click', eventLabel: 'Step One', eventValue: "Track B"});
//     });

});



