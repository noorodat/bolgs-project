import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import axios from "axios";



const Home = () => {

    const [blogs, setBlogs] = useState([]);

    const [name, setName] = useState('Noor');

    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/blogs/${id}`)
            .then(() => {
                return axios.get('http://localhost:8000/blogs');
            })
            .then(res => {
                setBlogs(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // It runs once the pages loads (initial render)
    useEffect(() => {
        axios.get('http://localhost:8000/blogs')
            .then(res => {
                setBlogs(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="home">
            {isLoading && <div className="loading">Loading...</div>}
            <h1>{name}</h1>
            {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Omar')} title="Omar's Blog"/> */}
            <button onClick={() => setName('Nooraldeen')}>Change name</button>
        </div>
    );
}

export default Home;
