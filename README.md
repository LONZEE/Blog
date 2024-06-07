#Blog

A blog array is defined, containing objects for each blog post. Each object has an id, title, content, and photo URL.
Initialize Blog Index:

indexBlog is initialized to 0. This variable tracks the current blog post being displayed.
DOM Content Loaded Event Listener:

An event listener is added for the DOMContentLoaded event to ensure the script runs after the full HTML document has been loaded and parsed.
Inside this event listener, createBlog() is called to display the first blog post (at index 0), and an event listener is added to the .blog-container element to handle clicks on the "Previous" and "Next" buttons.
Click Event Listener on .blog-container:

This listener checks if the clicked target (e.target) has a class of prev-btn or next-btn.
If the "Previous" button is clicked (prev-btn), indexBlog is decremented to show the previous blog post. If indexBlog becomes less than 0, it's reset to the last index (blog.length - 1) to cycle back to the last blog post.
If the "Next" button is clicked (next-btn), indexBlog is incremented to show the next blog post. If indexBlog exceeds the last index (blog.length - 1), it's reset to 0 to cycle back to the first blog post.
After updating indexBlog, createBlog() is called again to update the display.
createBlog Function:

This function updates the .blog-container element to display the current blog post.
First, it selects the .blog-container and clears its content.
Then, it creates a new div element with a class of blog and sets its inner HTML to the content of the current blog post, including the title, content, and photo. It also includes "Previous" and "Next" buttons within this div.
Finally, this div is appended to the .blog-container, updating the displayed blog post.
