import { FC } from 'react'
import { Form } from 'react-bootstrap'
import { TUser } from '../../types/types'

type TProps = TUser & {
    callback: (id: number) => void
    checked: boolean
}




const TableRow: FC<TProps> = ({ id, name, profession, email, lastLogin, status, checked, callback, }) => {

    return (
        <tr key={id}>
            <td>
                <Form.Check aria-label="option 1" onChange={() => callback(id)} checked={checked} />
            </td>
            <td>{name}, {profession}</td>
            <td>{email}</td>
            <td>{lastLogin}</td>
            <td>{status}</td>
        </tr>
    )
}

export default TableRow;