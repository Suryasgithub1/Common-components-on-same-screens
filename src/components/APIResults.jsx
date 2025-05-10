import React from 'react'

const APIResults = ({detailsAPI}) => {
  return (
    <div>
        <div className="mt-10">
          <table className='min-w-full text-center border-collapse border border-gray-800'>
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-black">ID</th>
                <th className="border border-gray-300 px-4 py-2 text-black">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-black ">First Name</th>
                <th className="border border-gray-300 px-4 py-2 text-black">Last Name</th>
                <th className="border border-gray-300 px-4 py-2 text-black">Photo</th>
              </tr>
            </thead>
            <tbody>

              {detailsAPI.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.first_name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.last_name}</td>
                  <td className="border border-gray-300 px-4 py-2"><img className='w-15 h-15 rounded-full' src={item.avatar} alt="Profile Photos" /></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
    </div>
  )
}

export default APIResults

