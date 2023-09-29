import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import "../styles/Navbar.scss"
const Navbar = () => {
  return (
    <div className='main'>
      <div className="logo"> <img src="src\assets\ecommerce-svgrepo-com.svg" alt="logo" height={70} width={70} />ORDERFLOW</div>
      <div className="icons">
      <SearchIcon/>
      <NotificationsIcon/>
      <SettingsIcon/>
      </div>
    </div>
  )
}

export default Navbar