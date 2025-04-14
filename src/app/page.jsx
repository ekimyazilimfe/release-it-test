import FilterOptions from "@/components/filter-options";
import SingleJobCard from "@/components/single-job-card";
import Jobs from "@/data/jobs.json";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const { searchText, location, isFull } = params;
  console.log(searchText);
  let filteredJobs = Jobs;

  if(searchText || location || isFull){
    if(searchText){
      filteredJobs = filteredJobs.filter(job => job.position.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    }
    if(location){
      filteredJobs = filteredJobs.filter(job => job.location === location)
    }
    if(isFull){
      filteredJobs = filteredJobs.filter(job => job.contract === "Full Time")
    }
  }
  
  
  return (
    <div>
      <div className="relative">
                <div className="absolute max-w-full w-full -top-5 px-4">
                    <FilterOptions />
                </div>
            </div>
      <h1>Anasayfa</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job, index) => {
          return(
            <SingleJobCard key={index} job={job} />
          )    
        })}
      </div>
    </div>
  );
}
