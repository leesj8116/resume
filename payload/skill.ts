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
      level: 3,
    },
    {
      title: 'Go',
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
  ],
};

const blockchain: ISkill.Skill = {
  category: 'Blockchain',
  items: [
    {
      title: 'Hyperledger Fabric',
      level: 3,
    },
    {
      title: 'Nexledger',
      level: 3,
    },
    {
      title: 'Monachain',
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
      title: 'Docker-Compose',
      level: 3,
    },
    {
      title: 'Maven/Gradle',
      level: 3,
    },
    {
      title: 'Terraform',
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
    {
      title: 'Oracle Cloud',
      level: 3,
    },
    {
      title: 'Cloud(AWS, Naver)',
      level: 2,
    },
  ],
};

const knowledge: ISkill.Skill = {
  category: 'Knowledge',
  items: [
    {
      title: 'PKI',
      level: 3,
    },
    {
      title: 'DID',
      level: 3,
    },
    {
      title: 'TSA',
      level: 3,
    },
    {
      title: 'CA',
      level: 2,
    },
    {
      title: 'SSL/TLS',
      level: 2,
    },
    {
      title: 'IaC',
      level: 2,
    },
    {
      title: 'MSA',
      level: 1,
    },
  ],
};

const cert: ISkill.Skill = {
  category: 'Certification',
  items: [
    {
      title: '정보처리산업기사',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, blockchain, devops, env, knowledge, cert],
  tooltip: ['[3] 다양한 업무에서 사용\n', '[2] 업무에 적용한 경험\n', '[1] 관심을 가지고 있다\n'],
};

export default skill;
