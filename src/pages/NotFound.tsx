import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
        <div>This page does not exist</div>
        <Link to={'/'}>
        <div>
            Return to main page
        </div>
      </Link>
    </>
  )
}

export default NotFound
