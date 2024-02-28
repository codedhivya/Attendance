import { Form } from 'react-bootstrap';
import React from 'react'
const Attendance = ({ data, toggleAttendance }) => {
    return (
        <>
            {
                <tbody>
                    <tr >
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td className='d-flex' style={{ backgroundColor: data.present ? '#b3e6b5' : '#d99090' }} >{data.present ? "Present" : "Absent"}

                        </td>
                        <td>
                            <Form.Check className='mx-5'
                                type="checkbox"
                                checked={data.present ? true : false}
                                onClick={() => toggleAttendance(data.id)}
                            /></td>
                    </tr>

                </tbody>
            }

        </>
    )
}

export default Attendance



