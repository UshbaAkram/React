import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("luci");
  function handelSubmit(e) {
    e.preventDefault();
    const blog = { title, author, body };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
    .then(()=>{
        console.log("Blog add");
        navigate('/');
});
  }

  return (
    <div className="create">
      <h1>Create a new blog</h1>
      <form onSubmit={handelSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <label>Blog Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="luci">Luci</option>
          <option value="Bunny">Bunny</option>
        </select>
        <button>Add Blog</button>
      </form>
      {title} {body}
    </div>
  );
};

export default Create;
