document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('formLogin');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameIndicator = document.getElementById('usernameIndicator');
    const passwordIndicator = document.getElementById('passwordIndicator');
    const loginButton = document.getElementById('loginButton');
  
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'https://www.thewatchbox.com/';
      });
  
    usernameInput.addEventListener('input', validateUsername);
    passwordInput.addEventListener('input', validatePassword);
  
    function validateUsername() {
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === '') {
          hideIndicator(usernameIndicator);
        } else {
          setValid(usernameIndicator, 'Nume de utilizator valid');
        }
        updateButtonState();
      }
  
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
          hideIndicator(passwordIndicator);
        } else if (passwordValue.length >= 6) {
          setValid(passwordIndicator, 'Parola valida. Va puteti autentifica!');
        } else {
          setError(passwordIndicator, 'Parola trebuie să aibă cel puțin 6 caractere.');
        }
        updateButtonState();
      }
  
    function setValid(indicator, message) {
        indicator.className = 'indicator valid';
        indicator.textContent = message;
      }
    
      function setError(indicator, message) {
        indicator.className = 'indicator error';
        indicator.textContent = message;
      }

      function hideIndicator(indicator) {
        indicator.className = 'indicator';
        indicator.textContent = '';
      }
    
  
    function updateButtonState() {
      const isUsernameValid = usernameIndicator.classList.contains('valid');
      const isPasswordValid = passwordIndicator.classList.contains('valid');
      loginButton.disabled = !(isUsernameValid && isPasswordValid);
    }
  });