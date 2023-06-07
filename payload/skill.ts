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
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'Kotlin',
      level: 2,
    },
    {
      title: 'SQL',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 1,
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
      level: 2,
    },
    {
      title: 'Maven',
      level: 2,
    },
    {
      title: 'Git',
      level: 2,
    },
  ],
};

const knowledge: ISkill.Skill = {
  category: 'tool to use',
  items: [
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'ORM (Spring Data JPA, Query DSL, Mybatis)',
      level: 2,
    },
    {
      title: 'React (with Redux, react-query)',
      level: 2,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, devops, knowledge],
  tooltip: [
    '[3] 자신감 있게 업무 가능\n',
    '[2] 시행착오를 겪어가며 업무 가능\n',
    '[1] 얕은 경험과 지식으로 추가 학습 필요\n',
  ],
};

export default skill;
