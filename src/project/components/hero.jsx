function Hero() {
    return ( 
        <>
            <section className="px-[80px] py-12 bg-[#21212e] 2xl:py-2 xl:py-2 lg:py-2 md:py-2 sm:py-2 h-[90vh] flex justify-center items-center w-full">
                <div className="pt-[3vh] grid lg:grid-cols-2">
                    <div>
                        <div className="mx-auto w-full flex justify-center">
                            <img src="img/hero-img.png" className="select-none h-[15rem] w-[15rem]" />
                        </div>
                    </div>
                    <div>
                        <div className="mt-[5vh] text-center">
                            <span className="text-white text-3xl">👋 Hi, I'm <span className="text-[#793fff] text-3xl font-bold">Akash</span></span>
                        </div>
                        <div className="mt-[5vh] text-center">
                            <div className="text-white text-1xl z-50">Well I am a Software Engineering working to<br/>make Varient Types of modern Software.<br/><span className="font-semibold">Know more about me below.
                                ⬇️</span>
                            </div><br/>
                        </div>
                        
                        <div className="mt-4 sm:pb-[50px] sm:-mx-[30px] md:mx-[10px] lg:mx-[50px] xl:mx-[220px] 2xl:mx-[250px] flex justify-center items-center">
                            <button
                                className="bg-[#793fff] text-white h-10 w-40 rounded-[5px] shadow-lg shadow-[#793fff]/30">Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Hero;