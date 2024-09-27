import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({title, description, imgUrl}) {
    return (
        <div className="flex flex-col w-[650px] h-fit items-center m-3 bg-gradient-to-br from-BrandPurple  rounded-3xl ">
            <Image
                className=" object-fill my-3 rounded-2xl mx-2"
                src={imgUrl}
                width={600}
                height={600}
                alt={`Image for ${title}`}
            />
            <div className="p-5">
                <h1 className="text-lg md:text-2xl mb-4 w-fit font-bold border border-white p-2 px-3 rounded-full">{title}</h1>
                <p className="text-sm md:text-lg font-serif ">{description}</p>
            </div>
        </div>
    )
}