import ProjectCard from "@/components/project-card";
import ServiceCard from "@/components/srvice-card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
    <section className="Hero flex flex-col justify-around mx-5 mt-20 md:mx-10 lg:mx-30 min-h-full">
      <div className=" flex flex-col lg:flex-col w-full md:ml-9 lg:ml-16">
        <h2 className="text-lg md:text-xl lg:text-4xl font-serif">Hi I'm</h2>
        <h1 className="text-4xl font-black md:text-6xl lg:text-9xl lg:-ml-2 lg:-mt-5" >MOHAMED AMINE <br/><span className=" text-BrandPurple">MEZZAT</span>.</h1>
        <p className="text-lg md:text-4xl mt-5 font-serif font-normal">A <span className=" line-through">front-end developer</span> based in Morocco.</p>
        <p className="text-sm md:text-xl font-sans font-thin">2025 © Portfolio</p>
        <Link href="/about" className=" w-fit  bg-BrandPurple/50 p-1 shadow-lg shadow-BrandPurple/50 rounded-lg text-sm md:text-xl mt-5 hover:scale-110 duration-100 ease-in">More about me</Link>
      </div>

      <div className=" flex flex-col mt-16 md:mt-0 md:flex-row justify-between items-center md:justify-around">
        <h2 className="text-3xl font-black grow-0 text-BrandPurple md:text-4xl lg:text-5xl">DEVELOPER</h2>

        <svg className="star grow-0 my-32 h-24 w-24 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full bg-white saturate-200 blur-3xl" 
        width="393" height="393" viewBox="0 0 393 393" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M196.5 0L219.694 125.117L312 37.5282L257.222 152.383L383.383 135.778L271.556 196.5L383.383 257.222L257.222 240.617L312 355.472L219.694 267.883L196.5 393L173.306 267.883L81.0002 355.472L135.778 240.617L9.6174 257.222L121.444 196.5L9.6174 135.778L135.778 152.383L81.0002 37.5282L173.306 125.117L196.5 0Z" fill="#D9D9D9"/>
          <path d="M195.736 187.416C197.016 187.416 198.211 187.117 199.32 186.52C200.429 185.88 201.325 185.112 202.008 184.216C202.691 183.32 203.032 182.509 203.032 181.784C203.032 180.547 202.563 179.651 201.624 179.096C200.728 178.541 199.725 178.264 198.616 178.264C197.848 178.264 197.165 178.349 196.568 178.52C195.971 178.648 195.437 178.861 194.968 179.16C194.541 179.459 194.2 179.821 193.944 180.248C193.731 180.675 193.624 181.165 193.624 181.72C193.624 182.701 194.051 183.683 194.904 184.664C195.8 185.645 196.909 186.499 198.232 187.224C200.877 188.632 203.437 190.019 205.912 191.384C208.429 192.749 210.904 194.093 213.336 195.416C215.768 196.739 218.221 198.083 220.696 199.448C223.171 200.813 225.688 202.2 228.248 203.608C227.309 205.699 226.371 207.789 225.432 209.88C224.493 211.928 223.533 213.997 222.552 216.088C219.693 214.424 216.835 212.76 213.976 211.096C211.16 209.389 208.323 207.704 205.464 206.04C202.648 204.333 199.811 202.648 196.952 200.984C194.093 199.277 191.235 197.613 188.376 195.992C185.56 194.328 182.723 192.685 179.864 191.064C178.413 190.211 177.133 189.379 176.024 188.568C174.957 187.715 174.061 186.819 173.336 185.88C172.653 184.899 172.141 183.853 171.8 182.744C171.459 181.592 171.288 180.312 171.288 178.904C171.288 176.557 172.184 174.339 173.976 172.248C175.768 170.157 178.563 168.451 182.36 167.128C186.2 165.763 191.149 165.08 197.208 165.08C202.84 165.08 207.533 165.613 211.288 166.68C215.043 167.704 217.859 169.197 219.736 171.16C221.613 173.08 222.552 175.405 222.552 178.136C222.552 179.501 222.189 180.76 221.464 181.912C220.781 183.064 219.715 184.088 218.264 184.984C216.856 185.837 215.085 186.541 212.952 187.096C210.819 187.608 208.323 187.949 205.464 188.12C202.605 188.291 199.384 188.248 195.8 187.992L195.736 187.416ZM191.448 191.32V192.664C190.083 193.347 189.037 194.115 188.312 194.968C187.629 195.779 187.288 196.611 187.288 197.464C187.288 198.531 187.693 199.533 188.504 200.472C189.315 201.411 190.488 202.179 192.024 202.776C193.56 203.331 195.437 203.608 197.656 203.608C199.747 203.608 201.581 203.181 203.16 202.328C204.781 201.475 206.147 200.387 207.256 199.064C208.408 197.699 209.368 196.291 210.136 194.84C210.904 193.347 211.523 191.939 211.992 190.616C212.461 189.293 212.803 188.248 213.016 187.48L227.288 193.496C226.776 196.483 225.709 199.384 224.088 202.2C222.467 204.973 220.333 207.469 217.688 209.688C215.043 211.907 211.928 213.677 208.344 215C204.76 216.28 200.728 216.92 196.248 216.92C192.621 216.92 189.315 216.728 186.328 216.344C183.341 215.96 180.675 215.405 178.328 214.68C176.024 213.912 174.083 212.995 172.504 211.928C170.925 210.861 169.709 209.624 168.856 208.216C168.045 206.808 167.64 205.272 167.64 203.608C167.64 202.072 168.045 200.515 168.856 198.936C169.667 197.357 170.989 195.949 172.824 194.712C174.659 193.432 177.091 192.472 180.12 191.832C183.192 191.149 186.968 190.979 191.448 191.32Z" fill="black"/>
        </svg>


        <svg className="-mt-10 h-32 w-48 md:h-52 md:w-52 lg:h-64 lg:w-64 grow-0"
        viewBox="0 0 514 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.9178 48.9357C32.9178 53.6463 31.7816 60.0877 33.1973 64.6179C34.2837 68.0943 34.0357 72.6573 34.0357 76.3252C34.0357 84.0639 31.5507 94.0238 34.0357 101.479" stroke="#FF4F18" stroke-width="20"/>
          <path d="M33.4767 50.6126C38.5282 50.6126 43.5796 50.6126 48.631 50.6126C50.0712 50.6126 52.0399 50.3115 53.4754 50.7368C54.5482 51.0547 55.3963 51.1716 56.5187 51.1716C58.6422 51.1716 60.0051 52.4154 62.0153 52.8174C70.7764 54.5696 78.4433 61.5243 78.1943 70.7355C78.049 76.1137 72.8737 78.9139 69.4992 82.1633C63.9835 87.4748 57.9656 91.4554 51.0222 94.8333C41.8796 99.281 32.4619 102.54 22.8874 105.92C18.9769 107.3 14.2293 109.863 10 109.863" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M100.553 46.6998C101.76 59.9772 101.898 73.0889 101.112 86.4488C100.696 93.5193 100.294 100.488 98.0378 107.255C97.6707 108.356 98.21 108.173 99.0005 107.628C101.638 105.809 104.031 103.995 106.95 102.597C115.415 98.5432 123.616 102.038 132.446 102.038C136.505 102.038 139.855 102.378 143.811 103.404C145.15 103.751 149.144 103.635 149.743 104.833" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M102.23 41.6691C109.251 41.6691 116.252 41.0556 123.285 41.1101C127.909 41.146 132.494 41.6691 137.135 41.6691C140.324 41.6691 146.743 40.3461 149.183 42.787" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M107.82 68.4997C113.941 68.4997 119.993 67.3817 126.141 67.3817C128.695 67.3817 130.907 68.4997 133.532 68.4997" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M202.845 56.2023C202.845 48.6489 203.561 27.9158 191.665 36.0794C188.115 38.5157 184.823 39.7216 180.734 41.1101C177.211 42.3065 174.793 45.7086 172.07 48.1593C168.059 51.769 168.11 55.7297 167.319 60.7051C166.697 64.6147 164.556 68.79 167.381 72.2882C168.526 73.7055 175.182 72.4784 177.256 72.8472C182.187 73.7238 187.261 74.4938 192.224 75.2383C198.221 76.1379 209.42 76.7749 210.08 85.0203C210.247 87.1068 210.643 90.0535 209.273 91.7279C207.219 94.2376 205.59 97.6673 202.596 99.243C195.308 103.079 185.16 109.938 176.262 107.565C174.054 106.976 168.871 106.182 167.661 103.963C167.112 102.957 167.371 99.2857 168.188 100.92" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M231.911 43.905C232.398 49.259 235.056 54.1206 235.265 59.5561C235.4 63.0616 235.265 66.6085 235.265 70.1144C235.265 75.2032 234.896 80.4603 235.544 85.5172C235.92 88.4506 236.383 91.2542 236.383 94.2123" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M299.546 60.6741C299.546 54.0003 291.513 44.1991 284.113 46.4514C282.694 46.8832 281.902 47.5521 280.728 48.3767C278.78 49.7444 276.291 49.4626 274.082 50.0537C270.123 51.1131 267.546 55.3028 265.76 58.6866C264.024 61.9752 261.536 63.9853 261.536 67.7233C261.536 71.422 261.262 74.1618 262.903 77.4432C266.28 84.1971 268.768 92.8551 276.691 95.5786C282.315 97.5119 292.851 99.9747 296.193 93.0943C297.64 90.1146 294.61 87.7161 295.106 84.7408C295.396 83.0002 297.804 85.5384 298.428 85.7035C300.129 86.1537 302.275 85.8277 304.018 85.8277C306.428 85.8277 308.312 84.1508 310.726 84.1508" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M328.054 51.7305C328.054 59.1414 330.155 66.1393 330.787 73.4061C331.176 77.8868 331.154 82.4091 331.687 86.8835C332.338 92.3542 331.339 99.0384 333.085 104.274" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M334.761 50.6126C337.009 54.305 340.545 56.8744 343.332 60.1151C345.538 62.6801 347.09 65.6437 348.86 68.4996C351.558 72.8527 354.029 77.0673 356.561 81.4802C359.164 86.0164 362.996 90.3181 363.952 95.5786C364.548 98.8554 365.021 102.263 366.064 105.392" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M366.064 105.392C366.064 93.6666 365.505 81.9819 365.505 70.2697C365.505 63.306 364.821 56.1129 365.319 49.1841C365.858 41.6782 369.734 32.3751 374.014 26.1421C377.972 20.3762 382.323 13.6576 389.385 11.4847C392.883 10.4084 401.914 8.76569 404.633 11.4847" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M395.689 47.2588C395.689 60.2388 393.757 72.5267 391.342 85.2066C390.449 89.8917 389.541 94.5103 389.541 99.274C389.541 99.7073 389.648 105.176 390.658 103.156" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M397.925 43.9049C402.687 42.5443 406.88 38.148 411.465 36.0794C414.322 34.7898 418.024 33.0314 421.184 32.7566C426.175 32.3226 431.211 28.7731 435.935 31.6076" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M397.366 70.7355C404.565 70.2213 411.655 68.7415 418.886 68.4686C422.582 68.3291 425.624 66.2637 429.227 66.2637" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M397.925 102.038C408.386 102.038 418.719 99.8019 429.227 99.8019" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
          <path d="M451.586 37.1973C451.586 42.7292 452.029 48.4479 451.307 53.9354C450.428 60.6121 449.564 67.3541 449.35 74.0893C449.024 84.3616 449.35 94.5447 449.35 104.833" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
      <path d="M452.704 33.8435C460.975 29.7082 470.946 25.8704 480.373 28.0985C486.916 29.645 491.735 37.0604 491.832 43.4702C491.866 45.6881 492.44 48.9245 491.149 50.861C488.387 55.0041 484.674 58.5656 480.653 61.4814C474.109 66.2254 466.319 68.5372 459.101 71.8534C457.611 72.5379 458.062 72.4124 459.412 72.4124C465.119 72.4124 469.461 75.3969 474.1 78.53C477.945 81.1265 482.021 83.9399 485.59 86.9146C487.747 88.7121 489.048 91.1061 490.962 93.0943C494.203 96.4599 497.642 99.4839 500.527 103.156C502.217 105.306 503.57 103.318 503.57 106.51" stroke="#FF4F18" stroke-width="20" stroke-linecap="round"/>
    </svg>
    </div>
    </section>

  <section className="min-h-screen mt-32 flex flex-col justify-around">
  <div className="flex-grow justify-center items-center align-middle ">
    <h1 className=" text-2xl md:text-4xl lg:text-6xl ml-4 mb-10 mt-5">Services : <br/><span className="text-sm md:text-lg lg:text-xl font-serif mx-1">' Tap or hover to read more '</span></h1>
    <div className="services flex flex-wrap justify-around gap-4 lg:mt-20">
      <ServiceCard title="Front-end development" description="Shipping fast and good looking UI using different technologies and libraries" />
      <ServiceCard title="Back-end development" description="Building robust and scalable server-side solutions" />
      <ServiceCard title="UI/UX Design" description="Designing intuitive and visually appealing user interfaces" />
    </div>
  </div>
  
  <div className="Tech mt-auto md:mb-16 lg:mb-20">
    <div className="relative flex overflow-x-hidden ">
      <div className="py-9 animate-marquee whitespace-nowrap">
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">JAVASCRIPT</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">REACT</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">NEXT.JS</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">TAILWIND</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">REDUX</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">GIT/GITHUB</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">EXPRESS.JS</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">FIREBASE</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">SHADCN-UI</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
      </div>

      <div className="absolute top-0 py-9 animate-marquee2 whitespace-nowrap">
      <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">JAVASCRIPT</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">REACT</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">NEXT.JS</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">TAILWIND</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">REDUX</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">GIT/GITHUB</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">EXPRESS.JS</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">FIREBASE</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6">SHADCN-UI</span>
        <span className="text-md font-serif md:text-lg lg:text-4xl mx-6 bg-gray-400 px-3 blur-lg rounded-full">*</span>
      </div>
    </div>
  </div>
</section>

    <section className="Projects mt-16 h-full pt-1 ">
      <h1 className=" text-2xl md:text-4xl lg:text-6xl ml-4 mb-10 mt-5" >Recent Projects :</h1>
      <p className="text-sm md:text-lg font-serif mx-4">Worked on plenty of projects in these 5 years all from hard low level C projects only using terminals and vim with no ui, to complete well functioning fullstack web applications.</p>
      <p className=" underline mt-2 text-sm md:text-lg font-serif mx-3 " >- And these are my latest work :</p>
      <div className="flex flex-wrap m-5 justify-around items-center">
        <ProjectCard title="Pindev" description="A platform made for developers and designers to gather inspiration and valuable resources using NextJs and Firebase" imgUrl="/images/pindev.png"/>
        <ProjectCard title="Namoudaj Ai" description="An Ai platform that helps with arabic, amazigh and Darija questions for a specific school needs, using NextJs, TailwindCSS, .Net core and Azure OpenAi API" imgUrl="/images/namodaj.jpeg"/>
        <ProjectCard title="Survey App" description="A platform to fill surveys, manage them, create reports and more using React.js,TailwindCSS and Firebase " imgUrl="/images/survey.png"/>
      </div>
      
    </section>
  </main>
  );
}
