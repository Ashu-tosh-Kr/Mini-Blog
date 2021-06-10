import { useQuery } from "react-query";
import BlogList from "../components/BlogList";
import ref from "../firebase";

const Home = () => {

  //func to fetch data from api
  const getData = async () => {
    // const res = await fetch("http://localhost:3000/blogs");
    // const data = await res.json();
    // return data;
    const snapshot = await ref.get();
    const items = snapshot.docs;
    return items;
  };

  const { data: blogs, status } = useQuery("blogs", getData);

  return (
    <div>
      {status === "error" && <div>Error!</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <div className="home">
          <BlogList blogs={blogs} title="All Blogs" />
        </div>
      )}
    </div>
  );
};

export default Home;
