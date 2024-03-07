import { Route, Routes } from "react-router-dom";

import { BlogContentPage, Homepage } from "./pages";
import Login from "./pages/Login";
import { Footer, Navbar } from "./components";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/blog/:id" element={<BlogContentPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
