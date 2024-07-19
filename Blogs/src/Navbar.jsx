import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>Let's read Blogs</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="#">Contact Us</a>
                <a href="/Create" className="newBlog">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;