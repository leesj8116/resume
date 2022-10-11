import { ISkill } from '../component/skill/ISkill';

const pl: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'SQL',
      level: 2,
    },
    {
      title: 'C#',
      level: 1,
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'Gradle',
      level: 3,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'Maven',
      level: 2,
    },
    {
      title: 'Git',
      level: 1,
    },
  ],
};

const env: ISkill.Skill = {
  category: 'Platform',
  items: [
    {
      title: 'Linux',
      level: 3,
    },
  ],
};

const knowledge: ISkill.Skill = {
  category: 'tool to use',
  items: [
    {
      title: 'Mybatis',
      level: 3,
    },
    {
      title: 'Spring Data JPA',
      level: 3,
    },
    {
      title: 'Query DSL',
      level: 2,
    },
    {
      title: 'Relational Database',
      level: 2,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, devops, env, knowledge],
  tooltip: [
    '[3] 업무에 능숙하게 활용 가능\n',
    '[2] 활용 가능하나 깊이는 아쉬움\n',
    '[1] 얕은 경험과 지식 보유\n',
  ],
};

export default skill;
