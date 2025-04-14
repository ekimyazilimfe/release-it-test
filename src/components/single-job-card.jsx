"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SingleJobCard({
    job
}){
    const router = useRouter();
    return(
        <div onClick={() => router.push(job.id.toString())} className="bg-card cursor-pointer relative py-7 px-5 mt-10">
            <div className="w-8 h-8 -top-5 absolute rounded-lg p-1 bg-black">
                <Image src={"/vercel.svg"} width={50} height={50} className="object-cover" alt="vercel icon" />
            </div>
            <div id="metadata" className="inline-flex items-center gap-2 text-muted">
                <span>{job.postedAt}</span>
                <div className="w-1 h-1 rounded-full bg-muted"></div>
                <span>{job.contract}</span>
            </div>
            <h1 className="font-bold text-lg">{job.position}</h1>
            <p className="text-muted">{job.company}</p>
            <div id="footer" className="mt-10">
                <span className="text-app-purple font-bold text-xs">{job.location}</span>
            </div>
        </div>
    )
}