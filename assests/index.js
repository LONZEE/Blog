const blog =[
{
    id: 1,
    title: 'My first blog',
    content: 'This is my first blog post',
    photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fblog%2F&psig=AOvVaw1tY1Z8X9GJ2X6XbKXwU1hO&ust=1623872025791000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjWz6vQz_ECFQAAAAAdAAAAABAD'
},
{
    id: 2,
    title: 'My second blog',
    content: 'This is my second blog post',
    photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fblog%2F&psig=AOvVaw1tY1Z8X9GJ2X6XbKXwU1hO&ust=1623872025791000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjWz6vQz_ECFQAAAAAdAAAAABAD'
},
{
    id: 3,
    title: 'My third blog',
    content: 'This is my third blog post',
    photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fblog%2F&psig=AOvVaw1tY1Z8X9GJ2X6XbKXwU1hO&ust=1623872025791000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjWz6vQz_ECFQAAAAAdAAAAABAD'
}
]

let indexBlog = 0; // Initialize the blog index

document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM to load
    createBlog(); // Call createBlog to display the first blog
    const blogContainer = document.querySelector('.blog-container'); // Get the blog container
    blogContainer.addEventListener('click', (e) => {  // Add event listener to the blog container
        if(e.target.classList.contains('prev-btn')){ // Check if the previous button is clicked
            indexBlog--; // Decrease the indexBlog
            if(indexBlog < 0){ // Check if the indexBlog is less than 0
                indexBlog = blog.length - 1; // Set the indexBlog to the last blog index
            }
            createBlog(); // Call createBlog to display the blog
        }
        if(e.target.classList.contains('next-btn')){ // Check if the next button is clicked
            indexBlog++; // Increase the indexBlog
            if(indexBlog > blog.length - 1){ // Check if the indexBlog is greater than the last blog index
                indexBlog = 0; // Set the indexBlog to the first blog index
            }
            createBlog(); // Call createBlog to display the blog
        }
    });
});
function createBlog(){ // Function to display the blog
    const blogContainer = document.querySelector('.blog-container'); // Get the blog container
    blogContainer.innerHTML = ''; // Clear the container before displaying a new blog
    const blogDiv = document.createElement('div'); // Create a div element
    blogDiv.classList.add('blog'); // Add a class to the div
    const currentBlog = blog[indexBlog]; // Get the current blog based on indexBlog
    blogDiv.innerHTML = `
    <h2>${currentBlog.title}</h2>
    <p>${currentBlog.content}</p>
    <img src="${currentBlog.photo}" alt="blog photo">
    <br>
    <button class="prev-btn">Previous</button>
    <button class="next-btn">Next</button>`;
    blogContainer.appendChild(blogDiv); // Append the div to the blog container
}




