const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$button = $(el);

    this.userId = this.$button.attr('data-user_id');
    this.followState = this.$button.attr('data-initial-follow-state');
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === 'unfollowed') {
      this.$button.text('Follow!');
    } else {
      this.$button.text('Unfollow!');
    }
    this.$button.prop('disabled', false);
  }

  handleClick() {
    this.$button.on('click', event => {
      event.preventDefault();
      if (this.followState === 'unfollowed') {
        APIUtil.followUser(this.userId).
        then((res) => {
          this.followState = 'followed';
          this.render();
        });
        this.$button.prop('disabled', true);
      } else {
        APIUtil.unfollowUser(this.userId).
        then((res) => {
          this.followState = 'unfollowed';
          this.render();
        });
        this.$button.prop('disabled', true);
      }
    });
  }
}

module.exports = FollowToggle;
