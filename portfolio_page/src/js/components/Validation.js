const input = {
  name: document.getElementById("formName")
};

function valName() {
  const re = /^[a-åA-Å]{2,25}$/;
  if (!re.test(input.name.value)) {
    console.log("invalid");
    input.name.className = "validation invalid";
  } else {
    console.log("valid");
    input.name.className = "validation valid";
  }
}

input.name.addEventListener("input", () => {
  valName();
});
