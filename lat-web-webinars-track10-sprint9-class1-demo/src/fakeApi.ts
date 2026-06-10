import { initialPosts, fakeUser } from "./constants.js";

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() > 0.2;

      if (random) {
        resolve(fakeUser);
      } else {
        reject(new Error("Error de conexión al obtener el usuario"));
      }
    }, 1000);
  });
};

export const getInitialPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() > 0.2;

      if (random) {
        resolve(initialPosts);
      } else {
        reject(new Error("Error de conexión al obtener los posts"));
      }
    }, 1000);
  });
};
