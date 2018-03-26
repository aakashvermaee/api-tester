const d = this.document;
const b = d.body;

(function() {
  b.classList.add("container-fluid")
  const h2 = (b.appendChild(d.createElement('h2')).innerText = "API Tester");

  b.appendChild(d.createElement('hr'));

  const label = (b.appendChild(d.createElement('label')).innerText = "Enter URL ");

  const url = (b.appendChild(d.createElement('input')));
  url.id = 'url';
  url.classList.add("form-control");
  url.style.width = "92%";
  url.style.display = "inline";
  url.value = `${this.location.protocol}//${this.location.host}${this.location.pathname}`;

  const btn = b.appendChild(d.createElement('input'));
  btn.type = "button";
  btn.value = "GET";
  btn.classList.add("btn");
  btn.classList.add("btn-success");
  btn.classList.add("form-control");
  btn.style.width = "5%";

  btn.addEventListener("click", () => {
    var responseDataTag = d.querySelector("#responseDataTag");
    if (responseDataTag.innerText) {
      responseDataTag.innerHTML = '';
    }
    responseDataTag.innerText = `Entered URL: ${url.value}`;
    b.appendChild(d.createElement('br'));

    // xhr
    client.get(this.location.pathname, function(result) {
      console.log(result);
      responseDataTag.innerText = `URL Response:
      Status Code: ${result.status}, Status Text: ${result.statusText},
      Response: ${result.responseText}`;
    });
  });

  b.appendChild(d.createElement('hr'));

  // Response Text label
  b.appendChild(d.createElement('data-xhr')).id = "responseDataTag";
})();
