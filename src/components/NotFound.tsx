import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
  <>
    <Typography variant='h3'>Page not found</Typography>
    <Link to="/"> Return to Home</Link>
  </>
  )
}

export default NotFound