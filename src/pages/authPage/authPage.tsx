import React, { useCallback, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './authPage.module.css';
import { useAppDispatch } from '../../storeProvider/hooks/appDispatch'
import { loginUser } from '../../storeProvider/actionThunk/loginUser';
import { useSelector } from 'react-redux';
import { getCurrentUserSelector } from '../../storeProvider/selector/getCurrentUserSelector';

const AuthPage = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(getCurrentUserSelector)


  const onLogin = useCallback((e: any) => {
    e.preventDefault()

    const form = e.target
    dispatch(loginUser({
      email: form.email.value,
      password: form.password.value
    }))
  },
    [dispatch]
  )

  useEffect(() => {
    if (currentUser != null) {
      navigate('/')
    } else
      console.log("The user is not authorized")

  }, [currentUser, navigate])


  return (
    <div className={styles.container}>
      <Form onSubmit={onLogin}>
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
export default AuthPage