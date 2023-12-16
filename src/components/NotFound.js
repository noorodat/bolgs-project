import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <br />
            <p>That page is not found</p>
            <br />
            <Link to={'/'}>Back Home</Link>
        </div>
     );
}
 
export default NotFound;