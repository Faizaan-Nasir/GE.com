fetch(`https://ge-employees.herokuapp.com/data/${subject}`)
  .then((data) => {
    return data.json();
  })
  .then((papers) => {
    papers.forEach((element) => {
      $(".papers").append(
        `-><a href = ${element.link}>${element.subject} ${element.exam} Set ${element.set} (${element.type})</a><br>`
      );
    });
  });