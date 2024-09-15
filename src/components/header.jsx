import appleicon from '../assets/icono_apple.svg';

const Header = () => {
    return (
        <header className="bg-gray-100">
            <nav className="flex flex-wrap justify-between items-center p-5">
                {/* Logo y título */}
                <div className="flex items-center justify-center">
                    <a href="#">
                        <img src={appleicon} alt="apple icon" className="w-10 h-10 sm:w-12 sm:h-12" />
                    </a>
                    <h1 className="ml-3 sm:ml-5 text-2xl sm:text-4xl font-bold hidden sm:block">Designed to be loved</h1>
                    
                </div>
                
                {/* Menú */}
                <ul className="flex gap-3 sm:gap-5 mt-4 sm:mt-0">
                    <li className="list-none">
                        <a href="#" className="no-underline text-black py-2 px-4 sm:px-5 hover:bg-blue-700 hover:rounded-lg hover:text-white hover:shadow-md">
                            Overview
                        </a>
                    </li>
                    <li className="list-none">
                        <a href="#" className="no-underline text-black py-2 px-4 sm:px-5 hover:bg-blue-700 hover:rounded-lg hover:text-white hover:shadow-md">
                            Tech Specs
                        </a>
                    </li>
                    <li className="list-none">
                        <a href="#" className="no-underline text-black py-2 px-4 sm:px-5 hover:bg-blue-700 hover:rounded-lg hover:text-white hover:shadow-md">
                            Buy
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
