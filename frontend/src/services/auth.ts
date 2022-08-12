export const loginUser = (token: string) => {
  localStorage.setItem('token', token);
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};
