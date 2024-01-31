export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const nameRegex = /^[A-Za-z]+$/;

export const isNameValid = (names:string) => {
  return names.trim() !== "" && nameRegex.test(names);
};

export const isEmailValid = (email:string) => {
  return emailRegex.test(email);
};

export const isPasswordValid = (password:string) => {
  return passwordRegex.test(password);
};

export const isAvatarValid = (avatar:string) => {
  return avatar.trim() !== "" && nameRegex.test(avatar);
};
