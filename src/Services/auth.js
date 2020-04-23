export const isAuth = () => (localStorage.getItem('@userId') ? true : false);

export const isAdmin = () =>
  localStorage.getItem('@staff') === 'admin' ? true : false;
