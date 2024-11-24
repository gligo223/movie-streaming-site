import Link from 'next/link';
import Image from 'next/image';
import GenreDropDown from './GenreDropDown';
import SearchInput from './SearchInput';
import ThemeToggler from './ThemeToggler';

const Header = () => {
    return (
        <div className="w-full flex items-center justify-between backdrop-blur-md transition-colors p-5 bg-[#121212] gap-4 md:gap-0 sticky z-50 top-0">
            {/* Logo */}
            <Link href="/">
                <Image 
                    src="https://i.ibb.co/2MDxmx8/DALL-E-2024-11-21-03-33-32-A-m-Photoroom-1.png" 
                    alt="Logo" 
                    width={120} 
                    height={100} 
                    priority={true} 
                    className="cursor-pointer w-40 h-auto" 
                />
            </Link>
            {/* Others */}
            <div className="text-white flex space-x-2 items-center">
                <GenreDropDown />
                <SearchInput />
                <ThemeToggler />
            </div>
        </div>
    );
}

export default Header;