import { Link } from "react-router-dom"
import "./NavBar.css";

export default function NavBar() {
    
    return (
      <div>
        <header className='navbar'>
          <article>
            <h1>
              <Link to="/">
                <span>Planning Budget App</span>
              </Link>
            </h1>
          </article>

          <nav>
            <ul>
              <li>
                <Link to="/transactions">Index</Link>
              </li>
              <li>
                <Link to="/transactions/new">New</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
}