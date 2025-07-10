// Typing effect on heading
const text = "Log In";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.querySelector("h1").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.querySelector("h1").innerHTML = ""; // Clear original
typeWriter();

// for password hide
const passwordField = document.getElementById("passed");
const toggleButton = document.createElement("button");
toggleButton.innerText = "Show";
toggleButton.style.marginLeft = "10px";
toggleButton.classList.add("btn", "btn-sm");

passwordField.parentElement.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.innerText = "Hide";
  } else {
    passwordField.type = "password";
    toggleButton.innerText = "Show";
  }
});

// success button
$('.btn-lg').on("click", function (e) {
  e.preventDefault(); // prevent default link
  Swal.fire({
    title: "Success!",
    text: "You are being redirected ☕",
    icon: "success",
    confirmButtonText: "Go!",
  }).then(() => {
    window.location.href = "boot last.html";
  });
});

// shake
$('button').on("click", function (e) {
  const email = $('#example').val();
  const pass = $('#passed').val();
  if (!email || !pass) {
    e.preventDefault();
    $(".container").addClass("shake");
    setTimeout(() => {
      $(".container").removeClass("shake");
    }, 500);
  }
});
