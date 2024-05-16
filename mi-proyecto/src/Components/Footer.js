function Footer(){
    return(
        <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Auroratech Solutions</h3>
            <p>Somos una empresa líder en soluciones tecnológicas innovadoras.</p>
        </div>
        <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10c0-3.472-2.667-6-6-6s-6 2.528-6 6c0 .59.09 1.155.258 1.693L5.005 21.92a1 1 0 001.154 1.155l5.227-1.747A6 6 0 0018 16v-2.075M12 17v2M7 14l-2-2M12 10l2-2 2 2M7 7L5 5" />
                </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 5l-7 14-7-14" />
                </svg>
            </a>
        </div>
    </div>
</footer>

    )
}
export default Footer;