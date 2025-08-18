import { Link } from 'react-router-dom'

 function NotFound(){
  return (
    <div className="grid place-items-center h-[60vh] text-center">
      <div>
        <h1 className="text-5xl font-black">404</h1>
        <p className="text-gray-500 mt-2">Page Not Found</p>
        <Link to="/" className="inline-block mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white">Go Home</Link>
      </div>
    </div>
  )
}
export {NotFound}