const APIUtil = require('./api_util.js');
class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input');
    this.$ul = this.$el.find('ul');
    this.handleInput();
  }

  handleInput() {
    this.$input.on('input', event => {

      event.preventDefault();
      const users = APIUtil.searchUsers(this.$input.val(),
      function() { console.log('any string');});
      // for (let i = 0; i < users.length; i++) {
      //   console.log('here we go');
      //   console.log(users);
        let that = users[0];
        for (let k in that) {
        this.$ul.append(`<li>${k.username}</li>`);

      }
      }
    });
  }




}

module.exports = UsersSearch;
