import './navbar.scss';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import ara from '../../images/1.jpg';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="nav">
      <div className="nav-panou">
        <div className="panou-0">
          <h3>Rebeca M. Costa</h3>
        </div>
        <div className="panou-1">
          <img src={ image1 } alt="image1" />

        </div>
        <div className="panou-2">
        <img src={ image2 } alt="image1" />


        </div>
        <div className="panou-3">
        <img src={ ara } alt="image3" />


        </div>

        <div className="catalog">
          
          <Link to="/catalog">    
      <a href="/catalog"><button>Catalog</button></a>     
      </Link>  
        </div>
      </div>
    </div>
  )
}

export default Navbar;
