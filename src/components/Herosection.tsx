import Link from "next/link"
export default function Herosection (){
    return(
       <div>
         <div>
                <h1 className="flex items-center ml-96 font-serif text-2xl mt-3 text-white">Sell Your Car on PakWheels And Get the Best Price</h1>  
            </div>
            <div className=" flex justify-center gap-4">
                <div className="ml-12 mt-6 space-y-2">
                    <h1 className="text-blue-800">Post your Ad on PakWheels</h1>
                    <br />
                    <h1>
                        <span>✔</span> Post your Ad For Free in 3 Easy steps
                    </h1>
                    <h1>
                        <span>✔</span> Get Genuine offers from Verified Buyers
                    </h1>
                    <h1> 
                        <span>✔</span> Sell your car fast at the best price
                    </h1>
                    <br />
                    <button className="bg-red-400 text-white ml-5 rounded w-24">Post Your Ad</button>
                </div>
                <h1 className="ml-24 mt-28 font-semibold">OR</h1>
                <div className="mt-6 ml-20 space-y-2">
                    <h1 className="text-blue-800 ml-6">Try PakWheels Sell It For Me</h1>
                    <br />
                    <h1>
                        <span>✔</span> Dedicated Sales Expert To Sell Your Car
                    </h1>
                    <h1>
                        <span>✔</span> We Bargain For You And Share The Best Offer
                    </h1>
                    <h1> 
                        <span>✔</span> We Ensure Safe & Secure Transaction
                    </h1>
                    <br />
                    <button className="bg-blue-600 text-white ml-5 rounded w-24">Post Your Ad</button>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <h1 className="font-mono text-2xl ml-8">Featured New Cars</h1>
                <div className="flex font-semibold gap-10 mt-4 ml-8">  
                <h1>Popular</h1>
                <h1>Upcoming</h1>
                <h1>Newly Launched</h1>
                </div>
            </div>
            
            <div>
            <div className="flex gap-4 ml-8 mt-6">
            <Link href="corollatoyota">
            <div>
              <img className="h-40" src="/Toyota Corolla.jpg" alt="Toyota Corolla" />
              <h3 className="ml-12">Toyota Corolla</h3>
              <p className="text-green-600 text-sm ml-10">PKR 59.7-75.5 lacs</p>
              <p className="ml-16">★★★☆☆</p>
            </div>
            </Link>

            <Link href="altosuzuki">
            <div>
              <img className="h-40" src="/Suzuki Alto.png" alt="Suzuki Alto" />
              <h3 className="ml-14">Suzuki Alto</h3>
              <p className="text-green-600 text-sm ml-10">PKR 23.3 - 30.5 lacs</p>
              <p className="ml-16">★★★☆☆</p>
            </div>
            </Link>

            <Link href="cityhonda">
            <div>
            <img className="h-40" src="/Honda City.jpg" alt="Honda City" />
              <h3 className="ml-14">Honda City</h3>
              <p className="text-green-600 text-sm ml-10">PKR 46.5 - 58.5 lacs</p>
              <p className="ml-16">★★★☆☆</p>
            </div>
            </Link>
             <Link href="civichonda">
            <div>
            <img className="h-40" src="/Honda Civic.jpg" alt="Honda Civic" />
              <h3 className="ml-14">Honda Civic</h3>
              <p className="text-green-600 text-sm ml-10">PKR 86.6 - 99.0 lacs</p>
              <p className="ml-16">★★★☆☆</p>
            </div>
            </Link>
              
            </div>
            </div>
       </div>

    )
}