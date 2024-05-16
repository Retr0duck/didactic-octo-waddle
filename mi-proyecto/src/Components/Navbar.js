import Logo from "./xem-svgrepo-com.png";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      
        <div className="flex items-center">
            <img src={Logo} alt="Logo de la empresa" className="h-10 w-10 mr-3"/>
            <span className="text-white font-semibold text-lg">AuroraTech Solutions</span>
        </div>

        <div className="flex justify-center flex-1">
            <Link to="/" className="text-gray-300 hover:text-white mx-4 active:underline">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white mx-4 active:underline">About</Link>
            <Link to="/Contact" className="text-gray-300 hover:text-white mx-4 active:underline">Contact</Link>
        </div>

       
        <div>
            <Link to="/Login" className="text-gray-300 hover:text-white">Login</Link>
        </div>
    </div>
</nav>
    )
}

export default Navbar;