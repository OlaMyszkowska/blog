function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    var usernameRegex = /^[a-zA-Z0-9\s]{5,20}$/;
    if (!usernameRegex.test(username)) {
      alert("Nazwa użytkownika jest nieprawidłowa. Nazwa użytkownika powinna składać się z 5-20 znaków alfanumerycznych i spacji.");
      return false;
    }
  
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{20,}$/;
    if (!passwordRegex.test(password)) {
      alert("Hasło jest nieprawidłowe. Hasło musi zawierać minimum 20 znaków, w tym co najmniej jedną wielką literę, jedną cyfrę i jeden symbol.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Powtórzone hasło nie jest takie samo jak hasło.");
      return false;
    }
  
    return true;
  }
  