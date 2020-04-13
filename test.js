const { fetchAllPost, fetchAllUser, fetchUser, fetchPhotos } = require (".");

fetchPhotos({ successCallback: console.log, failureCallback: console.log });
