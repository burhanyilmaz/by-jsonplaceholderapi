const { fetchAllPost, fetchAllUser, fetchUser, fetchUserPost } = require('.');

fetchUserPost({ successCallback: console.log, failureCallback: console.log, userId: 2});
