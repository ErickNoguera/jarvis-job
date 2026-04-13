import { Skill, SkillInput, SkillOutput } from "@shared/types";

export const jobFinderSkill: Skill = {
  name: "job-finder",

  async execute(input: SkillInput): Promise<SkillOutput> {
    console.log("🔍 Buscando trabajos...");

    return {
      result: [
        { title: "Backend Developer", company: "Fake Corp" }
      ]
    };
  }
};