import { useLocation } from 'react-router-dom'

const Indigo = () => {
  const uri = useLocation()
  return (
    <div className='indigo'>
      <p>Pathname ➡️ ('{uri.pathname}')</p>
    </div>
  )
}

export default Indigo
