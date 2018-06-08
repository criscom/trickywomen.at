/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($) {
  /* START: SMARTMENUS */
  (function($) {
  // initialise smartmenus for main menu
  // $('#main-menu').smartmenus();
})(jQuery);
/* END: SMARTMENUS */

$(document).ready(function(e) {
  $('img[usemap]').rwdImageMaps();
});

// TRICKYWOM-115 DSGVO MAßnahmen umsetzen
// Google Analytics Opt-out
jQuery(function() {
  jQuery('#google-opt-out').on('change', function() {
    if(jQuery(this).prop('checked')) {
      var d = new Date();
      d.setTime(d.getTime() + 5*360*24*60*60*1000);
      document.cookie = "google-opt-out=1; expires=" + d.toUTCString() + "; path=/;";
    } else {
      document.cookie = "google-opt-out=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }).prop('checked', document.cookie.indexOf('google-opt-out') != -1);
});


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.


  }
};


})(jQuery);
