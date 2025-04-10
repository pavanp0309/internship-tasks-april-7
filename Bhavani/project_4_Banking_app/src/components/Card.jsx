import React from 'react'


const Card = ({trans}) => {
  return (
    <div className='p-4'>
        <div className="card shadow rounded-4 p-2">
        <div className="card-body"> 
    <h5 className="card-title  text-uppercase text-circle p-2">Title: {trans.title}</h5>
    <p className="card-text">💵Amount: {trans.amount}</p>
    <p className="card-text">📅Date: {trans.date}</p>
    <p className="card-text">🈹Category : {trans.category}</p>
    <p className="card-text">✏️Status : {trans.status}</p>
    <textarea class="form-control" placeholder="Note" id="floatingTextarea"></textarea>
    <p className=' p-4'>{trans.transactionType === "credit" ? (
      <span className="btn btn-success" disabled>💰credit</span>
  ) : (
    <span className="btn btn-outline btn-danger" disabled>💸Debit</span>
  )}
</p>
    </div>
        </div>
</div>
  )
}

export default Card
