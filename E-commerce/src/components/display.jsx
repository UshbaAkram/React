import { useEffect, useState } from "react";
import Blogs from "./blogs";
import useFetch from "./useFetch";

const BlogList = () => {
  
  // const handelDel = (id) => {
  //   const newBlog = data.filter((blogs) => blogs.id !== id);
  //   setData(newBlog);
  // };
   
  const {data , isPending, err}= useFetch('http://localhost:8000/blogs')
  return (
    <>
    {err && <h3>Oops! Error Found {err}</h3>}
      {isPending && <h3>Loading...</h3>}
      {data && <Blogs blogs={data} /> }
    
    </>
  );
};

export default BlogList;
