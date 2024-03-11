export const saveUserLocal = (user) => {
  try {
    const userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
  } catch (error) {
    console.error("Error saving user locally:", error.message);
  }
};

export const getUserLocal = () => {
  try {
    const userJSON = localStorage.getItem("user");
    return userJSON ? JSON.parse(userJSON) : null;
  } catch (error) {
    console.error("Error getting user locally:", error.message);
    return null;
  }
};
