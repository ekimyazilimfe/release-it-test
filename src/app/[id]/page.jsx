import Jobs from "@/data/jobs.json";
import { notFound } from "next/navigation";
export default async function Page({ params }){
    const { id } = await params;
    const job = Jobs.find(job => job.id == id)
    if(!job){
        return notFound();
    }
    return(
        <div>
            {job.position}
        </div>
    )
}