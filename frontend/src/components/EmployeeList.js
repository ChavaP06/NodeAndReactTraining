import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeeList = () => {
    const [tableData, setTableData] = useState([])

    const GetDataOnLoad = async () => {
        let fetchData = await axios.get('http://localhost:4000/api/getEmployee')
        setTableData(fetchData.data)
    }
    useEffect(() => {
        GetDataOnLoad();
    }, []);

    const renderTableRows = () => {
        return (
            <>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                    </tr>
                </thead>
                {
                    tableData.map(e => {
                        return (
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.username}</td>
                                <td>{e.password}</td>
                                <td>{e.email}</td>
                                <td>{e.createdAt}</td>
                                <td>{e.updatedAt}</td>
                            </tr>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div className='content-wrapper'>
            <table className="table table-striped">
                {renderTableRows()}
            </table>
        </div>
    )
}

export default EmployeeList

