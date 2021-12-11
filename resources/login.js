function test() {
  alert("test ran");
}

function flipDarken() {
  var ele = document.getElementById("darken");
  ele.style.transitionDuration = "1s";
  ele.style.transform = (ele.style.transform != "rotateX(360deg)" ? "rotateX(360deg)" : "rotateX(0deg)");
}

function toggleLogin() {
  flipDarken();

  setTimeout(() => {
    if ($("#specialText").html() != " Sign Up") {
      $("#specialText").html(" Sign Up");
      $("#toggleButton").attr("value", "Already have an account?");
      $("#submitButton").attr("value", "Sign Up");
    } else {
      $("#specialText").html(" Login");
      $("#toggleButton").attr("value", "Don't have an account?");
      $("#submitButton").attr("value", "Login");
    }
  }, 200);
}

function togglePass() {
  if ($("#showPass")[0].checked) {
    $("#password").attr("type", "text");
  } else {
    $("#password").attr("type", "password");
  }
}

function showError(error) {
  $(".error").html(error);
};

// Database stuff
function callLogin() {
  let email = $("#email")[0].value;
  let password = $("#password")[0].value;

  if ($("#submitButton")[0].value == "Login") {
    // Login ajax call
    $.ajax({
      url: "resources/login.php",
      type: "GET",
      data: { email: email, password: password},
      success: (data) => {
        if (data.substring(0, 5) == "Error") {
          showError(data);
        } else {
          window.location = "main.php";
        }
      },
      error: () => {
        alert("There was an error connecting to the server, please try again.");
      }
    });
  } else {
    // Signup
    $.ajax({
      url: "resources/signup.php",
      type: "POST",
      data: { email: email, password: password },
      success: (data) => {
        if (data.substring(0, 5) == "Error") {
          showError(data);
        } else {
          alert("Account made! You can login now.");
        }
      },
      error: () => {
        alert("There was an error connecting to the server, please try again.");
      }
    });
  }
}

// Allow pressing enter to login/signup
$(document).ready(() => {

  document.querySelector("#password").addEventListener("keyup", event => {
    if (event.key !== "Enter") return; 
    document.querySelector("#submitButton").click(); 
    event.preventDefault(); 
  });

});