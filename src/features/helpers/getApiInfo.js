export const apiUrl = process.env.REACT_APP_API_URL || 'https://api.dogecompounder.dog';
//export const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Time-based cache buster
export const getApiCacheBuster = () => {
  return Math.trunc(Date.now() / (1000 * 60));
};
