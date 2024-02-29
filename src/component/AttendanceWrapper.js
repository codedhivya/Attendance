import React from 'react'
import Attendance from './Attendance';
import { loadStudentData } from '../studentsData.js'
import { useEffect, useState } from 'react';
import AttendanceForm from './AttendanceForm.js';
import { Table } from 'react-bootstrap';
function getStoredData() {
    let data = JSON.parse(localStorage.getItem("studentrecord"));

    if (data) {
        return data
    };
    return loadStudentData;
}

const AttendanceWrapper = () => {

    const [studentsData, setStudentdata] = useState(getStoredData())
    const [filtered, setfiltered] = useState('')

    useEffect(() => {
        localStorage.setItem("studentrecord", JSON.stringify(studentsData))

    }, [studentsData])

    function sortbyID() {
        const sortedDataById = studentsData.slice().sort((a, b) => a.id - b.id);
        setStudentdata(sortedDataById);

    }
    function resetData() {
        setStudentdata(loadStudentData);
    }

    const toggleAttendance = (id) => {

        setStudentdata(prevAttendance => prevAttendance.map((student) => student.id === id ? { ...student, present: !student.present } : student))

    }
    function searchData(value) {

        setfiltered(value);

    }
    return (

        <div className='container my-5'>
            <div className='mx-auto rounded border p-4' style={{ width: "600px", backgroundColor: "#08618d" }}>
                <h2 className='text-white text-center mb-5'>Attendance App</h2>
                <AttendanceForm resetData={resetData} sortbyID={sortbyID} searchData={searchData} />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Attendance</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    {
                        studentsData.filter(item => String(item.id).toLowerCase().includes(filtered.toLowerCase())).map((data) => (<Attendance data={data} toggleAttendance={toggleAttendance} />))
                    }
                </Table>

            </div>
        </div>
    )
}
export default AttendanceWrapper