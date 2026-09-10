
function Navbar(){
    
    return(
       <nav className="fixed top-0 w-full bg-black/80 backdrop:blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
            <a href="#desgin" className="hover:text-gray-300 cursor-pointer">Design</a>
            <a href="#câmera" className="hover:text-gray-300 cursor-pointer">Câmera</a>
            <a href="#perfomance" className="hover:text-gray-300 cursor-pointer">Perfomance</a>
            <a href="#cores" className="hover:text-gray-300 cursor-pointer">Cores</a>
            
            
            
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">Comprar</button>
        </div>
       </nav>
    )
}

export default Navbar