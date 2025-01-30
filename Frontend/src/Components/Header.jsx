import React from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useNavigate } from 'react-router'
import useSignOut from 'react-auth-kit/hooks/useSignOut';

export default function Header({
 
}) {
  const auth = useAuthUser()
  const [active,setactive]=React.useState('Home')
  
  const type=auth.role
  const Donernavigations= [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },

  ]
  const Hospitalnavigations = [
    { name: 'Home', path: '/hospital-dashboard' },
    { name: 'Profile', path: '/hospital-profile' },
    { name: 'Blood Requests', path: '/hospital-bloodRequests' },
   
  
  
  ]
  const Adminnavigations =[
    { name: 'Home', path: '/admin-dashboard' },
    {name: 'Hospital',path:'/admin-hospital'},
    {name: 'Doner',path:'/admin-doner'},
    {name: 'blood Request',path:'/admin-bloodRequest'},
    { name: 'Schedules',path:'/admin-schedules'},
  
   
  ]

  const signOut = useSignOut()
    const navigate = useNavigate()
  return (
    <header className="w-full sticky top-0 z-50 py-3 h-[100px] flex items-center justify-between shadow-sm bg-white px-5">
    <div className="flex items-center">
      <img
        src="data:image/png;base64,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"

        className="w-[80px] h-[80px] rounded-full border-4 border-yellow-300 shadow-md"
        alt="Logo"
      />
      <div className="ml-4">
        <p className="text-[24px] font-extrabold text-zinc-900">
          Ethiopian Red Cross <span className='px-2 py-[1px] text-sm rounded-full text-white bg-blue-500'>{type}</span> 
        </p>
        <p className="text-[14px] text-zinc-500">Humanity Above All</p>
      </div>
    </div>

    <nav className="flex items-center">
     {
        type === 'Doner' && Donernavigations.map((item,index)=>(
          <button key={index} onClick={()=>{navigate(item.path)
            setactive(item.name)
          }} 
          style={
            {
              color:active==item.name? "orange":"black"
            }
          }
          className={`text-lg font-semibold text-zinc-900 mx-2 hover:text-yellow-500 shadow-sm shadow-zinc-100 px-5 py-3 rounded-md `}>{item.name}</button>
        ))
      }
      {
        type === 'Hospital' && Hospitalnavigations.map((item,index)=>(
          <button key={index} onClick={()=>{navigate(item.path)
            setactive(item.name)
          }} 
          style={
            {
              color:active==item.name? "orange":"black"
            }
          }
          className={`text-lg font-semibold text-zinc-900 mx-2 hover:text-yellow-500 shadow-sm shadow-zinc-100 px-5 py-3 rounded-md `}>{item.name}</button>
        ))
      }
      {
        type === 'Admin' && Adminnavigations.map((item,index)=>(
          <button key={index} onClick={()=>{navigate(item.path)
            setactive(item.name)
          }} 
          style={
            {
              color:active==item.name? "white":"black",
              backgroundColor:active==item.name? "orange":""
            }
          }
          className={`text-lg  font-semibold text-zinc-900 mx-2 hover:text-yellow-500 shadow-sm shadow-zinc-100 px-5 py-3 rounded-md `}>{item.name}</button>
        ))
     }
     <button onClick={
    ()=>{
      signOut()
      navigate('/login')
    }
     } className={`text-lg font-semibold text-zinc-900 mx-2 hover:text-yellow-500 shadow-sm shadow-zinc-100 px-5 py-3 rounded-md `}>Sign Out</button>
   
    </nav>
  </header>
  )
}
