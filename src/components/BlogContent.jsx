/* eslint-disable react-hooks/exhaustive-deps */
import dummyimg from "../assets/dummyimg.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";

const BlogContent = () => {
  const { id } = useParams();
  const [state, setState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/blogs/${id}?populate=*`);
        setState(res.data.data);
      } catch (error) {
        alert("Something went wrong!");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="blog-wrapper">
        <div className="content">
          <img
            src={`${API_URL}${state?.attributes?.coverImage?.data?.attributes?.url}`}
            alt="blog"
          />
          <h1 className="BlogTitle">{state?.attributes?.title}</h1>
          <p>{state?.attributes?.description}</p>
        </div>
        <div className="Author_data">
          <img
            src={
              state?.attributes?.authorImage?.data?.attributes?.url
                ? `${API_URL}${state?.attributes?.authorImage?.data?.attributes?.url}`
                : dummyimg
            }
            alt="Author"
            className="AuthorImage"
          />
          <div className="AuthorDescription">
            <p>
              <strong>{state?.attributes?.authorName}</strong>
            </p>
            {/* <p>{state?.attributes?.content}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
