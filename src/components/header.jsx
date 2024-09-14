import appleicon from '../assets/icono_apple.svg';
const header = () => {
    return (
        <header>
            <nav className="flex justify-between items-center p-5">
                <div className="flex justify-center items-center">
                    <a href="#">
                        <img src={appleicon} alt="apple icon" className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                    </a>
                    <h1 className="ml-5 text-4xl font-bold">Designed to be loved</h1>
                </div>
                <ul className="flex gap-5">
                    <li className="list-none"><a href="#" className="no-underline text-black py-2 px-5 hover:bg-blue-700 hover:rounded-lg hover:text-white hover:shadow-md">Overview</a></li>
                    <li className="list-none"><a href="#" className="no-underline text-black py-2 px-5 hover:bg-blue-700 hover:rounded-lg hover:text-white hover:shadow-md">Tech Specs</a></li>
                    <li className="list-none"><a href="#" className="no-underline text-black py-2 px-5 hover:bg-blue-700 hover:rounded-lg hover:text-white hover:shadow-md">Buy</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default header;