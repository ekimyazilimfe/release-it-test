"use client"
import { MapPin, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Jobs from "@/data/jobs.json";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

export default function FilterOptions(){
    const locations = new Set(Jobs.map(job => job.location));
    const searchParams = useSearchParams();
    const router = useRouter();
    return(
        <div className="absolute left-0 right-0 -bottom-5">
            <div className="bg-card max-w-6xl mx-auto w-full rounded-md dark:bg-card-foreground px-2 py-4 ">
                <form className="flex justify-between items-center divide-x divide-muted" onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const formObj = Object.fromEntries(formData);

                    const params = new URLSearchParams(searchParams);

                    if(!formObj.isFull) params.delete("isFull")

                    for (const key in formObj) {
                        if (Object.prototype.hasOwnProperty.call(formObj, key)) {
                            const value = formObj[key];

                            params.set(key, value)
                            
                            if(value === ""){
                                params.delete(key);
                            }
                            
                            
                        }
                    }

                    router.push(`/?${params.toString()}`)
                    
                }}>
                    <div className="inline-flex w-full px-1 items-center gap-1">
                        <Search />
                        <Input defaultValue={searchParams.get("searchText")} name="searchText" className="border" type="text" />
                    </div>
                    <div className="inline-flex w-full px-1 items-center gap-1">
                        <MapPin />
                        <Select name="location" defaultValue={searchParams.get("location")}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value={"all"}>Hepsi</SelectItem>

                            {locations && [...locations].map((location, index) => {
                                return(
                                    <SelectItem key={location} value={location}>{location}</SelectItem>
                                )
                            })}
                                
                            </SelectContent>
                        </Select>
                        
                    </div>
                    <div className="inline-flex w-full px-1 items-center gap-1">
                        <Checkbox defaultChecked={searchParams.get("isFull")} id="isFull" name="isFull" />
                        <label
                            htmlFor="isFull"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Full Time
                        </label>
      
                        <Button className={"text-xs"} size={"sm"}>Search</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}