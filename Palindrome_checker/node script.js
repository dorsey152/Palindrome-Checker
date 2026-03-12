
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
 
checkBtn.addEventListener("click", () => {
  if(textInput.value === "") {
    alert("Please input a value"); 
    return
  }

  const cleaned = textInput
  .value
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "")
  const forward = cleaned
  const backward = cleaned
  .split("") 
  .reverse()
  .join("");
  console.log(forward);
  console.log(backward)
  if(forward === backward) {
    result.textContent = `${textInput.value} is a palindrome`;
  } else {
    result.textContent = `${textInput.value} is not a palindrome`;
  }
})