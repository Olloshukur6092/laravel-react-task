export const token = () => {
  let data =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  if (data !== null) {
    setTimeout(() => {
      localStorage.removeItem("user");
    }, 300000);
  }

  return data;
};
