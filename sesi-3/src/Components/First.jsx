import { useNavigate } from "react-router-dom"

const First = () => {
  const navigate = useNavigate()
  return (
    <>
      <h3>Home Page Route</h3>
      <button className="bg-slate-300 py-2 px-3 rounded-md" onClick={() => navigate('/About')}>Goto About</button>
    </>
  )
}

export default First