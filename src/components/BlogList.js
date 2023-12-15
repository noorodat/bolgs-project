

const BlogList = ({blogs, title, handleDelete}) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>By : {blog.author}</p>
                        <p>{blog.body}</p>
                        <div className="btns" style={{display: "flex", gap: "10px", justifyContent: 'center', padding: "10px"}}>
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                        <button>Edit</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;