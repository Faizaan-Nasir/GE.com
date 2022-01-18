function check1() {
  // Selecting the input element and get its value
  let a = document.getElementById("inputId1").value;
  let b = document.getElementById("password1").value;
  document.getElementById("loader").innerHTML = "<div class='loader'></div>"
  const jsonToPost = {
    usr_name: a,
    pwd: b,
  };

  fetch("https://ge-employees.herokuapp.com/authenticate?type=normal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonToPost),
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (json.message == "Authenticated") {
        localStorage.name = a;
        window.location.href = "./home.html";
      } else {
        alert("Invalid Login ID and Password");
        window.location.href = "./login.html"
      }
    })
    .catch((err) => {
      console.error(err);
      alert(
        "Oops. there seems to be some error with our systems. Please contact the devs"
      );
    });
}
function check() {
  // Selecting the input element and get its value
  let a = document.getElementById("inputId").value;
  let b = document.getElementById("password").value;

  const jsonToPost = {
    usr_name: a,
    pwd: b,
  };

  fetch("https://ge-employees.herokuapp.com/authenticate?type=normal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonToPost),
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (json.message == "Authenticated") {
        localStorage.name = a;
        window.location.href = "./home.html";
      } else {
        alert("Invalid Login ID and Password");
      }
    })
    .catch((err) => {
      console.error(err);
      alert(
        "Oops. there seems to be some error with our systems. Please contact the devs"
      );
    });
}
