import { useState } from "react";
import BlogList from "./BlogList";



const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body : 'idk idk idk', author: 'Nooraldeen', id: 1},
        {title: 'Welcome buddy', body : 'idk idk idk', author: 'Bashar', id: 2},
        {title: 'New cool feature', body : 'idk idk idk', author: 'Omar', id: 3},
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
        </div>
    );
}

export default Home;
