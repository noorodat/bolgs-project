



const BlogList = (data) => {

    const blogs = data.blogs;

    return (
        <div className="blog-list">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>By : {blog.author}</p>
                        <p>{blog.body}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;