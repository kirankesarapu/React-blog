import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const Blogs = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/blogs?populate=*`);
        setState(res.data.data);
      } catch (error) {
        alert("Something went wrong!");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="BlogsContainer">
      {state.map((blog, i) => (
        <Link key={i} to={`/blog/${blog.id}`}>
          <div key={blog.id} className="Blog">
            <img
              className="CoverImage"
              src={`${API_URL}${blog?.attributes?.coverImage}`}
              alt="Cover"
            />
            <h1 className="BlogTitle">{blog?.attributes?.title}</h1>
            <p className="BlogContent">{blog?.attributes?.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
