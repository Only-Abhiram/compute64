
const About = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 text-gray-800 space-y-8 mt-20 border border-slate-300 rounded-4xl bg-white">
            <section className="mb-5 py-3 border-b border-slate-300">
                <h2 className="text-3xl font-bold  text-center"><span className="text-[#2a41e8] text-shadow-lg/10">How It Works:</span> Encode or Decode in 3 Simple Steps</h2>
                <div className="flex justify-center items-center my-5 gap-3 font-bold italic ">
                    <h3>Paste Your Text</h3>
                    <img className="h-8" src="https://img.icons8.com/?size=100&id=15195&format=png&color=000000" alt="" />
                    <h3>Select Action</h3>
                    <img className="h-8" src="https://img.icons8.com/?size=100&id=15195&format=png&color=000000" alt="" />
                    <h3>Get Your Result</h3>
                </div>
            </section>
            <section className="text-center ">
                <h1 className="text-3xl font-bold">Why Choose Our <span className="text-[#2a41e8] text-shadow-lg/10">Base64 Encoder & Decoder</span>?</h1>
                <p className="mt-4 text-md italic">
                    Our Base64 Encoder/Decoder is the fastest, safest, and easiest way to encode or decode text data to and from Base64 format. Whether you're a developer, student, or just someone working with encoded strings—this tool is designed to make your job effortless and efficient.
                </p>
            </section>

            <section className="grid md:grid-cols-2 sm:grid-cols-1 border-b border-slate-300 pb-5">
                <h2 className="text-xl font-semibold italic text-gray-600 text-center bg-white p-3 border m-2 rounded-2xl border-blue-300">⚡ Lightning-Fast Processing</h2>


                <h2 className="text-xl font-semibold italic text-gray-600 text-center bg-white p-3 border m-2 rounded-2xl border-blue-300">🔐 100% Secure & Private</h2>


                <h2 className="text-xl font-semibold italic text-gray-600 text-center bg-white p-3 border m-2 rounded-2xl border-blue-300">🧠 Intuitive & Easy-to-Use</h2>


                <h2 className="text-xl font-semibold italic text-gray-600 text-center bg-white p-3 border m-2 rounded-2xl border-blue-300">💸 Completely Free</h2>


                <h2 className="text-xl font-semibold italic text-gray-600 text-center bg-white p-3 border m-2 rounded-2xl border-blue-300">✅ No Login Required</h2>


                <h2 className="text-xl font-semibold italic text-gray-600 text-center bg-white p-3 border m-2 rounded-2xl border-blue-300">🌐 Cross-Platform Access</h2>

            </section>



            <section className="flex flex-col items-center border-b border-slate-300 pb-6">
                <h2 className="text-3xl font-bold text-center text-[#2a41e8] text-shadow-lg/10">Key Features of Our Base64 Tool</h2>
                <div className=" mt-4 font-bold text-gray-600 italic grid grid-cols-3 gap-3 ">
                    <div className="flex justify-center items-center"> Dual Functionality<img className="h-10 inline" src="https://img.icons8.com/?size=100&id=JAEUhM3q4HQP&format=png&color=000000" alt="" /></div>
                    <div className="flex justify-center items-center">Clean & Readable Output<img className="h-10 inline" src="https://img.icons8.com/?size=100&id=JAEUhM3q4HQP&format=png&color=000000" alt="" /></div>
                    <div className="flex justify-center items-center">One-Click Copy<img className="h-10 inline" src="https://img.icons8.com/?size=100&id=JAEUhM3q4HQP&format=png&color=000000" alt="" /></div>
                    <div className="flex justify-center items-center">Realtime Conversion<img className="h-10 inline" src="https://img.icons8.com/?size=100&id=JAEUhM3q4HQP&format=png&color=000000" alt="" /></div>
                    <div className="flex justify-center items-center">No Ads, No Distractions<img className="h-10 inline" src="https://img.icons8.com/?size=100&id=JAEUhM3q4HQP&format=png&color=000000" alt="" /></div>
                </div>
            </section>

            

            

            <section className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-center text-[#2a41e8] text-shadow-lg/10">Who Is This For?</h2>
                <ul className=" list-inside mt-4 space-y-2">
                    <li><strong className="italic">Developers & Programmers</strong>: Use in APIs, JWTs, and embedded file systems.</li>
                    <li> <strong className="italic pr-14">Students & Learners</strong>: Learn Base64 through hands-on use.</li>
                    <li> <strong className="italic pr-7 ">Businesses & Marketers</strong>: Safely encode links and user data.</li>
                    <li> <strong className="italic pr-10">Designers & Creators  </strong>: Manage embedded text or image content easily.</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
