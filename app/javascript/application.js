// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import 'semantic-ui-sass'
import 'semantic-ui-sass/semantic-ui'
//= require jquery
//= require jquery_ujs
//= require rails ujs
//= require activestorage
//= require turbolinks
//= require_tree .
document.addEventListener('DOMContentLoaded', () => {
    $('.ui.dropdown').dropdown();
    // Add more Semantic UI component initializations as needed
  });