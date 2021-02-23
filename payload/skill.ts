import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Hyperledger Fabric',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Go',
      level: 3,
    },
    {
      title: 'C/C++',
      level: 2,
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'Git',
      level: 3,
    },
    {
      title: 'Maven/Gradle',
      level: 2,
    },
    {
      title: 'Kubernetes',
      level: 1,
    },
  ],
};

const env: ISkill.Skill = {
  category: 'Platform/Environment',
  items: [
    {
      title: 'Hyperledger fabric',
      level: 3,
    },
    {
      title: 'Linux(CentOS, Ubuntu)',
      level: 3,
    },
    {
      title: 'Naver Cloud',
      level: 2,
    },
  ],
};

const tool: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Vscode',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Vim',
    },
  ],
};

const cert: ISkill.Skill = {
  category: 'Certification',
  items: [
    {
      title: 'CHFA(Certified Hyperledger Fabric Administrator',
    },
    // {
    //   title: 'Eclipse',
    // },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, devops, env, tool, cert],
  tooltip:
    '1: 관심이 있고, 취미로 사용 중\n2: 업무에 적용해 본 경험이 있음\n3: 다양한 업무에서 사용',
};

export default skill;
