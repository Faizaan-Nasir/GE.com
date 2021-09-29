function check() {
  // Selecting the input element and get its value
  let a = document.getElementById("inputId").value;
  let b = document.getElementById("password").value;

  const jsonToPost = {
    usr_name: a,
    pwd: b,
  };

  fetch("https://ge-employees.herokuapp.com/authenticate", {
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
        window.location.href = "/home";
        localStorage.name = a;
      } else {
        alert("Invalid Login ID and Password");
      }
    })
    .catch((err) => {
      console.error(err);
      alert(
        "Oops. there seems to be some error with our systems. Please sontact the devs"
      );
    });
}
