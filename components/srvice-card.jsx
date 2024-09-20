import { inter } from "@/app/layout";

export default function ServiceCard(props) {
    return (
        <div className=" bg-gradient-to-br text-gray-200 from-BrandPurple rounded-lg m-7 p-4 flex flex-grow flex-col justify-around max-w-96 lg:min-h-56 hover:bg-gradient-to-b hover:bg-BrandPurple duration-500 lg:hover:scale-125 hover:scale-110 cursor-pointer  ">
            <h1 className="p-1 lg:text-2xl">{props.title}</h1>
            <p className=" font-serif font-normal text-xl" style={{padding : 1 + 'em'}} >{props.description}</p>
        </div>
    )
}