document.getElementById("search-button").addEventListener("click", function() {
  var query = document.getElementById("search-input").value.trim().toLowerCase();
  console.log("Search query:", query);
  var images = document.querySelectorAll(".box");

  images.forEach(function(image) {
    var text = image.querySelector(".text").textContent.trim().toLowerCase();
    console.log("Image text:", text);
    if (text.includes(query)) {
      image.style.display = "flex";
    } else {
      image.style.display = "none";
    }
  });
});



document.getElementById('sendButton').addEventListener('click', function() {
  var statusDiv = document.getElementById('messageStatus');
  statusDiv.innerHTML = "Message sent successfully!";
  statusDiv.className = 'success-message';
});
