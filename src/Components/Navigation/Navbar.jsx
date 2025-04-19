import { Facebook, Mail, ChevronDown , Phone, Twitter } from "lucide-react"

const Header = () => {
    return(
        <div className="flex items-center justify-around bg-slate-600 p-3">
        <div>
        <ul className="flex items-center justify-center gap-2 text-gray-300">
                 <li><Mail height={20} /></li>
                 <li><a href="#">325i@lionsclubs.org.np,</a></li>
                 <li><a href="#">lcid325@gmail.com</a></li>
                 <li><Phone height={20} /></li>
                 <li><a href="#">01-5912390,</a></li>
                 <li><a href="">061-577166</a></li>
             </ul>
        </div>
        <div className="flex gap-10 text-slate-300">
         <a href=""><Facebook   /></a>
         <a href=""><Twitter   /></a>
        </div>
        </div>
    )
}
const Navbar = () => {
    const HomeDetails = []
  return (
  <>
  <Header />
  <nav className="flex items-center justify-around pl-7 pr-7 pt-2 pb-2 bg-conic-[at_30%_100%]  from-[#ffd900] to-[#00529B] to-70% ">
   <div className="flex items-center align-center gap-4">
        <div>
            <img src="/public/images/logo.svg" alt="" />
        </div>
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Lions International </h1>
            <span>District 325 k, Nepal</span>
            <span>Ly 2024-25</span>
        </div>
   </div>
   <div>
    <ul className="flex items-center justify-center gap-8 font-blod text-lg">
        <li><a href="">Home</a></li>
        <li className="flex cursor-pointer items-center relative group">Digi Team  <ChevronDown className="group-hover:rotate-180 transition duration-500" />
            <ul className="card">
                <li className="w-full p-3 hover:bg-gray-300"><a className="pt-4 pb-4" href="">Current Digi Team</a></li>
                <li className="w-full p-3 hover:bg-gray-300"><a className="pt-4 pb-4" href="">Past Digi Team</a></li>
            </ul>
        </li>
        <li className="flex items-center cursor-pointer relative group">Cabinate Official <ChevronDown className="group-hover:rotate-180 transition duration-500" />
            <ul className="card">
                <li className="w-full p-3 hover:bg-gray-300 hover:text-gray-600"><a className="pt-4 pb-4" href="">Senior</a></li>
                <li className="w-full p-3 hover:bg-gray-300 hover:text-gray-600"><a className="pt-4 pb-4" href="">Cluster Head and Deputy head</a></li>
                <li className="w-full p-3 hover:bg-gray-300 hover:text-gray-600"><a className="pt-4 pb-4" href="">Region Chairperson</a></li>
                <li className="w-full p-3 hover:bg-gray-300 hover:text-gray-600"><a className="pt-4 pb-4" href="">Zone Chairperson</a></li>
                <li className="w-full p-3 hover:bg-gray-300 hover:text-gray-600"><a className="pt-4 pb-4" href="">Global Chairperson</a></li>
                <li className="w-full p-3 hover:bg-gray-300 hover:text-gray-600"><a className="pt-4 pb-4" href="">Digi Program Team</a></li>
            </ul>
        </li>
        <li><a href="">Club</a></li>
        <li><a href="">Resources</a></li>
        <li className="flex items-center cursor-pointer relative group pt-4 pb-4">
            Leo Discric <ChevronDown className="group-hover:rotate-180 transition duration-500" />
            <ul className="card">
                <li className="w-full p-3 hover:bg-gray-300">
                    <a  className="pt-4 pb-4" href="">Leo Distric Council</a>
                </li>
                <li className="w-full p-3 hover:bg-gray-300">
                    <a className="pt-4 pb-4" href="">Leo Clubs</a>
                </li>
            </ul>
        </li>
        <li className="bg-secondary pt-2 pl-4 pr-4 pb-2 rounded-xl"><a href="">Login</a></li>
    </ul>
   </div>
  </nav>
  </>
  )

  
}



export default Navbar;