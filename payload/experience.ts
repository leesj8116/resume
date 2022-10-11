import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '(주)드림시큐리티',
      position: 'Software Engineer',
      startedAt: '2021-11',
      descriptions: [
        '스프링 프레임워크 기반의 RESTful API 서버 백엔드 개발',
        'DID 솔루션의 공단 사업 참여 및 유지보수 진행',
      ],
      skillKeywords: [
        'Java',
        'Spring Boot',
        'RESTful API',
        'DID',
        'PKI',
        'Javascript',
        'Typescript',
        'React',
      ],
    },
  ],
};

export default experience;
