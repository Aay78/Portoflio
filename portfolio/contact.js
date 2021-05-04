function myFunction() {
    var x = document.getElementById("contacts");
    if (x.innerHTML === "asingh383@west-mec.org") {
      x.innerHTML = "480-925-5626, asingh383@west-mec.org";
    } else {
      x.innerHTML = "asingh383@west-mec.org";
    }
  }