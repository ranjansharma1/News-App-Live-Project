import React from "react";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate ();
  const handleChangeNavbar=(event)=>{
    props.onOptionChange(event.target.value);
    //It will navigate to thefirst link
    navigate('/');
  }

  
  return (
    <nav className="navbar fixed-top  navbar-expand-lg bg-body-tertiary bg-warning">
      <div className="container-fluid">
        {/* Here I am replacing a --> Link and href --> to, reason to prevent loading, after doing this browser will not reload */}
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link active">General</Link></li>
            <li className="nav-item"><Link to="/business" className="nav-link active">Business</Link></li>
            <li className="nav-item"><Link to="/entertainment" className="nav-link active">Entertainment</Link></li>
            <li className="nav-item"><Link to="/health" className="nav-link active">Health</Link></li>
            <li className="nav-item"><Link to="/science" className="nav-link active">Science</Link></li>
            <li className="nav-item"><Link to="/sports" className="nav-link active">Sports</Link></li>
            <li className="nav-item"><Link to="/technology" className="nav-link active">Technology</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <select  onChange={handleChangeNavbar}>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="gb">UK</option>
          <option value="ru">Russia</option>
          <option value="jp">Japan</option>
          <option value="ae">UAE</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
          <option value="il">Israel</option>
        </select>
    </div>
    </nav>
  );
};
export default Navbar;
