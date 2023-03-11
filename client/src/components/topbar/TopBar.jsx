import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  console.log("the user is",user)
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" onClick={()=>{
          window.location.replace("https://www.facebook.com/IncedoInc/posts/3122214194510044")
        }}></i>
        <i className="topIcon fab fa-twitter-square" onClick={()=>{
          window.location.replace("https://twitter.com/IncedoInc")
        }}></i>
        <i className="topIcon fab fa-pinterest-square" onClick={()=>{
          window.location.replace("https://in.pinterest.com/incedoinc/")
        }}></i>
        <i className="topIcon fab fa-instagram-square" onClick={()=>{
          window.location.replace("https://www.instagram.com/incedoinc/")
        }}></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
