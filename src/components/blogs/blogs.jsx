import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddBookmark, handleMarkRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="lg:w-2/3 rounded-lg bg-slate-200 p-4">
            <h2 className="text-2xl font-bold">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog =>
                    <Blog key={blog.id} blog={blog}
                    handleAddBookmark={handleAddBookmark} 
                    handleMarkRead={handleMarkRead}
                    >
                    </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddBookmark: PropTypes.func,
    handleMarkRead: PropTypes.func
}

export default Blogs;