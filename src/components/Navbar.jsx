import { useNavigate } from "react-router";
import { menu } from "../assets";
import { Link } from "react-router-dom";
import { getUserLocal } from "../utils";

const Navbar = () => {
  const navigate = useNavigate();
  const user = getUserLocal();
  console.log(user);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Admin",
      path: "/admin",
    },
  ];

  return (
    <div className="Navbar">
      <div className="Container">
        <img src={menu} alt="Menu" className="MenuIcon"></img>
        <div className="Nav_list">
          {links.map((link, i) => {
            if (link.name === "Admin" && user?.custom_role !== "admin") {
              return null;
            }
            return (
              <Link key={i} to={link.path}>
                {link.name}
              </Link>
            );
          })}
        </div>
        {user?.id ? (
          <div className="ButtonGroup">
            <button
              onClick={() => {
                localStorage.clear();
                window.location.pathname = "/login";
              }}
              className="Login"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="ButtonGroup">
            <button onClick={() => navigate("/login")} className="Login">
              Login
            </button>
            <button onClick={() => navigate("/register")} className="Register">
              REGISTER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;