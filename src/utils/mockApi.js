export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          token: "fake-jwt-token",
          user: {
            name: "Julia",
            email,
          },
        });
      } else {
        reject("Invalid email or password");
      }
    }, 500);
  });
}

export function checkToken(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fake-jwt-token") {
        resolve({
          name: "Julia",
          email: "julia@example.com",
        });
      } else {
        reject("Invalid token");
      }
    }, 500);
  });
}

export function saveArticle(article) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...article,
        _id: article.url,
      });
    }, 500);
  });
}

export function deleteArticle(article) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(article);
    }, 500);
  });
}
