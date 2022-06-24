import {useNavigate} from 'react-router-dom'

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <>
      <h2>Page not found!</h2>
      <a href="#" className="btn btn-add" onClick = {() => {navigate('/')}}>Back</a>
    </>
  )
}