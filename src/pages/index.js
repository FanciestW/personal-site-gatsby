import React from "react"
import { Link } from "gatsby";

import "../styles/index.scss";

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <br></br>
      <Link to="/contact/">Click me!</Link>
    </div>
  );
}
