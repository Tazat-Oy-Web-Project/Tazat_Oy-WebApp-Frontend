

function HeaderPart(){
    return(
        <div className="flex flex-col justify-center items-center mt-8 h-[120px] w-full bg-linear-to-r from-amber-300 via-orange-500 to-amber-200 shadow-lg relative overflow-hidden">
            {/* Animated overlay for slide effect */}
            <div className="absolute inset-0 bg-white animate-[slideOut_0.8s_ease-out_forwards]"></div>
            
            <div className="relative z-10">
                <h1 className="text-4xl font-bold text-white drop-shadow-md">Get a Quote</h1>
            </div>
            <div className="relative z-10">
                <p className="text-lg md:text-xl mt-3 text-white/95 font-medium drop-shadow-lg">
                    Fast, easy, and processed within 24 hours.
                </p>
            </div>
            
            <style>{`
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </div>
    )
}

export default HeaderPart;