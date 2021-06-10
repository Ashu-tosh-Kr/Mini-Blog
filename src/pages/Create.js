import { useState } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import ref from "../firebase";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const history = useHistory();

  const postData = async (newBlog) => {
    // const res = await fetch("http://localhost:3000/blogs",{
    //     method: 'POST',
    //     headers: {"content-type": "application/json"},
    //     body: JSON.stringify(newBlog)
    // });
    // const data = await res.json();
    const docRef = await ref.add({
      title: title,
      body: body,
      author: author,
    });
    setTitle("");
    setBody("");
    setAuthor("Mario");
    return docRef;
  };

  const { mutate, status } = useMutation(postData);
  console.log(status);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, body, author };
    await mutate(newBlog);
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="josh">josh</option>
        </select>
        {status !== "loading" && <button>Add blog</button>}
        {status === "loading" && <button disabled>Posting</button>}
        {status === "success" && history.push("/")}
      </form>
    </div>
  );
};

export default Create;
