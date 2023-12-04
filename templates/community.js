function submitPost() {
    var postContent = document.getElementById('postContent').value;

    if (postContent.trim() === '') {
        alert('Please enter some content for your post.');
    } else {
        var postsDiv = document.getElementById('communityPosts');
        var newPostDiv = document.createElement('div');
        newPostDiv.className = 'community-post';
        newPostDiv.innerHTML = '<p>' + postContent + '</p>';
        postsDiv.appendChild(newPostDiv);

        // Clear the textarea after submitting the post
        document.getElementById('postContent').value = '';
    }
}
