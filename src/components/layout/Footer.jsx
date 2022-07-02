import React from 'react';
import styles from './Footer.module.css'
import {DiAndroid, DiApple, DiCodeBadge} from "react-icons/di";

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li> <DiAndroid /></li>
                <li> <DiApple /></li>
                <li> <DiCodeBadge /></li>
                

                

            </ul>
        
           <p className={styles.copy_right}><span >Todos os direitos reservados ©</span></p> 
           <p className={styles.copy_right}><span >@SantigoFerreira</span></p>
        </footer>
     );
}
 
export default Footer;