const AxiosClient = require('./AxiosClient');
const { NetworkErrorMessage } = require('./helpers/ErrorMessages');

const fetchAllUser = ({ successCallback, failureCallback }) => {
  try {
    AxiosClient.get('users')
      .then((response) => {
        if (successCallback) {
          successCallback(response.data);
        }
      })
      .catch((response) => {
        if (failureCallback) {
          failureCallback(response.data);
        }
      });
  } catch (error) {
    failureCallback({ error: NetworkErrorMessage });
  }
};

const fetchUser = ({ successCallback, failureCallback, userId }) => {
  try {
    if (!userId) {
      if (__DEV__) {
        cconsole.warn(`${NotExistParameter} {userId}`);
      }

      return failureCallback({ error: NotExistParameter, userId });
    }

    AxiosClient.get(`users/${userId}`)
      .then((response) => {
        if (successCallback) {
          successCallback(response.data);
        }
      })
      .catch((response) => {
        if (failureCallback) {
          failureCallback(response.data);
        }
      });
  } catch (error) {
    if (failureCallback) {
      failureCallback({ error: NetworkErrorMessage });
    }
  }
};


const fetchUserPost = ({ successCallback, failureCallback, userId }) => {
  try {
    if (!userId) {
      if (__DEV__) {
        cconsole.warn(`${NotExistParameter} {userId}`);
      }

      return failureCallback({ error: NotExistParameter, id });
    }

    AxiosClient.get(`users/${userId}/posts`)
      .then((response) => {
        if (successCallback) {
          successCallback(response.data);
        }
      })
      .catch((response) => {
        if (failureCallback) {
          failureCallback(response.data);
        }
      });
  } catch (error) {
    if (failureCallback) {
      failureCallback({ error: NetworkErrorMessage });
    }
  }
};


const fetchAllPost = ({ successCallback, failureCallback }) => {
  try {
    AxiosClient.get('posts')
      .then((response) => {
        if (successCallback) {
          successCallback(response.data);
        }
      })
      .catch((response) => {
        if (failureCallback) {
          failureCallback(response.data);
        }
      });
  } catch (error) {
    failureCallback({ error: 'Network error occurred.' });
  }
};

const fetchPost = ({ successCallback, failureCallback, postId }) => {
  try {
    if (!postId) {
      if (__DEV__) {
        console.warn(`${NotExistParameter} {postId}`);
      }

      return failureCallback({ error: NotExistParameter, postId });
    }

    AxiosClient.get(`posts/${postId}`)
      .then((response) => {
        if (successCallback) {
          successCallback(response.data);
        }
      })
      .catch((response) => {
        if (failureCallback) {
          failureCallback(response.data);
        }
      });
  } catch (error) {
    if (failureCallback) {
      failureCallback({ error: 'Network error occurred.' });
    }
  }
};




const fetchPhotos = ({ successCallback, failureCallback }) => {
  try {
    AxiosClient.get(`photos`)
      .then((response) => {
        if (successCallback) {
          successCallback(response.data);
        }
      })
      .catch((response) => {
        if (failureCallback) {
          failureCallback(response.data);
        }
      });
  } catch (error) {
    if (failureCallback) {
      failureCallback({ error: 'Network error occurred.' });
    }
  }
};


module.exports = {
  fetchAllUser,
  fetchUser,
  fetchUserPost,
  fetchAllPost,
  fetchPost,
  fetchPhotos
}
