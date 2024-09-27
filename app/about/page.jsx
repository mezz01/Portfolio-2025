import Image from "next/image";

export default function About() {
    return(
    <main className="">
        <section className="h-full" >
            <div className="h-full flex m-5 mt-24 flex-center flex-col mb-5">
                <h1 className="text-2xl underline decoration-4 lg:decoration-8 decoration-BrandPurple font-black md:text-4xl lg:text-6xl">
                    About me<span className="text-BrandPurple no-underline">.</span>
                </h1>
                <h3 className="text-lg font-serif md:text-xl lg:text-3xl mt-3 md:mt-10">
                    I'm a developer, UI/UX designer and a Photo/Videography enthusiast.
                </h3>
            </div>
            <div className="vertical-line border-l-2 h-[800px] ml-48 md:ml-60 pl-10 my-20 pt-28 text-white/50 border-white/50"> Scroll down</div>

            <div className="flex flex-col justify-center items-center lg:items-start h-full gap-5 lg:flex-row  mt-20 mx-6 mb-20">
                <p className="md:text-2xl lg:w-1/2 font-serif"> Grew up as a computer kid, had one since birth because my mom wanted to learn Microsoft word and Excel so my dad bought her one. <br/>So I spent a lot of time playing and trying to understand more about what is this windows thing.</p>
                    <Image
                        className="object-fill my-3 rounded-2xl mx-2"
                        src="/images/about.png"
                        width={600}
                        height={600}
                        alt="test" 
                    />
            </div>
            <div className="vertical-line border-l-2 h-[800px] ml-48 md:ml-60 pl-10 my-20 pt-28 text-white/50 border-white/50"> Scroll down</div>
            <div className="flex flex-col justify-center items-center lg:items-start h-full gap-5 lg:flex-row  mt-20 mx-6 mb-20">
                    <Image
                        className="object-fill my-3 rounded-2xl mx-2"
                        src="/images/jobintech-2.jpeg"
                        width={300}
                        height={400}
                        alt="test" 
                    />
                <p className="md:text-2xl lg:w-1/2 font-serif"> Fast forward 18 years, I finished highschool in physics and then pursued this programming thing in college for 2 years. <br/>Then Got my diploma as a fullstack developer graduate in 2021 </p>
            </div>
            <div className="vertical-line border-l-2 h-[800px] ml-48 md:ml-60 pl-10 my-20 pt-28 text-white/50 border-white/50"> Scroll down</div>

            <div className="flex flex-col justify-center h-full gap-5 lg:flex-row  mt-20 mx-6 mb-20">
                <p className="md:text-2xl lg:w-1/2 font-serif"> Started my journey in 1337'42school' after succeeding in the piscine of 2021 which was a set of C and linux commands exams and exercises for a whole month.
                    I learned all valuable things in my journey at 1337KH, from low level programming in C and using different algorithms and Data structures, to Git and linux command lines.
                    But more importantly team work and peerLearning, using only projects and google as our friends 'which were like family there'.</p>
                    <Image
                        className="object-fill my-3 rounded-2xl mx-2"
                        src="/images/1337.png"
                        width={600}
                        height={600}
                        alt="test" 
                    />
            </div>
            <div className="vertical-line border-l-2 h-[800px] ml-48 md:ml-60 pl-10 my-20 pt-28 text-white/50 border-white/50"> Scroll down</div>
            <div className="flex justify-center mt-10">
                <p className="text-2xl md:text-4xl font-serif">
                    A creative fullstack web developer was born and hopes for more achievements in his life.
                </p>
            </div>
        </section>
        <section className="photography h-full ">

        </section>
    </main>
        
    )
}
