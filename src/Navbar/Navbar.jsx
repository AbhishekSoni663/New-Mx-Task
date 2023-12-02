import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar main-nav">
        <div className="container-fluid first-cont">
          <a className="navbar-brand  first-a mx-4">Restaurant Landing Page</a>
          <ul className="navbar-nav mx-4 first-nav float-end ">
            <li className="nav-item first-item">
              <a className="nav-link active" aria-current="page" href="#">
                Landing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="bi bi-cart-fill cart"></i>
              </a>
            </li>
          </ul>
          <div className="second-nav">
            <span className="sec-btn-ic">
              <a className="navbar-brand sec-a mx-4">Restaurant Landing Page</a>
              <span className="sec-btn-ic2">
                <i className="bi bi-cart-fill cart"></i>
                <button
                  className="navbar-toggler sec-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{ border: "none" }}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </span>
            </span>

            <div
              className="collapse navbar-collapse sec-collapse"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav mx-3 mb-2 mb-lg-0">
                <li className="nav-item first-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Landing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
