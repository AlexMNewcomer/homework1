//Stroring the blog posts in local storage
function storeLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}
window.onload = function() {

    if (storedPosts.length === 0) {
        document.getElementById('posts-container').innerHTML = "No Blog posts yet...";
    } else {
        const postsContainer = document.getElementById('posts-container');
        storedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By: ${post.username}</strong></p>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
    function readLocalStorage() {
        return JSON.parse(localStorage.getItem('posts')) || [];
    }
    
    const storedPosts = readLocalStorage();
    // "Back" button functionality
    document.getElementById('back').addEventListener('click', function() {
        window.location.href = "index.html";
    });

    // Light/Dark mode toggle functionality
    const toggleButton = document.getElementById('toggle');
    toggleButton.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
        toggleButton.textContent = document.body.getAttribute('data-theme') === 'dark' ? '🌞' : '🌙';
    });
};