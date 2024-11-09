import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
		<div className="navbar shadow-xl px-4 md:px-10 fixed z-10">
		<div className="flex-1">
		 <Link to="/" className="btn text-2xl font-bold"><span className="text-secondary">Byte</span><span className="text-primary">Blaze</span></Link>
		</div>
		<div className="flex-none">
		  <ul className="menu menu-horizontal px-1">
			<ul className="items-stretch hidden space-x-3 md:flex">
				<NavLink to="/"  className={({isActive}) =>isActive?"text-primary font-bold":"font-bold"}>Home</NavLink>

				<NavLink to="/blogs"  className={({isActive}) =>isActive?"text-primary font-bold":"font-bold"}>Blogs</NavLink>

				<NavLink to="/bookmarks"  className={({isActive}) =>isActive?"text-primary font-bold":"font-bold"}>Bookmarks</NavLink>
		</ul>
		  </ul>
		</div>
	  </div>
    );
};

export default Navbar;


