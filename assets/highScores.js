var createList = document.createElement("li");
const ulLocation = document.querySelector("#scoreList");
var clearBtn = document.getElementById("clearBtn")

storedScore = localStorage.getItem("initialsValue");
createList.textContent = storedScore;
ulLocation.appendChild(createList)

console.log("storedScore: " + storedScore)
console.log("CreateList: " + createList)


clearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})
