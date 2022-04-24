import { ISkill } from '../component/skill/ISkill';

const pl: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
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
    {
      title: 'Solidity',
      level: 2,
    },
    {
      title: 'JavaScript',
      level: 1,
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
      title: 'Jenkins',
      level: 2,
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
  category: 'Platform',
  items: [
    {
      title: 'Hyperledger fabric',
      level: 3,
    },
    {
      title: 'Ethereum',
      level: 2,
    },
    {
      title: 'Quorum',
      level: 2,
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
    {
      title: 'Geth',
    },
    {
      title: 'Truffle',
    },
  ],
};

const cert: ISkill.Skill = {
  category: 'Certification',
  items: [
    {
      title: 'CKA(Certified Kubernetes Administrator)',
    },
    {
      title: 'CHFA(Certified Hyperledger Fabric Administrator)',
    },
    {
      title: 'Corda Certified Developer',
    },
    {
      title: '정보처리기사',
    },
    // {
    //   title: 'Eclipse',
    // },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, devops, env, tool, cert],
  tooltip:
    '1: 관심이 있고, 취미로 사용 중\n2: 업무에 적용해 본 경험이 있음\n3: 다양한 업무에서 사용',
};

export default skill;
