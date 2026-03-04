/**
 * Check if an email is valid
 * @param email The email string to check
 * @returns boolean indicating if the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if a password meets minimum requirements
 * (At least 6 characters)
 * @param password The password string to check
 * @returns boolean indicating if the password is valid
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

/**
 * Check if a phone number is valid (Vietnamese format)
 * @param phone The phone number string to check
 * @returns boolean indicating if the phone number is valid
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  return phoneRegex.test(phone);
};

/**
 * Check if a string is empty or only contains whitespace
 * @param str The string to check
 * @returns boolean indicating if the string is empty
 */
export const isEmpty = (str: string): boolean => {
  return !str || str.trim().length === 0;
};
