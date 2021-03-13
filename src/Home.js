import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem impsum...", author: "yoshi", id: 2 },
    { title: "Web dev tips", body: "lorem impsum...", author: "luigi", id: 3 },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"></BlogList>
    </div>
  );
};

export default Home;
