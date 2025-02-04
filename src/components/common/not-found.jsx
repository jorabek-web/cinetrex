



export const NotFound = () => {
    return (
        <div className="w-full h-[98vh] overflow-hidden bg-[#000000] relative">
            <h1 className="absolute top-2/4 left-2/4 -translate-2/4 text-[800px] font-bold text-[#504d4d2f] -z-0">404</h1>
            <div className="text-center absolute top-2/4 left-2/4 -translate-2/4 z-10">
                <h1 className="text-[100px] font-bold text-[#B11226] border-b border-[#B11226]">Page Not Found</h1>
                <p className="text-[24px] font-semibold text-white mt-6">{`Sorry, the page you're looking for doesn't exist.`}</p>
            </div>
        </div>
    )
}
