import { Dropdown } from "bootstrap";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")
  const [searchText, setSearchText] = useState("")
  return (
    <nav
      className="navbar navbar-expand-lg custom-nav"
      style={{
        height: "7rem",
        backgroundColor: "white",
        boxShadow: "0 4px 8px -2px rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png"
            style={{ height: "2rem" }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontWeight: "bold" }}>
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Address
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Office
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Choose location
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
            />
            <button className="btn btn-outline-primary" type="submit"
            onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => {
                   res.data.name === searchText
                })

                setListOfRestaurant(filteredList)
            }}
            >
              Search
            </button>
          </form>
          <button className="btn btn-outline-success ms-3"
          onClick={() => {
            btnNameReact === 'Login'
            ? setBtnNameReact('Logout')
            : setBtnNameReact('Login')
          }}
          >{btnNameReact}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
