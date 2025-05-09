import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header style={{ padding: "10px", background: "#f2f2f2" }}>
        <nav>
          <Link to="/">Home</Link> 
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/solutions">Solutions</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{ padding: "10px", background: "#f2f2f2", marginTop: "20px" }}>
        <p>© {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </>
  );
};

export default Layout;
