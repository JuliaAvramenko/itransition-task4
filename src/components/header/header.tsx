
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../storeProvider/hooks/appDispatch';
import { useCallback, useEffect } from 'react';
import { logoutUser } from '../../storeProvider/actionThunk/logoutUser';
import { getCurrentUserSelector } from '../../storeProvider/selector/getCurrentUserSelector';
import { useSelector } from 'react-redux';

function Header() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const currentUser = useSelector(getCurrentUserSelector)


    const onLogout = useCallback((e: any) => {
        dispatch(logoutUser(currentUser!))

    }, [currentUser, dispatch])

    function onRegistration() {
        navigate("/registration")
    }

    function onLogin() {
        navigate("/authpage")
    }

    useEffect(() => {
        if (currentUser === null && location.pathname === '/') {
            navigate('/authpage')
        }

    }, [currentUser, location, navigate])

    return (
        <header className={`${styles.header}`}>
            <div className={styles.container}>
                <p className={styles.name}> {currentUser && `${`Hello, ${currentUser?.name}!`}` || `${"Hello!"}`}</p>
                {
                    !currentUser
                    &&
                    <Button variant="dark" onClick={onRegistration}>
                        Registration
                    </Button>
                }
                {
                    currentUser
                    &&
                    <Button variant="outline-secondary" onClick={onLogout}>Logout</Button>
                    ||
                    <Button variant="light" onClick={onLogin}>Login</Button>

                }
            </div>
        </header >
    );
}

export default Header;