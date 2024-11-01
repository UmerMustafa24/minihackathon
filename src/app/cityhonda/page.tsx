import Link from "next/link"
export default function CityHonda(){
    return(
        <div className="items-center justify-between">
        <h1 className="font-semibold underline text-3xl text-center">HONDA CITY 2024 PRICE IN PAKISTAN , IMAGES , REVIEWS AND SPECS</h1>
       <img className="ml-96 mt-12" width={400} height={400} src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945"  alt="honda city" /> 
      
       <div className="flex items-center justify-center gap-12">
      <button className="mt-16 px-6 py-3 bg-cyan-400 border-2 border-white text-black">
       Book a test drive
      </button>
      <button className="mt-16 px-6 py-3 bg-cyan-400 border-2 border-white text-black">
       Request Bank Finance
      </button>
      <button className="mt-16 px-6 py-3 bg-cyan-400 border-2 border-white text-black">
       Visit Place
      </button>
      <button className="mt-16 px-6 py-3 bg-cyan-400 border-2 border-white text-black">
       Car Inspection
      </button>
</div>
<div>
    <h3 className="flex items-center justify-center text-3xl mt-12">Vehicle Description</h3>
    <ul className="flex mt-12 gap-8 ml-16">
        <li>Number of Doors = 4</li>
        <li>Engine = 1800 CC</li>
        <li>Condition = 9/10</li>
        <li>Driven = 9,500 KM</li>
        <li>Suspension Type = Soft Suspension</li> 
    </ul>
    <ul className="flex mt-12 gap-8 ml-72">
        <li>Avg = 13 km/ltr</li>
        <li>Transmission = Automatic</li>
        <li>Fuel Type = High Octane</li>
    </ul>
</div>
<div>
    <h3 className="text-green-700 text-center mt-6 text-3xl">PKR = 50,00,000/=</h3>
</div>
<div className="flex justify-center">
       <Link href="/cityhonda"><button className="bg-blue-500 border-2 border-white text-black px-6 py-2 rounded mt-8">
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