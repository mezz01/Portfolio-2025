import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="min-w-[90%] md:min-w-[50%] mt-10 md:mt-20 mx-2 md:mx-5">
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden rounded-2xl transition-transform duration-300 ease-out transform group-hover:-translate-y-6">
          <Image
            src={imgUrl}
            alt={`Image for ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 50vw"
          />
        </div>
        
        {/* Title Container */}
        <div className="mt-4 text-center md:opacity-0 transform translate-y-[-20px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <p className="text-md md:text-lg font-extralight mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;