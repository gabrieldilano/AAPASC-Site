export default function RolesSection() {
    return (
        <div className="bg-white text-white px-6 py-12 h-[100vh] flex items-center">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h1 className="optigurney text-7xl mt-20 text-black">Our Roles in the Community</h1>
                    <hr className="my-6 border-black lg:my-8" />
                </div>

                {/* Info Cards Section */}
                <div className="grid gap-8 md:grid-cols-3 justify-center items-center">
                    {/* Card 1 */}
                    <div className="bg-transparent border-black border-[1px] rounded-3xl text-black p-6 flex flex-col justify-center h-96">
                        <h2 className="michroma text-3xl md:text-4xl mt-2">Host Campus-Wide Events</h2>
                        <p className="articulat-cf font-light text-xl mt-auto">
                            We host vibrant campus-wide events that celebrate Asian American and Pacific Islander culture. 
                            These events provide a space for community building and bringing students together.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-transparent border-black border-[1px] rounded-3xl text-black p-6 flex flex-col justify-center h-96">
                        <h2 className="michroma text-3xl md:text-4xl mt-2">Support for Member Organizations</h2>
                        <p className="articulat-cf font-light text-xl mt-auto">
                            We offer resources and guidance to various member organizations, helping them achieve their goals 
                            and make a lasting impact on campus and beyond.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-transparent border-black border-[1px] rounded-3xl text-black p-6 flex flex-col justify-center h-96">
                        <h2 className="michroma text-3xl md:text-4xl mt-2">Advocate for the AAPI Community</h2>
                        <p className="articulat-cf font-light text-xl mt-auto">
                            As a vocal advocate for Asian American and Pacific Islander students, we work to raise awareness of social issues 
                            and foster understanding.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
