import { Outlet } from "react-router"
import Navbar from "../../components/shared/navbar/Navbar"


function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
