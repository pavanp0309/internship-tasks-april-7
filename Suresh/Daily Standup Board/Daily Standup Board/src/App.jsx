import React from 'react'
import Card from './components/Card'

import { design } from './components/Design'
import { marketing } from './components/Marketing'
import { web } from './components/Web'
const App = () => {
  return (
    <>
    <h1 className='title'>Daily Standup Board</h1>
    <div className="body">
    <div className="first"> <b>Design Team</b> <br />
    {
      
      design.map((ele)=><Card Design details={ele}/>)
     }
    </div>

     <div className="middle"><b>Marketing Team</b> <br />
     {
      marketing.map((ele)=><Card  details={ele}/>)
     }
     </div>
    <div className="third"><b>Web Development</b> <br />
    {
      web.map((ele)=><Card  details={ele}/>)
     }
    </div>

    </div>
     

    </>
  )
}

export default App
