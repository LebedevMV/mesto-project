const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-6",
  headers: {
    Authorization: "dd10102a-a17f-4587-9268-977fde4c50fb",
    "Content-Type": "application/json",
  },
};

const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => {
    return getResponseData(res);
  });
};

export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => {
    return getResponseData(res);
  });
};

export const editUserInfo = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then((res) => {
    return getResponseData(res);
  });
};

export const editUserAvatar = (pic) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: pic,
    }),
  })
    .then((res) => {
      return getResponseData(res);
    });
};

export const addNewPost = (title, post) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: title,
      link: post,
    }),
  }).then((res) => {
    return getResponseData(res);
  });
};

export const removePost = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => {
    return getResponseData(res);
  });
};

export const likePost = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => {
    return getResponseData(res);
  });
};

export const removeLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => {
    return getResponseData(res);
  });
};
