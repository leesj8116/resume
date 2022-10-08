import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '(주)드림시큐리티',
      position: 'Software Engineer',
      startedAt: '2018-11',
      descriptions: [
        '스프링 프레임워크 기반의 RESTful API 서버 백엔드 개발',
        'PKI 보안 인증솔루션 개발 및 구축사업 참여',
        'W3C 표준 DID(Decentralized Identity) 플랫폼 개발 및 구축사업 참여',
        '허가형 블록체인 Hyperledger Fabric 관리자 솔루션 설계 및 백엔드 개발',
        '스마트컨트랙트 개발(Java, Golang) 경험',
        'Nexledger, Monachain, Aergo 등 다양한 블록체인 응용개발사업 참여',
        'Oracle Cloud 인프라 관리 및 Terraform을 이용한 DID 솔루션 마켓플레이스 등재업무 경험',
        'DID, Blockchain 플랫폼 사업의 개발팀 PL 업무 경험',
      ],
      skillKeywords: [
        'Java',
        'Springboot',
        'RESTful API',
        'Blockchain',
        'DID',
        'PKI',
        'Golang',
        'Docker',
        'Cloud',
      ],
    },
  ],
};

export default experience;
