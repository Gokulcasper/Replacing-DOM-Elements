const inputListEl = document.querySelector("#input-list");
const athletId = document.querySelector(".input-list :first-child");
const inputBtn = document.getElementById("input-btn-id");

// - OnClick Button :
inputBtn.addEventListener("click", () => {
  const li2 = document.createElement("li");
  li2.textContent = "Throw-Ball";
  li2.className = "input-item";
  athletId.replaceWith(li2); // New Way
  //   athletId.parentNode.replaceChild(li2, athletId); // Old Way
});
