import { NavLink } from 'react-router-dom';
import logoLink from '../assets/images/pro4.webp';


export const NewsLinkEng = () => {
    return ( 
        <div className='logoLinks'>
        <NavLink to='/News'>
        <p>News</p>
        <img src={logoLink} alt="propa logo" className="imgGray" loading='lazy'/> 
        </NavLink>
        </div>
        );  
}
 export const MenuLinkEng = () => {
    return ( 
        <div className='logoLinks'> 
        <NavLink to='/Menu_Eng'>
        <p>Menu</p>    
        <img src={logoLink} alt="propa logo" loading='lazy'/> 
        </NavLink>
        </div>
        );
    
}
export const ContactLinkEng = () => {
    return ( 
        <div className='logoLinks'> 
        <NavLink to='/Contact'>
        <p>Contact</p>        
        <img src={logoLink} alt="propa logo" className="imgInvert" loading='lazy'/> 
        </NavLink>
        </div>
        );
}

export const GalleryLinkEng = () => {
    return ( 
        <div className='logoLinks'> 
        <NavLink to='/Gallery'>
        <p>Gallery</p>    
        <img src={logoLink} alt="propa logo" className="imgSepia" loading='lazy'/> 
        </NavLink>
        </div>
        );
}
