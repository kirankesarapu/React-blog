import React from "react";
import wallpaper from "../assets/wallpaper.jpg";
import { Link } from "react-router-dom";
import { dummyimg } from "../assets";

const Blogs = () => {
 
    const blogs = [
    {
      'id': 1,
      'title': "Blog 1",
      'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita sapiente suscipit officiis eaque, velit consequatur quae illo corrupti voluptates officia tempora hic facere voluptatem numquam? Natus doloremque non aliquam!",
      'coverImg': wallpaper,
      'authorName': "Kiran Kesarapu",
      'authorImg': dummyimg,
      'authorDesc': "Description of Author",
    },
    {
      'id': 2,
      'title': "Blog 2",
      'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita sapiente suscipit officiis eaque, velit consequatur quae illo corrupti voluptates officia tempora hic facere voluptatem numquam? Natus doloremque non aliquam!",
      'coverImg': wallpaper,
      'authorName': "Kiran Kesarapu",
      'authorImg': dummyimg,
      'authorDesc': "Description of Author",
    },
    {
      'id': 3,
      'title': "Blog 3",
      'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita sapiente suscipit officiis eaque, velit consequatur quae illo corrupti voluptates officia tempora hic facere voluptatem numquam? Natus doloremque non aliquam!",
      'coverImg': wallpaper,
      'authorName' : "Kiran Kesarapu",
      'authorImg' : dummyimg,
      'authorDesc' : "Description of Author"
    },
  ];

  return (
    <div className="BlogsContainer">
      {blogs.map((blog) => (
        <Link to={`/blog/${blog.id}`}>
          <div key={blog.id} className="Blog">
            <img className="CoverImage" src={blog.coverImg} alt="Cover" />
            <h1 className="BlogTitle">{blog.title}</h1>
            <p className="BlogContent">{blog.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
