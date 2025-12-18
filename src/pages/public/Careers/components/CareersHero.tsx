function CareersHero() {


    return (
        <header className="relative overflow-hidden w-full">
            {/** --------------------------------------------------------------------------------------- 
                Background Image with Overlay 
            --------------------------------------------------------------------------------------- **/}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
                    alt="Team working together"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60"></div>
            </div>

            {/** --------------------------------------------------------------------------------------- 
                Hero Content 
            --------------------------------------------------------------------------------------- **/}
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Work With Us
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed text-slate-200 sm:text-xl">
                        Join a friendly team that cares about quality, reliability, and people.
                        Apply below and let's talk.
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#apply"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Apply Now
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#roles"
                            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all duration-300"
                        >
                            View Open Roles
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default CareersHero;
