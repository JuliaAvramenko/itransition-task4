import React, { useCallback, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './registrationPage.module.css'
import { useAppDispatch } from '../../storeProvider/hooks/appDispatch'
import { createUser } from '../../storeProvider/actionThunk/createUser'
import { userDataActions } from '../../storeProvider/reducer/userDataReducer'

const RegistrationPage = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()



    const onRegistration = useCallback((e: any) => {
        e.preventDefault()

        const form = e.target

        dispatch(createUser({
            name: form.name.value,
            profession: form.profession.value,
            email: form.email.value,
            password: form.password.value
        }))
        navigate('/')

    }, [dispatch, navigate])

    useEffect(() => {
        dispatch(userDataActions.currentUserReset())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <Form onSubmit={onRegistration}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Profession</Form.Label>
                    <Form.Control type="text" placeholder="Enter your profession" name="profession" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default RegistrationPage