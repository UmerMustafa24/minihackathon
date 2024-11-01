import Link from "next/link"
export default function CorollaToyota(){
    return(
         <div className="items-center justify-between">
        <h1 className="font-semibold text-3xl text-center">TOYOTA COROLLA 2024 PRICE IN PAKISTAN , IMAGES , REVIEWS AND SPECS</h1>
       <img className="ml-96 mt-12" width={400} height={400} src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="toyota corolla" /> 
       <br />
       
       <p className=" -mt-48 flex items-center justify-center h-screen text-center font-bold font-mono">The Toyota Corolla, launched in 1966, is one of the most popular compact cars globally, renowned for its reliability, fuel efficiency, and affordability. Over the decades, it has undergone numerous updates, maintaining a modern design characterized by sleek lines and an aerodynamic profile. Inside, the Corolla offers a spacious and well-equipped interior, featuring user-friendly infotainment systems and quality materials. With a range of efficient engine options, including hybrids, the Corolla delivers a smooth ride and comfortable handling, making it an excellent choice for daily driving. </p>
       <h2 className="text-green-700 text-center -mt-48 text-3xl">PKR 50,00,000/= </h2>
       <div className="flex justify-center">
       <Link href="/corollatoyota"><button className="bg-blue-500 border-2 border-white text-black py-2 px-4 rounded mt-8">
        Make Payment
       </button>
       </Link>
       </div>
       </div>
    )
}