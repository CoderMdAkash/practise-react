function About() {
    return ( 
        <>
            <section>
                <p className="my-[50px] text-center text-3xl text-white font-extrabold">Here's More 
                        <span className="text-[#793fff]">About Me</span>
                </p>
                <div className="pt-[3vh] grid lg:grid-cols-2">
                        <div className="flex justify-center items-center">
                                <img src="img/about-img.png" 
                                className="h-auto w-[250px] md:w-[350px] sm:w-[200px] sm:mx-[40px] lg:w-[400px] lg:mx-[100px] xl:w-[400px] xl:mx-[150px] 2xl:w-[500px] 2xl:mx-[200px] mx-auto flex justify-center items-center" />
                        </div>
                        <div className="m-5 lg:m-24 md:m-24">
                                <div
                                className="mx-auto bg-[#21212e] shadow-lg flex mb-8 rounded-[10px] h-[480px] w-full">
                                <div className="bg-red-600 mx-[20px] mt-6 mb-8 rounded-full h-[15px] w-[15px]"></div>
                                <div className="bg-green-600 -mx-[10px] mt-6 mb-8 rounded-full h-[15px] w-[15px]"></div>
                                <div className="bg-blue-600 mx-[20px] mt-6 mb-8 rounded-full h-[15px] w-[15px]"></div>
                                <span className="my-[80px] -mx-[70px] text-pink-500 text-1xl">const aboutMe <br/>
                                        <span className="mx-[30px] text-blue-500 text-1xl">const details 
                                        <br/> <span className="mx-[50px] text-white text-1xl"><span
                                                className="text-yellow-500">I am </span> "Akash";</span>
                                        <br/> <span className="mx-[50px] text-white text-1xl"><span
                                                className="text-pink-500">TechnologiesKnown</span> </span>
                                        <br/> <span className="mx-[70px] text-white text-1xl"><span
                                                className="text-yellow-500">PHP:</span> "✅";</span>
                                        <br/> <span className="mx-[70px] text-white text-1xl"><span
                                                className="text-yellow-500">Laravel:</span> "✅";</span>
                                        <br/> <span className="mx-[70px] text-white text-1xl"><span
                                                className="text-yellow-500">JavaScript:</span> "✅";</span>
                                        <br/> <span className="mx-[70px] text-white text-1xl"><span className="text-yellow-500">Tailwind
                                                CSS:</span> "✅";</span>
                                        <br/> <span className="mx-[70px] text-white text-1xl"><span
                                                className="text-yellow-500">React:</span> "✅";</span>
                                        <br/> <span className="mx-[70px] text-white text-1xl"><span
                                                className="text-yellow-500">SQL:</span> "✅";</span>
                                        <br/> <span className="mx-[70px] text-pink-500 text-1xl"></span>
                                        <br/> <span className="mx-[30px]  text-blue-500 text-1xl"></span>
                                        </span><br/>
                                </span>
                                </div>
                        </div>
                </div>
            </section>
        </>
     );
}

export default About;