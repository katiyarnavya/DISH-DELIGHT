import React from 'react'
import { useState, useEffect } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Success = () => {
  const [count, setCount] = useState(10)
  const navigate = useNavigate();

  useEffect(() => {
    const timeOutId = setInterval(() =>{
      setCount(prevCount => {
        if(prevCount === 1){
          clearInterval(timeOutId)
          navigate('/');
        } 
        return prevCount-1;
      })
    }, 1000)
    return () => clearInterval(timeOutId);
  
  }, [navigate])

  
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/sandwich.png" alt="" />
        <h1>
          Redirecting to Home in {count} seconds...
        </h1>
        <Link to = {'/'}>Back to Home <span><HiOutlineArrowNarrowRight/></span></Link>
      </div>
      
    </section>
  )
}

export default Success
