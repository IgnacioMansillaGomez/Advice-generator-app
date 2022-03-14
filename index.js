function onDiceButtonClick() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "advice__hero-id"
      ).innerHTML = `Advice #${data.slip.id}`;
      document.getElementById(
        "advice__hero-text"
      ).innerHTML = `"${data.slip.advice}"`;
    })
    .catch(() => {
      document.getElementById("advice__hero-id").innerHTML = `Advice #404`;
      document.getElementById(
        "advice__hero-text"
      ).innerHTML = `"It's good time to check your internet connection"`;
    });
}
