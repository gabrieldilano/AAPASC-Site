import '../App.css'

export default function Headliners() {
    return (
        <>
        <div className="flex justify-center">
            <div className="max-w-7xl w-full p-4">
                <h1 className="optigurney text-4xl sm:text-7xl md:text-9xl text-center mt-20">
                    Previous Artists
                </h1>
                <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8 mb-20" />
            <div className="grid gap-4">
                {/* Top Row */}
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_4to3/v1723870129/CF-_Eaj_SB-8_dapmt3.jpg"
                    alt="Featured 1"
                    width={800}
                    height={600}
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43/v1723869333/CF-_Eaj_SB-29_heny9x.jpg"
                    alt="Featured 2"
                    width={800}
                    height={600}
                    />
                </div>
                </div>
    
                {/* Bottom Row */}
                <div className="grid grid-cols-3 gap-4">
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_eaj crop/v1723870128/CF-_Eaj_SB-7_d7eggi.jpg"
                    alt="Gallery Image 1"
                    width={600}
                    height={450}
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_eaj crop/v1723870707/CF-_Eaj_SB-24_xi0ybp.jpg"
                    alt="Gallery Image 2"
                    width={600}
                    height={450}
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_eaj crop/v1723869219/CF-_Eaj_SB-26_tmkkdw.jpg"
                    alt="Gallery Image 3"
                    width={600}
                    height={450}
                    />
                </div>
                </div>
            </div>
                <p className="articulat-cf text-sm ms-4 mt-4 mb-1">PHOTOGRAPHY BY @PRESET.STEVEN</p>
                <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
                <h1 className="optigurney text-4xl sm:text-7xl md:text-9xl text-right me-4 mt-2">EAJ PARK</h1>
                <p className="articulat-cf text-xl text-right me-4 mb-32">KOREAN AMERICAN SINGER/SONGWRITER</p>

                <div className="grid gap-4">
                {/* Top Row */}
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43smart/v1723872817/CF-_Sundial_SB-7_s3i6nl.jpg"
                    alt="Featured 1"
                    width={800}
                    height={600}
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43smart/v1723872813/CF-_Sundial_SB-28_qne4vc.jpg"
                    alt="Featured 2"
                    width={800}
                    height={600}
                    />
                </div>
                </div>
    
                {/* Bottom Row */}
                <div className="grid grid-cols-3 gap-4">
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43smart/v1723873562/CF-_Sundial_SB-36_uggqj1.jpg"
                    alt="Gallery Image 1"
                    width={600}
                    height={450}
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43landscape/v1723872819/CF-_Sundial_SB-51_xl0toj.jpg"
                    alt="Gallery Image 2"
                    width={600}
                    height={450}
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg object-cover"
                    src="https://res.cloudinary.com/dq6oea49h/image/upload/t_4to3/v1723872807/CF-_Sundial_SB-13_w63hsa.jpg"
                    alt="Gallery Image 3"
                    width={600}
                    height={450}
                    />
                </div>
                </div>
            </div>
                <p className="articulat-cf text-sm ms-4 mt-4 mb-1">PHOTOGRAPHY BY @PRESET.STEVEN</p>
                <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
                <h1 className="optigurney text-4xl sm:text-7xl md:text-9xl text-right me-4 mt-2">SUNDIAL</h1>
                <p className="articulat-cf text-xl text-right me-4 mb-32">POP-DUO JISU KIM AND DOROTHY CHAN</p>
            </div>
        </div>
      </>
    );
  }