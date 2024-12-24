

// Function to perform the search
function searchFood() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Check if search input matches any food item
  if (searchInput === "") {
      resultsContainer.innerHTML = "Please enter a food item.";
      return;
  }

  let found = false;

  // Loop through the foodData and match the search input
  foodData.forEach((foodItem) => {
      // If the search term matches part of the food item's name (case-insensitive)
      if (foodItem.name.toLowerCase().includes(searchInput)) {
          found = true;
          
          // Create a new div for each result
          const resultItem = document.createElement("div");
          resultItem.className = "result-item";

          // Create an image element
          const imgElement = document.createElement("img");
          imgElement.src = foodItem.image;
          imgElement.alt = foodItem.name;
          imgElement.style.width = "50px"; // Set a fixed width for the image
          imgElement.style.height = "50px"; // Set a fixed height for the image
          imgElement.style.marginRight = "10px"; // Add some space between the image and the text

          // Add the image and the name to the result div
          resultItem.appendChild(imgElement);
          resultItem.appendChild(document.createTextNode(foodItem.name));

          // When clicked, redirect to the food item's order page
          resultItem.onclick = () => window.location.href = foodItem.link;

          // Append the result item to the results container
          resultsContainer.appendChild(resultItem);
      }
  });

  // If no matching food item is found
  if (!found) {
      resultsContainer.innerHTML = "No results found!";
  }
}
