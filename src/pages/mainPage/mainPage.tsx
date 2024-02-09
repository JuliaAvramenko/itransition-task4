import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserDataSelector } from '../../storeProvider/selector/selector'
import { getUserData } from '../../storeProvider/actionThunk/getUserData'
import { useAppDispatch } from '../../storeProvider/hooks/appDispatch'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Table } from 'react-bootstrap'
import styles from './mainPage.module.css'
import { ReactComponent as BlockIcon } from '../../assets/block.svg'
import { ReactComponent as UnblockIcon } from '../../assets/unblock.svg'
import { ReactComponent as BinIcon } from '../../assets/bin.svg'
import { ReactComponent as CheckboxIcon } from '../../assets/checkbox.svg'


const MainPage = () => {
  // const [data, setData] = useState<TUser[]>(userData)

  const dispatch = useAppDispatch()
  const users = useSelector(getUserDataSelector)

  useEffect(() => {
    dispatch(getUserData())

  }, [])

  const infoUserLines = users.map((item) => {
    return (<tr key={item.id}>
      <td>
        <Form.Check aria-label="option 1" />
      </td>
      <td>{item.name}, {item.profession}</td>
      <td>{item.eMail}</td>
      <td>{item.lastLogin}</td>
      <td>{item.status}</td>
    </tr>)

  })

  return (
    <>
      <Link to={"/authpage"}>
        <div className={styles.buttons}>
          <Button variant="primary" className={styles.button}>
            <BlockIcon />
            Block
          </Button>
          <Button variant="primary" className={styles.button}>
            <UnblockIcon />
            Unblock
          </Button>
          <Button variant="danger" className={styles.button}>
            <BinIcon />
            Delete
          </Button>

        </div>
        <Table variant="dark">
          <thead >
            <tr>
              <th>
                <CheckboxIcon />
              </th>
              <th>Name, position</th>
              <th>E-mail</th>
              <th>Last Login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {infoUserLines}
          </tbody>
        </Table>
      </Link>

    </>
  )
}
export default MainPage