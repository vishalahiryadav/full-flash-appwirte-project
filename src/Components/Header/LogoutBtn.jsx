import authservice from "../../appwrite/Auth"
import { logout } from "../../store/authSlice"
import { useDispatch } from "react-redux"


export const LogoutBtn = () => {

    const dispatch = useDispatch();

    function handleClick(){
        authservice.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
     
    
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={handleClick}>
        LogoutBtn</button>
  )
}
