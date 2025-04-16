import React from 'react'
import Card from './components/Card';
import data from './data/data';

const App = () => { 
  return (
    <div>
      <div className="container py-4 bg-dark">
      <h1 className="text-center mb-4 text-primary">Invoice Dashboard</h1>

      <div className="row">
        {data.map((invoice) => (
          <div key={invoice.id} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="w-100 h-100">
              <Card {...invoice}>
                <button className="btn btn-primary w-100 mt-auto">Download PDF</button>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default App
