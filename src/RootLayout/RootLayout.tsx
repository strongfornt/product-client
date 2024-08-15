import { Outlet } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";



export default function RootLayout() {
  return (
   <>
   <header>
    <Nav/>
   </header>
    {/* <header>
        <Navbar/>
    </header> */}
    <main>
        <Outlet/>
    </main>
   </>
  )
}
