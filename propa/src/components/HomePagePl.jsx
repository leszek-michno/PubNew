import { NavLink } from 'react-router-dom';
import logoLink from '../assets/images/pro4.webp';


export const NewsLink = () => {
    return ( 
        <div className='logoLinks'>
        <NavLink to='/Aktualności'>
        <p>Aktualności</p>
        <img src={logoLink} alt="propa logo" className="imgGray" loading='lazy'/> 
        </NavLink>
        </div>
        );  
}
 export const MenuLink = () => {
    return ( 
        <div className='logoLinks'> 
        <NavLink to='/Menu'>
        <p>Menu</p>    
        <img src={logoLink} alt="propa logo" loading='lazy'/> 
        </NavLink>
        </div>
        );
    
}
export const ContactLink = () => {
    return ( 
        <div className='logoLinks'> 
        <NavLink to='/Kontakt'>
        <p>Kontakt</p>        
        <img src={logoLink} alt="propa logo" className="imgInvert" loading='lazy'/> 
        </NavLink>
        </div>
        );
}

export const GalleryLink = () => {
    return ( 
        <div className='logoLinks'> 
        <NavLink to='/Galeria'>
        <p>Galeria</p>    
        <img src={logoLink} alt="propa logo" className="imgSepia" loading='lazy'/> 
        </NavLink>
        </div>
        );
}

// export const AboutUs = () => {
//     return ( 
//         <div className='logo_links'> 
//         <NavLink to='/polish/aboutUs'>
//         <h2>O nas</h2>    
//         <img src={img1} alt="propa logo" /> 
//         </NavLink>
//         </div>
//         );
    
// }