export const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
  };
  
  export const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
  };
  
  export const getAuthStatus = () => localStorage.getItem('isLoggedIn') === 'true';
  