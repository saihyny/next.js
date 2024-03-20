import React from 'react'

function Devloper({params}) {
    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]
        const id = params.devloperId
  return (
    <>
    {
      id<=details.length ? (
        <>
        <h2>Devloper</h2>
        <h4>{details[id].name}</h4>
        <h4>{details[id].role}</h4>
        </>
      ) : (<h2>Developer doesn't exist</h2>)
    }
    
   
    </>
    
  )
}

export default Devloper