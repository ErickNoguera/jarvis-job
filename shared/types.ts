export interface SkillInput {
  data: any;
}

export interface SkillOutput {
  result: any;
}

export interface Skill {
  name: string;
  execute(input: SkillInput): Promise<SkillOutput>;
}