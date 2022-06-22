const inputListEl = document.getElementById("input-list");

// insertAdjacentHTML :

// Afterend :
inputListEl.insertAdjacentHTML("afterend", "<li>Sports</li>");

// Beforebegin :
inputListEl.insertAdjacentHTML("beforebegin", "<h2>SPORTS</h2>");

// Beforeend :
inputListEl.insertAdjacentHTML("beforeend", "<li>Sports</li>");

//----------------------------------------------------------------

// insertAdjacentText :

// inputListEl.insertAdjacentText("afterbegin", "Sports");

//-----------------------------------------------------------------

const li = document.createElement("li");
li.textContent = "Hand-Ball";
li.className = "input-item";

inputListEl.insertAdjacentElement("afterbegin", li);
// inputListEl.insertAdjacentElement("beforeend", li);

// Afterbegin :
inputListEl.insertAdjacentHTML("afterbegin", "<h3>Events</h3>");
