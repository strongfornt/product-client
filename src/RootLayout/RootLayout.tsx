import { Outlet, useLocation } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";
import NavBar from "../shared/Navbar/Navbar";



export default function RootLayout() {
    const location = useLocation()
  return (
   <section className="relative">
   {/* <header className="absolute z-30 w-full">
    <Nav/>
   </header> */}
    <header className={` ${location.pathname === '/login' && 'hidden' || location.pathname === '/register' && 'hidden'} `} >
        <NavBar/>
    </header>
    <main>
        <Outlet/>
    </main>
   </section>
  )
}
