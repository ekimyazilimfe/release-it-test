import Image from "next/image";
import FilterOptions from "./filter-options";

export default function Header(){
    return(
        <header className="bg-app-purple py-10 px-6 rounded-bl-[85px]">
            <div className="">
                <Image src={"/next.svg"} className="text-white" width={80} height={80} alt="Logo" />
            </div>
        </header>
    )
}