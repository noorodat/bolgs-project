import { useLocation, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Swal from 'sweetalert2';

const BlogDetails = () => {

    const { id } = useParams();

    const blogURL = `http://localhost:8000/blogs/${id}`;

    const {data: blog, error, isLoading} = useFetch(blogURL);

    const navigate = useNavigate();

    const handleClick = () => {
        axios.delete(blogURL)
        .then(() => {
            Swal.fire({
                title: "Deleted",
                text: "Your Blog is Deleted!",
                icon: "success"
              });
              navigate('/');
        })
        .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error while adding the blog",
            });
          })
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;