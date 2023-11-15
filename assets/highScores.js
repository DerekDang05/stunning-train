var createList = document.createElement("li");
const ulLocation = document.querySelector("#scoreList");
var clearBtn = document.getElementById("clearBtn")


storedInitial = localStorage.getItem("initialsValue");
createList.textContent = storedInitial;
ulLocation.appendChild(createList)

console.log("storedScore: " + storedInitial)
console.log("CreateList: " + createList)


clearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})

