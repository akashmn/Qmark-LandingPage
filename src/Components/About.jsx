

const About = () => {
  return (
    <div className="py-3 flex flex-row">
        <div className="h-screen w-full bg-green-600 px-[250px] py-16 flex flex-row items-center justify-between">
            <div>
                <div data-aos="fade-right" 
                    data-aos-duration="500"
                    className="rotate-[-12deg] h-[260px] w-[230px] border-2 p-3 bg-white border-black rounded-2xl flex flex-col items-center justify-start gap-2 hover:bg-sky-500 transition-all duration-300 -z-20">
                    <div data-aos="zoom-in" 
                         data-aos-duration="2000"
                         className="h-[70px] w-full  bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-2xl tracking-wider px-5 py-5 uppercase">We design</p>
                    </div>
                    <div data-aos="zoom-in" 
                         data-aos-duration="2500"
                         className="h-[70px] w-full bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-2xl tracking-wider px-2 py-5 uppercase">We develop</p>
                    </div>
                    <div data-aos="zoom-in" 
                         data-aos-duration="3000"
                         className="h-[70px] w-full bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-2xl tracking-wider px-1 py-5 uppercase">We promote</p>
                    </div>
                </div>

                <div data-aos="fade-right"
                    data-aos-duration="900"
                    className="rotate-[12deg] ml-28 -mt-36 h-[260px] w-[230px] border-2 p-3 bg-white border-black rounded-2xl flex flex-col items-center justify-start gap-2 hover:bg-sky-500 transition-all duration-300 z-200">
                    <div  data-aos="zoom-in" 
                         data-aos-duration="2000"
                         className="h-[70px] w-full  bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-2xl tracking-wider px-2 py-5 uppercase">We Develop</p>
                    </div>
                    <div data-aos="zoom-in" 
                         data-aos-duration="2500"
                         className="h-[70px] w-full bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-2xl tracking-wider px-2 py-5 uppercase">We support</p>
                    </div>
                    <div data-aos="zoom-in" 
                         data-aos-duration="3000"
                         className="h-[70px] w-full bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-[1.45rem] tracking-wider px-1 py-5 uppercase">We Empower</p>
                    </div>
                </div>

                <div data-aos="fade-right"
                    data-aos-duration="1300"
                    className="rotate-[-20deg] ml-10 -mt-14 h-[260px] w-[230px] border-2 p-3 bg-white border-black rounded-2xl flex flex-col items-center justify-start gap-2 hover:bg-sky-500 transition-all duration-300 z-100">
                    <div  data-aos="zoom-in" 
                         data-aos-duration="2000"
                         className="h-[70px] w-full  bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-2xl tracking-wider px-1 py-5 uppercase">We promote</p>
                    </div>
                    <div data-aos="zoom-in" 
                         data-aos-duration="2500"
                         className="h-[70px] w-full bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-2xl tracking-wider px-2 py-5 uppercase">We provide</p>
                    </div>
                    <div data-aos="zoom-in" 
                         data-aos-duration="3000"
                         className="h-[70px] w-full bg-white border-black border-2 rounded-2xl flem items-center justify-center">
                        <p className="text-[1.41rem] tracking-wider px-1 py-5 uppercase">We Integrate</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 ml-52">
                <p className="text-5xl tracking-wide">Presenting Ourselves!</p>
                <p className="text-lg">Our team of passionate designers, developers, and marketing specialists collaborates to bring your vision to life. We create beautiful, user-friendly websites and mobile apps, craft compelling design elements that elevate your brand, and implement data-driven digital marketing strategies to reach your target audience.</p>
                <p className="text-lg">At Qmark Technolabs, we offer a spectrum of services designed to meet the diverse needs of businesses today.</p>
            </div>
        </div>
    </div>
  )
}

export default About