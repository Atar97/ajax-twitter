const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
$(() => {
  const $followButtons = $('.follow-toggle');
  $followButtons.each(function(index) {
    new FollowToggle(this);
  });

  $('.users-search').each(function(index) {
    new UsersSearch(this);
  });

});
