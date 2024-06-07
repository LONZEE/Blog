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

document.addEventListener('DOMContentLoaded', () => {
    createBlog(); // Call createBlog to display the first blog
    const blogContainer = document.querySelector('.blog-container');
    blogContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('prev-btn')){
            indexBlog--;
            if(indexBlog < 0){
                indexBlog = blog.length - 1;
            }
            createBlog();
        }
        if(e.target.classList.contains('next-btn')){
            indexBlog++;
            if(indexBlog > blog.length - 1){
                indexBlog = 0;
            }
            createBlog();
        }
    });
});
function createBlog(){
    const blogContainer = document.querySelector('.blog-container');
    blogContainer.innerHTML = ''; // Clear the container before displaying a new blog
    const blogDiv = document.createElement('div');
    blogDiv.classList.add('blog');
    const currentBlog = blog[indexBlog]; // Get the current blog based on indexBlog
    blogDiv.innerHTML = `
    <h2>${currentBlog.title}</h2>
    <p>${currentBlog.content}</p>
    <img src="${currentBlog.photo}" alt="blog photo">
    <br>
    <button class="prev-btn">Previous</button>
    <button class="next-btn">Next</button>`;
    blogContainer.appendChild(blogDiv);
}




