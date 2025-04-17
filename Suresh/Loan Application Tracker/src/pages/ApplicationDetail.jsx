import React from 'react'
import { data } from '../data/dummyApplications'
import './ApplicationDetail.css'

const ApplicationDetail = () => {
  return (
    <div>
      <h1>ApplicationDetail</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Loan Amount</th>
            <th>Status</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.name}</td>
              <td>{application.loanAmount}</td>
              <td>{application.status}</td>
              <td>{application.submittedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationDetail
