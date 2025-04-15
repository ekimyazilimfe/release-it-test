import FilterOptions from "@/components/filter-options";
import JobList from "@/components/job-list";
import Jobs from "@/data/jobs.json";

export default function Home() {
  
  return (
    <div>
      <div>
        <JobList jobs={Jobs} />
      </div>
    </div>
  );
}
