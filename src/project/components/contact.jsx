function Contact() {
    return ( 
        <>
            <section>
                <div className="bg-[#21212e] h-[500px] w-auto">
                    <p className="py-[30px] text-center text-3xl text-white font-extrabold">🎯 Let's <span
                            className="text-[#793fff]">Work </span><span>together</span></p>
                    <div
                        className="relative px-[6rem] mb-[20px] sm:mx-[180px] md:mx-[260px]">
                        <input type="text" id="name"
                            className="name border-2 w-[300px] pl-[10px] border-[#793fff] rounded-[5px] text-white bg-[#21212e] py-1 focus:outline-none focus:border-[#793fff] transition-colors peer"
                            autocomplete="off" placeholder="Name"/>
                    </div>
                    <div
                        className="relative px-[6rem] mb-[20px] sm:mx-[180px] md:mx-[260px]">
                        <input type="text" id="email"
                            className="email border-2 w-[300px] pl-[10px] border-[#793fff] rounded-[5px] text-white bg-[#21212e] py-1 focus:outline-none focus:border-[#793fff] transition-colors peer"
                            autocomplete="off" placeholder="Email"/>
                    </div>
                    <div
                        className="relative px-[6rem] mb-[20px] sm:mx-[180px] md:mx-[260px]">
                        <textarea type="text" id="message"
                            className="message border-2 w-[300px] h-[200px] pl-[10px] border-[#793fff] rounded-[5px] text-white bg-[#21212e] py-1 focus:outline-none focus:border-[#793fff] transition-colors peer resize-none"
                            autocomplete="off" placeholder="type your message here..."></textarea>
                    </div>
                    <div
                        className="relative px-[6rem] mb-[20px] sm:mx-[180px] md:mx-[260px]">
                        <button
                            className="send bg-[#793fff] text-white h-10 w-32 rounded-[5px] shadow-lg shadow-[#793fff]/30">Send</button>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Contact;