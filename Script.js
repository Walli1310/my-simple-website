document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    storeUserData(email, password);
  });
  
  function storeUserData(email, password) {
    // Store user data in local storage (not secure for real applications)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    
    alert('User data stored. You can now sign in.');
  }
});
￼Enter
