// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery_ujs
import "@hotwired/turbo-rails"
import "controllers"
 
import "jquery"
import "semantic-ui"
 
$(document).on('turbo:load', function() {
  $('.ui.dropdown').dropdown();
})