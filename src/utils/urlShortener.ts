const CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Function to generate a random string of given length
export const generateRandomString = (length: number): string => {
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    randomString += CHARACTERS[randomIndex];
  }
  return randomString;
};