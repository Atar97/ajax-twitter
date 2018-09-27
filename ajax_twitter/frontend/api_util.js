const APIUtil = {

  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON'
    });
  },
  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON'
    });
  },

  searchUsers: (query, success) => {

    return $.ajax({
      url: `/users/search`,
      method: 'GET',
      dataType: 'JSON',
      data: {'query': query}
    })
    .then((res) => {
      console.log(res);
      });
  }
};

module.exports = APIUtil;
