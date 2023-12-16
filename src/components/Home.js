import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import axios from "axios";
import useFetch from "../hooks/useFetch";


const Home = () => {

    const blogsURL = `http://localhost:8000/blogs`;

    let { data: blogs, isLoading, error: blogsError, setData: setBlogs } = useFetch(blogsURL);


    return (
        <div className="home">
            {blogsError && <div>{blogsError}</div>}
            {isLoading && <div className="loading">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
    );
}

export default Home;
