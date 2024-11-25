// Landing page form submission handling
document.getElementById('blog-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const errorElement = document.getElementById('error');

  // Form validation
  if (!username || !title || !content) {
      errorElement.textContent = "Please complete the form.";
      return;
  }

  // Create the blog post object
  const newPost = {
      username: username,
      title: title,
      content: content
  };

  // Save the blog post to localStorage
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));

// Function to handle redirection
function redirectURL(url) {
  window.location.href = url;
}

// Redirect to the blog posts page
redirectURL("posts.html");
});