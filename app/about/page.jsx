import Image from "next/image";

export default function About() {
    return(
    <main>
        <section className="h-full" >
            <div className="h-full flex m-5 mt-24 flex-start flex-col">
                <h1 className="text-2xl underline decoration-4 lg:decoration-8 decoration-BrandPurple font-black md:text-4xl lg:text-6xl">
                    About me<span className="text-BrandPurple no-underline">.</span>
                </h1>
                <h3 className="text-lg font-serif md:text-xl lg:text-3xl mt-10">
                    I'm a developer, UI/UX designer and a Photo/Videography enthusiast.
                </h3>
            </div>
            <div className="flex justify-start mt-96">
                <p>Year 0</p>
                <p> Grew up as a computer kid, had one since birth because my mom wanted to learn Microsoft word and Excel so my dad bought her one, spent a lot of time playing and trying to understand more about what is this windows thing.</p>
                <div className="relative">
                    <Image 
                        
                    />
                </div>
            </div>
            <div className="flex justify-start mt-96">
                <p>2019</p>
                <p> Fast forward 18 years, I finished highschool in physics and then pursued this programming thing in college.</p> 
            </div>
            <div className="flex justify-start mt-96">
                <p>2021</p>
                <p>Two years later got my first diploma in programming and Learned a lot about different programming languages from mobile to website, front-end and backend.</p> 
            </div>
            <div className="flex justify-start mt-96">
                <p>2022</p>
                <p>Started my journey in 1337'42school' after succeeding in the piscine of 2021 which was a set of C and linux commands exams and exercises for a whole month.
                    I learned all valuable things in my journey at 1337KH, from low level programming in C and using different algorithms and Data structures, to Git and linux command lines.
                    But more importantly team work and peerLearning, using only projects and google as our friends 'which were like family there'.
                </p>
            </div>
            <div className="flex justify-start mt-96">
                <p>2024</p>
                <p>
                    A creative fullstack web developer was born and hopes for more achievements in his life.
                </p>
            </div>
        </section>
        <section className="photography h-full ">

        </section>
    </main>
        
    )
}
