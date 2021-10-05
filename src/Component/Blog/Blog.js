import React from 'react';
import { useState,useEffect } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch("./blog.JSON")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);
    return (
        <div>
            <h1 className="text-success m-5">Our Success</h1>
            {
                blogs.map(blog=> <SingleBlog
                key= {blog.key}
                blog= {blog}
                ></SingleBlog>)
            }
        </div>
        
    );
};

export default Blog;