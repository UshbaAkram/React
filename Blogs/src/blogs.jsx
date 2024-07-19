import { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  return (
    <div className="blogList">
      {blogs.map((blog) => (
        <div className="blogPreview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title} </h2>
            <p>{blog.contenet}</p>
            <p>Written by {blog.author} </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
