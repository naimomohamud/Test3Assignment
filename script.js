document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('postInput');
  const addPostBtn = document.getElementById('addPostBtn');
  const postsContainer = document.getElementById('postsContainer');

  // Function to create a new post
  function createPost(content) {
      // Create a new div for the post
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      // Create a paragraph for the post content
      const postContent = document.createElement('p');
      postContent.textContent = content;

      // Create a like button
      const likeBtn = document.createElement('button');
      likeBtn.classList.add('likeBtn');
      likeBtn.textContent = 'Like';

      // Add event listener to the like button
      likeBtn.addEventListener('click', function() {
          likeBtn.classList.toggle('liked');
          likeBtn.textContent = likeBtn.classList.contains('liked') ? 'Liked' : 'Like';
      });

      // Append the content and like button to the post div
      postDiv.appendChild(postContent);
      postDiv.appendChild(likeBtn);

      // Add the new post to the top of the feed
      postsContainer.prepend(postDiv);
  }

  // Event listener for the add post button
  addPostBtn.addEventListener('click', function() {
      const postContent = postInput.value.trim();
      if (postContent) {
          createPost(postContent);
          postInput.value = ''; // Clear the input field
      } else {
          alert('Please enter some text before posting.');
      }
  });

  // Optional: Allow pressing "Enter" to add a post
  postInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addPostBtn.click(); // Trigger the click event of the button
      }
  });
}); 