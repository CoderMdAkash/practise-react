function Hero() {
    return ( 
        <>
            <section className="px-[80px] py-12 bg-[#21212e] 2xl:py-2 xl:py-2 lg:py-2 md:py-2 sm:py-2">
                <div
                    className="mx-[5px] -mt-[30px] h-[250px] w-[250px] sm:h-[220px] sm:w-[220px] sm:mt-[50px] sm:mx-[320px] md:h-[250px] md:w-[250px] md:mt-[50px] md:mx-[410px] lg:h-[250px] lg:w-[250px] lg:mt-[50px] lg:mx-[700px] xl:h-[250px] xl:w-[250px] xl:mt-[50px] xl:mx-[800px] 2xl:h-[250px] 2xl:w-[250px] 2xl:mt-[50px] 2xl:mx-[900px]">
                    <img src="img/hero-img.png" className="select-none" />
                </div>
                <div
                    className="mt-5 sm:-mt-[200px] sm:-mx-[30px] md:mx-[10px] lg:mx-[50px] xl:mx-[220px] 2xl:mx-[250px]">
                    <span className="text-white text-3xl">👋 Hi, I'm <span
                            className="text-[#793fff] text-3xl font-bold">Akash</span></span>
                </div>
                <div className="mt-4 text-justify sm:-mx-[30px] md:mx-[10px] lg:mx-[50px] xl:mx-[220px] 2xl:mx-[250px]">
                    <div className="text-white text-1xl z-50">Well I am a Software Engineering working to<br/>make Varient Types of modern Software.<br/><span className="font-semibold">Know more about me below.
                        ⬇️</span>
                    </div><br/>
                </div>
                
                <div className="mt-4 sm:pb-[50px] sm:-mx-[30px] md:mx-[10px] lg:mx-[50px] xl:mx-[220px] 2xl:mx-[250px]">
                    <button
                        className="bg-[#793fff] text-white h-10 w-40 rounded-[5px] shadow-lg shadow-[#793fff]/30">Download CV
                    </button>
                </div>
            </section>
        </>
     );
}

export default Hero;