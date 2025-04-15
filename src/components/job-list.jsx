"use client"
import { useEffect, useState } from "react";
import SingleJobCard from "./single-job-card";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { BlurFade } from "./magicui/blur-fade";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import AnimatedShinyTextDemo from "./animated-text";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

export default function JobList({ jobs }){
    const searchParams = useSearchParams();
    const [filteredJobs, setFilteredJobs] = useState(jobs);
    const [visibleJobs, setVisibleJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadCount, setLoadCount] = useState(6);
    const searchText = searchParams.get("searchText") || null;
    const location = searchParams.get("location") || "";
    const isFull = searchParams.get("isFull") || null;

    const handleMore = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setLoadCount(prev => prev + 6);
    }

    const hasMore = loadCount < filteredJobs.length;
    console.log(hasMore);
    
    useEffect(() => {
        let filtered = [...jobs];
    
        if(searchText || location || isFull){
            if (searchText) {
                filtered = filtered.filter(job =>
                  job.position.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                );
              }
          
              if (location && location !== "all") {
                filtered = filtered.filter(job => job.location === location);
              }
          
              if (isFull) {
                filtered = filtered.filter(job => job.contract === "Full Time");
              }
        }
    
        setFilteredJobs(filtered);
        setLoadCount(6)
      }, [searchParams, jobs]);

      useEffect(() => {
        setVisibleJobs(filteredJobs.slice(0, loadCount));
      }, [filteredJobs, loadCount])
    return(
        <div className="mt-20">
            <div className="grid gap-x-3 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visibleJobs.map((job, index) => (
                <BlurFade key={job.id} inView delay={0.25 + index * 0.05}>
                    <SingleJobCard job={job} />
                </BlurFade>
            ))}
        
           
        </div>
        {hasMore && (
            <div className="my-10 flex flex-col items-center justify-center">
                <Button variant={"ghost"} disabled={isLoading} onClick={handleMore}>
                    {isLoading ? "Yükleniyor..." : "Daha Fazla Yükle"}
                </Button>
            </div>
        )}
        </div>
    )
}