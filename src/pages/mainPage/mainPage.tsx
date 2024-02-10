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
import TableRow from '../../components/tableRow/tableRow'


const MainPage = () => {
  const [selectedRows, setSelectedRows] = useState<Number[]>([])

  const dispatch = useAppDispatch()
  const users = useSelector(getUserDataSelector)

  useEffect(() => {
    dispatch(getUserData())

  }, [])

  function checkboxHandler(id: number) {

    if (selectedRows.includes(id)) {
      const filtered = selectedRows.filter((item) => item !== id)
      setSelectedRows(filtered)
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  const infoUserLines = users.map((item) => {
    return <TableRow key={item.id} {...item} callback={checkboxHandler} />
  })

  return (
    <section className={styles.container}>
      <div className={styles.buttons}>
        <Button variant="primary" className={styles.button}>
          <BlockIcon />
          Block
        </Button>
        <Button variant="primary" className={styles.button}>
          <UnblockIcon />
          Unblock
        </Button>
        <Button variant="danger" className={styles.button} onClick={() => { console.log(selectedRows) }}>
          <BinIcon />
          Delete
        </Button>

      </div>
      <Table bordered hover variant="dark">
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
    </section>
  )
}
export default MainPage