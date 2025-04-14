"use client"
import { MapPin, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterOptions(){
    const searchParams = useSearchParams();
    const router = useRouter();
    return(
        <div>
            <div className="bg-card rounded-md px-2 py-4 ">
                <form className="flex justify-between items-center divide-x divide-muted" onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const formObj = Object.fromEntries(formData);
                    console.log(formObj);

                    const params = new URLSearchParams(searchParams);

                    for (const key in formObj) {
                        if (Object.prototype.hasOwnProperty.call(formObj, key)) {
                            const value = formObj[key];

                            params.set(key, value)
                            if(key === "location" && value === ""){
                                params.delete(key);
                            }
                            
                            
                        }
                    }

                    router.push(`/?${params.toString()}`)
                    
                }}>
                    <div className="inline-flex w-full px-1 items-center gap-1">
                        <Search />
                        <input name="searchText" className="border" type="text" />
                    </div>
                    <div className="inline-flex w-full px-1 items-center gap-1">
                        <MapPin />
                        <select className="w-full" name="location" id="" defaultValue={""}>
                            <option value="">Filter By Location</option>
                            <option value="asd">Test</option>
                            <option value="asd">Test</option>
                            <option value="asd">Test</option>
                            <option value="asd">Test</option>
                            <option value="asd">Test</option>
                        </select>
                    </div>
                    <div className="inline-flex w-full px-1 items-center gap-1">
                        <label>
                            <input name="isFull" type="checkbox" />
                            Full Time
                        </label>
                        <button className="bg-app-purple py-2 px-3 rounded-lg text-white">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}