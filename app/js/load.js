fetch(`https://ge-employees.herokuapp.com/data/${subject}?type=normal`)
  .then((data) => {
    return data.json();
  })
  .then((papers) => {
    papers.forEach((element) => {
      $(".papers").append(
        `<div class="grid-item-1"><a href = ${element.link} target="_blank">${element.subject} ${element.exam} ${element.set} (${element.type})</a></div><br>`
      );
    });
  })
  .catch((err) => {
    alert(
      "Sorry for the inconveninece but something's wrong with our systems.. Please inform the devs in the chat"
    );
  });
