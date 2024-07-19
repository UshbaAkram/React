import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Blogs from "./blogs";
import { useNavigate } from 'react-router-dom';

const BlogDetail = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    ispending,
    err,
  } = useFetch("http://localhost:8000/blogs/" + id);
const handelDel=()=>{
    fetch('http://localhost:8000/blogs/' + blog.id,{
        method:'DELETE'
    }).then(() => {
        navigate('/');
      }) 
    }
  return (
    <div className="blog-detail">
      {ispending && <h3>Loading..</h3>}
      {err && <h3>Oops! Error Found {err}</h3>}
      <h2>Blog detail - {id}</h2>
      {blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by {blog.author} </p>
          <p>Written by {blog.body} </p>
          <button onClick={handelDel}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
