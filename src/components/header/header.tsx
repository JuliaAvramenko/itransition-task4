
import { Link } from 'react-router-dom';
import styles from './header.module.css';




function Header() {

    return (
        <header className={`${styles.header}`}>
            <div className={styles.container}>
                <p className={styles.name}>Hello, Margo Brown!</p>
                <Link to="/authpage">Logout</Link>
            </div>         
        </header >
    );
}

export default Header;