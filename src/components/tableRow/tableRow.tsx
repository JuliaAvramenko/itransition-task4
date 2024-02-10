import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { FC } from 'react'
import { Form } from 'react-bootstrap'
import { TUser } from '../../types/types'

type TProps = TUser & {
    callback: (id: number) => void
}




const TableRow: FC<TProps> = ({ id, name, profession, eMail, lastLogin, status, callback }) => {

    return (
        <tr key={id}>
            <td>
                <Form.Check aria-label="option 1" onClick={() => callback(id)} />
            </td>
            <td>{name}, {profession}</td>
            <td>{eMail}</td>
            <td>{lastLogin}</td>
            <td>{status}</td>
        </tr>
    )
}

export default TableRow;