import Link from "next/link";

export default function Header(){
    return (
        <header className="w-full z-50 bg-gradient-to-br from-inherit to-black flex flex-row  items-center align-middle justify-around">
        <div className="flex flex-row justify-around bg-BrandPurple px-5 rounded-b-xl">
        <Link href="/">
            <svg className="h-16 w-16 md:w-20 md:h-20 shadow-sm hover:scale-110 transition duration-300 cursor-pointer"
                width="176" height="186" viewBox="0 0 176 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.904 59.9874C69.7188 45.6789 88.9214 42.2929 95.5205 55.1179C98.4396 60.7909 104.778 63.9141 111.072 62.8674C125.271 60.5058 134.941 77.2113 125.431 88.0165L123.9 89.7558C119.735 94.4878 118.837 101.265 121.626 106.919L123.047 109.798C129.257 122.386 115.754 135.58 103.313 129.078C97.4766 126.028 90.3184 127.29 85.8775 132.152C76.4106 142.517 59.2088 134.738 60.7395 120.784L61.0895 117.593C61.7768 111.327 58.615 105.265 53.0828 102.243L51.0493 101.132C38.4168 94.2312 41.7902 75.2257 55.9409 72.5884C62.2129 71.4195 67.1012 66.3167 67.904 59.9874Z" fill="#D9D9D9"/>
                <path d="M90.75 73.5C90.75 77 90.75 80.5 90.75 84C90.75 87.5 90.75 91 90.75 94.5C90.75 98 90.75 101.5 90.75 105C90.75 108.5 90.75 112 90.75 115.5C90.75 119 90.75 122.5 90.75 126H63.8C63.8 121.147 63.8 116.293 63.8 111.44C63.8 106.587 63.8 101.733 63.8 96.88C63.8 96.8333 63.7767 96.81 63.73 96.81C63.73 96.81 63.7067 96.81 63.66 96.81C63.66 96.81 63.66 96.8333 63.66 96.88L56.8 126H38.95C37.7833 121.147 36.64 116.317 35.52 111.51C34.4 106.703 33.2567 101.897 32.09 97.09C32.09 97.0433 32.0667 97.02 32.02 97.02C32.02 97.02 31.9967 97.02 31.95 97.02C31.95 97.02 31.95 97.0433 31.95 97.09C31.95 101.897 31.95 106.703 31.95 111.51C31.95 116.317 31.95 121.147 31.95 126H6.4C6.4 122.5 6.4 119 6.4 115.5C6.4 111.953 6.4 108.43 6.4 104.93C6.4 101.383 6.4 97.86 6.4 94.36C6.4 90.8133 6.4 87.29 6.4 83.79C6.4 82.0633 6.4 80.36 6.4 78.68C6.4 76.9533 6.4 75.2267 6.4 73.5H43.71C44.41 76.3933 45.0867 79.2867 45.74 82.18C46.3933 85.0267 47.0467 87.8967 47.7 90.79C48.4 93.6833 49.0767 96.5767 49.73 99.47C49.73 99.5167 49.73 99.5633 49.73 99.61C49.7767 99.61 49.8 99.61 49.8 99.61C49.8467 99.5633 49.87 99.5167 49.87 99.47L55.47 73.5H90.75Z" fill="#D9D9D9"/> 
            </svg>
        </Link>
            <button className="font-sans font-light text-lg lg:text-xl cursor-pointer ml-10 hover:scale-110 hover:underline duration-150  ease-in-out p-4">Menu</button>
            
        </div>
            
            <ul className="hidden font-sans font-light text-sm lg:text-lg cursor-pointer">
                <li className="mx-4 pt-1 md:pt-2 lg:mx-9 hover:scale-105 hover:line-through duration-150  ease-in-out"><Link href="/about">About</Link></li>
                <li className="mx-4 pt-1 md:pt-2 lg:mx-9 hover:scale-105 hover:line-through duration-150  ease-in-out" ><Link href="/">Projects</Link></li>
                <li className="mx-4 pt-1 md:pt-2 lg:mx-9 hover:scale-105 hover:line-through duration-150  ease-in-out" ><Link href="/contact">Contact</Link></li>
                <li className="mx-4 p-1 md:p-2 bg-BrandPurple rounded-2xl lg:mx-9 hover:scale-105 hover:line-through duration-150  ease-in-out" ><Link href="/"></Link>See my resume</li>
            </ul>
        </header>
    )
}