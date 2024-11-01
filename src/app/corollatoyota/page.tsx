import Link from "next/link"
export default function toyotacorolla (){
    return(
        <div>
            <h1 className="text-3xl text-center mt-12 font-serif">TOYOTA COROLLA 2024 PRICE IN PAKISTAN , IMAGES , REVIEWS AND SPECS</h1>
            <img className="ml-96 mt-12" width={400} height={400}  src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="Toyota Corolla" />
            <div className="flex items-center justify-center gap-12">
        <button className="mt-16 px-6 py-3 bg-cyan-400 border-2 border-white text-black">Book A Test Drive</button>
        <button className="mt-16 px-6 py-3 bg-cyan-400 border-2 border-white text-black">Request Bank Finance</button>
        <button className="mt-16 px-6 py-3 bg-cyan-400 border-2 border-white text-black">Visit Place</button>
        <button className="mt-16 px-6 py-3 bg-cyan-400 border-2 border-white text-black">Car Inspection</button>
            </div>
            <div>
            <h3 className="flex items-center justify-center text-3xl mt-12 font-mono text-green-300">Vehicle Description</h3>
        <ul className="flex mt-12 gap-8 ml-32 font-sans">
            <li>Number of Doors = 4</li>
            <li>Engine = 1800 CC</li>
            <li>Condition = 9/10</li>
            <li>Driven = 9,500 KM</li>
            <li>Suspension Type = Soft Suspension</li>
         </ul>
         <ul className="flex mt-8 gap-8 ml-80 font-sans">
        <li>Avg = 13 km/ltr</li>
        <li>Transmission = Automatic</li>
        <li>Fuel Type = High Octane</li>
    </ul>
            </div>
<div>
    <h3 className="text-green-700 text-center mt-6 text-3xl">PKR = 50,00,000/=</h3>
</div>
<div className="flex justify-center">
       <Link href="/"><button className="bg-blue-500 border-2 border-white text-black px-6 py-2 rounded mt-8">
        Back
       </button>
       </Link>
       </div>
       <div className="flex justify-center">
       <Link href="/details"><button className="text-2xl bg-blue-500 border-2 border-white text-black px-14 py-2 rounded mt-8">
        Confirm
       </button>
       </Link>
       </div>
        </div>
    )
}