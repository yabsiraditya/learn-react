import React from "react";

const Navbar = (props) => {

  return (
    <>
      <header>
        <nav>
          <h1>{props.navHeading}</h1>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">{props.navText}</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar