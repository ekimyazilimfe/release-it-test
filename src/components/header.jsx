"use client"
import Image from "next/image";
import FilterOptions from "./filter-options";
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();
    return(
            <header className="max-w-6xl mx-auto">
                <div>


                        <Image src={"/next.svg"} className="text-white" width={80} height={80} alt="Logo" />


                    {pathname === "/" && (
                        <FilterOptions />
                    )}
                </div>
            </header>
    )
}