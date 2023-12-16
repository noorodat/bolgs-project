import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom"

const CreateBlog = () => {

  const blogsURL = `http://localhost:8000/blogs`;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Nooraldeen');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const blog = {title, body, author};
    axios.post(blogsURL, blog)
    .then(() => {
      setIsLoading(false);
      setBody('');
      setTitle('');
      setAuthor('Nooraldeen')
      Swal.fire({
        title: "Done",
        text: "Your Blog is Published!",
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
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Nooraldeen">Nooraldeen</option>
          <option value="Omar migdady">Omar migdady</option>
        </select>
        {!isLoading && <button>Add blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
}

export default CreateBlog;