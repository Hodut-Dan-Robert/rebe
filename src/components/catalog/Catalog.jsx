import './catalog.scss'
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import { Link } from 'react-router-dom';


function Catalog() {
  return (
    <div className="catalog">
        <div className="cat-0">
            <div className="cat-1">
                <img src={ img1 } alt="" />
                <button>500 lei</button>
            </div>
            <div className="cat-2">
            <img src={ img2 } alt="" />
            <button>1.000 lei</button>

            </div>
            <div className="cat-3">
            <img src={ img3 } alt="" />
            <button>1.200 lei</button>

            </div>
            <div className="cat-4">
            <img src={ img4 } alt="" />
            <button>1.400 lei</button>

            </div>
            <div className="cat-5">
            <img src={ img5 } alt="" />
            <button>5.000 lei</button>

            </div>
            <div className="cat-6">
            <img src={ img6 } alt="" />
            <button>10.000 lei</button>

            </div>
            <div className="cat-7">
            <img src={ img7 } alt="" />
            <button>20.000 lei</button>

            </div>
            <div className="cat-8">
            <img src={ img8 } alt="" />
            <button>50.000 lei</button>

            </div>
          
            
        </div>
      
        <div className="buton">
        <Link to="/navbar">    
      <a href="/navbar"><button>  Înapoi  </button></a>     
      </Link> 
            </div>
        
    </div>
      
    
  );
};

export default Catalog;
