import Link from 'next/link';
import Image from 'next/image';

const infoArray = [
    {
        title: "About us",
        href: "/about",
    },
    {
        title: "Contact us",
        href: "/contact",
    },
    {
        title: "Terms & Conditions",
        href: "/terms",
    },
    {
        title: "Privacy Policy",
        href: "/privacy",
    },
   
];

const Information = () => {
    return (
        <div className="flex flex-col text-gray-300">
            {infoArray.map((item) => (
                <Link href={item?.href} key={item.title} className="hover:text-white text-sm
                mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center
                gap-x-3 group">
                    <span className="w-2 h-2 rounded-full inline-flex border border-red-700 
                    group-hover:bg-red-700 duration-200" />
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

const Footer: React.FC = () => {
    return (
        <div className="bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
                <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                    Information
                    <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
                </h2>
                <Information />
            </div>
        </div>
    );
};


export default Footer;