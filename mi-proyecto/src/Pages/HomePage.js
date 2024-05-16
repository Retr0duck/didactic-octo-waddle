import { Link } from "react-router-dom";
function HomePage(){
    return(
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">¡Welcome to Aurora Tech Solutions!</h1>
          <p className="text-lg md:text-xl mb-8">At Aurora, we are committed to offering you innovative technology solutions that drive your success. From software development to information technology consulting, our team of experts is here to help you achieve your business goals.</p>
          <Link to="/about" className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full uppercase font-semibold tracking-wide transition duration-300 ease-in-out">See more</Link>
        </div>
      </div>

       
    )
}
export default HomePage;