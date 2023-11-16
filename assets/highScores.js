// preliminaries to create code
var createList = document.createElement("li");
const ulLocation = document.querySelector("#scoreList");
var clearBtn = document.getElementById("clearBtn")

// outputs name and score onto page
storedInitial = localStorage.getItem("initialsValue");
createList.textContent = storedInitial;
ulLocation.appendChild(createList)

// clears local storage
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})