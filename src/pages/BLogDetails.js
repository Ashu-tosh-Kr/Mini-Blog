import React from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";
import ref from "../firebase";

const BLogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  //retrieving data
  const getBlog = async () => {
    // let res = await fetch(`http://localhost:3000/blogs/${id}`);
    // let data = await res.json();
    // return data;
    const doc = await ref.doc(id).get();
    return doc;
  };

  const { data: blog, status } = useQuery("blog", getBlog);

  //deleting data
  const handleClick = async () => {
    // await fetch(`http://localhost:3000/blogs/${id}`,{
    //     method: 'DELETE'
    // });
    ref.doc(id).delete();
    history.push("/");
  };

  return (
    <div className="blog-details">
      {status === "error" && <div>Error!</div>}
      {status === "loading" && <div>loading...</div>}
      {status === "success" && (
        <article>
          <h2>{blog.data().title}</h2>
          <p>Written by {blog.data().author}</p>
          <div>{blog.data().body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BLogDetails;
