window.onload = function() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        document.getElementById('posts-container').innerHTML = "No Blog posts yet...";
    } else {
        const postsContainer = document.getElementById('posts-container');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By: ${post.username}</strong></p>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

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