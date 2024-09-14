import ig_icon from '../assets/ig_icon.svg';
import x_icon from '../assets/x_icon.svg';
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black text-center py-2 mt-5">
            <p>&copy; 2024 By Alejandro Salas Infante... All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="https://www.instagram.com/apple/" target="_blank">
                    <img src={ig_icon} alt="instagram_icon" className="w-6 h-6" />
                </a>
                <a href="https://x.com/Apple" target="_blank">
                    <img src={x_icon} alt="x_icon" className="w-6 h-6" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
