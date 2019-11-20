import "../style.scss";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", evt => {
    evt.preventDefault();
    fetch("/api/secret", {
      headers: { "X-Access-Code": document.querySelector("input").value }
    })
      .then(response => response.text())
      .then(text => (document.querySelector("pre").innerHTML = text))
      .catch(
        () => (document.querySelector("pre").innerHTML = "Noe gikk galt...")
      );
  });
});
