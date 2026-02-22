import { Package, UserCircle } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = "/login" 
  }

  return (
    <nav>
      <div className='p-6 flex justify-between'>
        <div className="flex items-center gap-2 font-bold text-2xl text-blue-600">
          <Package size={32} />
          <a href='/'><span>StockFlow</span></a>
        </div>
        <div>
          <ul className='flex gap-5 items-center'>
            <a href='/about'><li>About Us</li></a>

            {token ? (
              <div className="relative">
                <UserCircle
                  size={36}
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md p-4 w-40 z-10">
                    <p className="text-sm text-gray-500 mb-1">Logged in as</p>
                    <p className="font-semibold text-gray-800 capitalize mb-3">{role}</p>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600 text-sm"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className='p-2 bg-blue-500 text-white rounded-md'>
                <a href='/register'><li>Register</li></a>
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar