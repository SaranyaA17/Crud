import React from 'react'
import './welcome.css'
import { useNavigate } from 'react-router'

const Welcome = () => {
    const navigate = useNavigate()
  return (
    <div className='welcom'>
      <button onClick={()=>navigate('/form')}>Go to Form </button>
    </div>
  )
}

export default Welcome
