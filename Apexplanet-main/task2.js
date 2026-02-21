document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pin").value.trim();

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !lname || !email || !city || !pin) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
});

function addImage() {
  const url = document.getElementById("imageURL").value.trim();
  if (!url) {
    alert("Please enter an image URL.");
    return;
  }

  const gallery = document.getElementById("gallery");

  const imgBox = document.createElement("div");
  imgBox.className = "img-box";

  const img = document.createElement("img");
  img.src = url;

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => gallery.removeChild(imgBox);

  imgBox.appendChild(img);
  imgBox.appendChild(removeBtn);
  gallery.appendChild(imgBox);

  document.getElementById("imageURL").value = "";
}
