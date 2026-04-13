import { jobFinderSkill } from "../modules/job-finder/jobfinder.skill";

export class Orchestrator {
  async run() {
    const jobs = await jobFinderSkill.execute({ data: null });

    console.log("📦 Resultado:", jobs.result);

    return jobs;
  }
}