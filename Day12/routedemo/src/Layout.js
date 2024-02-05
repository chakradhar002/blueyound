import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
            <li>
            <Link to="/aboutus">Abouts</Link>
          </li>
          
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;