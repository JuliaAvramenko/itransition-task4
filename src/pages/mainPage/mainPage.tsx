import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserDataSelector } from '../../storeProvider/selector/selector'
import { getUserData } from '../../storeProvider/actionThunk/getUserData'
import { useAppDispatch } from '../../storeProvider/hooks/appDispatch'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Table } from 'react-bootstrap'
import styles from './mainPage.module.css'
import { ReactComponent as BlockIcon } from '../../assets/block.svg'
import { ReactComponent as UnblockIcon } from '../../assets/unblock.svg'
import { ReactComponent as BinIcon } from '../../assets/bin.svg'
// import { ReactComponent as CheckboxIcon } from '../../assets/checkbox.svg'
import TableRow from '../../components/tableRow/tableRow'
import { deleteUsers } from '../../storeProvider/actionThunk/deleteUser'
import { unblockUser } from '../../storeProvider/actionThunk/unblockUser'
import { blockUser } from '../../storeProvider/actionThunk/blockUser'


const MainPage = () => {
  const [selectedRows, setSelectedRows] = useState<Number[]>([])

  const dispatch = useAppDispatch()
  const users = useSelector(getUserDataSelector)

  useEffect(() => {

    dispatch(getUserData())

  }, [dispatch])

  useEffect(() => {
    setSelectedRows([])
  }, [users])



  function checkboxHandler(id: number) {

    if (selectedRows.includes(id)) {
      const filtered = selectedRows.filter((item) => item !== id)
      setSelectedRows(filtered)
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  function deleteUserHandler() {
    for (let i = 0; i < selectedRows.length; i++) {
      dispatch(deleteUsers(selectedRows[i]))
    }
    // dispatch(deleteUsers(selectedRows))
  }

  function blockUserHandler() {
    for (let i = 0; i < selectedRows.length; i++) {
      dispatch(blockUser(selectedRows[i]))
    }
  }

  function unblockUserHandler() {
    for (let i = 0; i < selectedRows.length; i++) {
      dispatch(unblockUser(selectedRows[i]))
    }

  }

  const infoUserLines = users.map((item) => {
    return <TableRow key={item.id} {...item} checked={selectedRows.includes(item.id)} callback={checkboxHandler} />
  })

  function chooseAllCheckboxes() {
    const array: any[] = []
    if (users.length !== selectedRows.length) {
      for (let i = 0; i < users.length; i++) {
        array.push(users[i].id)
      }
      setSelectedRows(array)
    } else {


      setSelectedRows(array)
    }

  }

  function checkedNotChecked() {
    if (users.length === selectedRows.length) {

      return true
    } else {
      return false
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.buttons}>
        <Button variant="primary" className={styles.button} onClick={blockUserHandler}>
          <BlockIcon />
          Block
        </Button>
        <Button variant="primary" className={styles.button} onClick={unblockUserHandler}>
          <UnblockIcon />
          Unblock
        </Button>
        <Button variant="danger" className={styles.button} onClick={deleteUserHandler}>
          <BinIcon />
          Delete
        </Button>


      </div>
      <Table bordered hover variant="dark">
        <thead >
          <tr>
            <th>
              {/* <CheckboxIcon /> */}
              <Form.Check aria-label="option 1"
                checked={checkedNotChecked()}
                onChange={chooseAllCheckboxes} />
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
    </section>
  )
}
export default MainPage