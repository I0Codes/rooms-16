document.addEventListener('DOMContentLoaded', () => {
  const difficultyFilter = document.getElementById("difficultyFilter")
  const searchInput = document.getElementById("searchInput")
  const rooms = document.querySelectorAll(".room-card")

  function filterRooms() {
    const selectedDifficulty = difficultyFilter.value
    const searchQuery = searchInput.value.toLowerCase()

    rooms.forEach((room) => {
      const difficulty = room.getAttribute("data-difficulty")
      const title = room.querySelector("h4").textContent.toLowerCase()

      const matchesDifficulty =
        selectedDifficulty === "all" || difficulty === selectedDifficulty
      const matchesSearch = title.includes(searchQuery)

      if (matchesDifficulty && matchesSearch) {
        room.style.display = "block"
      } else {
        room.style.display = "none"
      }
    })
  }

  difficultyFilter.addEventListener("change", filterRooms)
  searchInput.addEventListener("input", filterRooms)
});
