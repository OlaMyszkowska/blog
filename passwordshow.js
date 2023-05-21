    function togglePasswordVisibility() {
        var passwordInput = document.getElementById("password");
        var passwordBtn = document.querySelector('.material-symbols-outlined')

        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          passwordBtn.innerHTML = 'visibility'
        } else {
            passwordInput.type = "password";
            passwordBtn.innerHTML = 'visibility_off'

        }
      }