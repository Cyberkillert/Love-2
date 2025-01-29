// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the VERIFY button
    document.getElementById("btn").addEventListener("click", function() {
        var username = document.getElementById("username").value;

        // Check if username matches the desired text (e.g., "admin")
        if (username.trim().toLowerCase() === "monika".toLowerCase()) {
    window.location.href = "https://cyberkillert.github.io/Love";  // Replace with your desired link
} else {
    alert("the page not for you 🤪");
}
    });
});






