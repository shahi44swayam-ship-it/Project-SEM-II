const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Search demo
const searchInput = document.querySelector(".search-bar input");

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        alert("Searching for: " + searchInput.value);
    }
});