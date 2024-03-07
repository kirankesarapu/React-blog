import React from "react";
import blogimg from "../assets/blogimg.jpg";
import dummyimg from "../assets/dummyimg.jpg";
import { wallpaper } from "../assets";
import { useParams } from "react-router-dom";

const BlogContent = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita sapiente suscipit officiis eaque, velit consequatur quae illo corrupti voluptates officia tempora hic facere voluptatem numquam? Natus doloremque non aliquam!",
      coverImg: wallpaper,
      authorName: "Kiran Kesarapu",
      authorImg: dummyimg,
      authorDesc: "Description of Author",
    },
    {
      id: 2,
      title: "Blog 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita sapiente suscipit officiis eaque, velit consequatur quae illo corrupti voluptates officia tempora hic facere voluptatem numquam? Natus doloremque non aliquam!",
      coverImg: wallpaper,
      authorName: "Kiran Kesarapu",
      authorImg: dummyimg,
      authorDesc: "Description of Author",
    },
    {
      id: 3,
      title: "Blog 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita sapiente suscipit officiis eaque, velit consequatur quae illo corrupti voluptates officia tempora hic facere voluptatem numquam? Natus doloremque non aliquam!",
      coverImg: wallpaper,
      authorName: "Kiran Kesarapu",
      authorImg: dummyimg,
      authorDesc: "Description of Author",
    },
  ];

  let blog = blogs.filter((blog) => blog.id == id);
  blog = blog[0];
  console.log(blog);

  return (
    <>
      <div className="blog-wrapper">
        <div className="content">
          <img src={blog.coverImg} alt="blog" />
          <h1 className="BlogTitle">{blog.title}</h1>
          <p>{blog.desc}</p>
        </div>
        <div className="Author_data">
          <img src={blog.authorImg} alt="Author" className="AuthorImage" />
          <div className="AuthorDescription">
            <p>
              <strong>{blog.authorName}</strong>
            </p>
            <p>{blog.authorDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
