// utils/auth.js
export const getUser = () => {
  try {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (err) {
    return null;
  }
};

export const isLoggedIn = () => Boolean(getUser());
