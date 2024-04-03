"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopBanner() {
    const [isDrawerOpen, changeIsDrawerOpen] = useState(false);

    const drawerClickedHandler = () => {
        changeIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div id="TopBanner" className="bg-white grid grid-cols-2 w-full p-4 select-none sm:grid-cols-4 sm:p-5 md:p-7">
            <div id="logo" className="font-bold text-lg sm:self-center sm:font-extrabold sm:text-6xl">OO</div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer ml-auto sm:hidden" onClick={drawerClickedHandler}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            
            <nav className={`${isDrawerOpen? "": "hidden"} col-span-2 justify-self-center sm:block sm:self-center`}>
                <ul className="grid grid-cols-2 gap-2 sm:flex md:gap-16">
                    <li className="link"><Link href="#">Home</Link></li>
                    <li className="link"><Link href="#about">About</Link></li>
                    <li className="link"><Link href="#Projects">Projects</Link></li>
                    <li className="link"><Link href="#Contact">Contact</Link></li>
                </ul>
            </nav>

            <div id="socials" className="hidden sm:flex sm:self-center sm:justify-end sm:gap-1 md:gap-2 lg:gap-3">
                <Link href={"https://www.instagram.com/daniel_eln_/?next=https%3A%2F%2Faccountscenter.instagram.com%2F%3F__coig_login%3D1"}>
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-black text-black rounded">
                        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white"/>
                    </svg>
                </Link>

                <Link href={"https://www.linkedin.com/in/opemipo-omoniyi11111/"}>
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-black text-black rounded">
                        <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="#F8F8F8"/>
                    </svg>
                </Link>

                <Link href={"https://twitter.com/Electro40679166"}>
                    <svg width="25" height="25" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-black text-black rounded">
                        <path d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>  
    )
}