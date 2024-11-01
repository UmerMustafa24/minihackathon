import Link from "next/link"
export default function Navbar (){
    return(
        <div>
        <nav className="flex bg-slate-500 h-24">
            <img  src="data:image/png;base64,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" alt="Logo" />
            <ul className="flex gap-5 ml-4 mt-8 font-extrabold">
                <li>Used Cars</li>
                <li>New Cars</li>
                <li>Bikes</li>
                <li>Auto Store</li>
                <li>Videos</li>
                <li>Forums</li>
                <li>Blog</li>
                <li>More</li>
                <Link href="/contactus">Contact Us</Link>
                <Link className="text-red-700 text-bold -mt-4 ml-4 px-4" href="">Sign Up</Link>
                <Link className="text-red-700 text-bold -mt-4 -ml-2" href="">Sign In</Link>
            </ul>
        </nav>
        </div>
    )
}