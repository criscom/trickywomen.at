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


(function($) {
    $(document).ready(function() {
// Unset Language Switcher Link on Shop page
    $('body.page-node-49 .language-switcher-locale-url li.en.last').html('<span class="language-link locale-untranslated" lang="en">EN</span>');

// Program landing page. Change Breadcrumb and Title from "Programm" to "Program" on EN
    $('body.page-programm.i18n-en .main-content > h1').html('<h1>Program</h1>');
    $('body.page-programm.i18n-en .breadcrumb li:nth-child(3)').html('<li>Program</li>');
    });


// To understand behaviors, see https://drupal.org/node/756722#behaviors
// Drupal.behaviors.my_custom_behavior = {
//  attach: function(context, settings) {

    // Place your code here.


//  }
// };


})(jQuery);
