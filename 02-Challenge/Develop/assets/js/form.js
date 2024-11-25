// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function getBlogPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    return posts; 
  }
    
  function saveBlogPosts(posts) {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }
  
  document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    if (!username || !title || !content) {
      document.getElementById('error').classList.remove('hidden');
      return;
    }
  
    const newPost = { username, title, content };
    const posts = getBlogPosts();
    posts.push(newPost);
    saveBlogPosts(posts);
  
    window.location.href = 'blog.html';
  });
  
  window.addEventListener('load', function() {
    if (window.location.pathname === '/blog.html') {
      const posts = getBlogPosts();
      const postsList = document.getElementById('posts-list');
      
      if (posts.length === 0) {
        postsList.innerHTML = '<p>No Blog posts yet...</p>';
      } else {
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>By ${post.username}</strong></p>
            <p>${post.content}</p>
          `;
          postsList.appendChild(postElement);
        });
      }
  
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
document.getElementById('back').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
}
});

// Handle light/dark mode toggle
const globalToggleButton = document.getElementById('toggleButton');

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}

globalToggleButton.addEventListener('click', toggleTheme);

window.addEventListener('load', function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});