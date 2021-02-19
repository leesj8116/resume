import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'LG CNS',
      position: 'Blockchain Software Engineer',
      startedAt: '2018-07',
      descriptions: [
        '하이퍼레저 패브릭 기반의 스마트 컨트랙트 개발 및 아키텍처 구성',
        '이력관리, 유통 추적 등 블록체인 관련 업무 로직 개발',
        '다양한 클라우드 및 폐쇄망 기반 시스템 아키텍처 구성',
        'Jenkins와 Git을 활용한 CI/CD 소스 버전관리 구성',
        'ElasticSearch를 활용한 시스템 모니터링 구성',
        '다건의 데이터 배치 작업 효율성 증가를 위한 스마트 컨트랙트 구현',
        '스마트 컨트랙트 호출 Rest API 설계',
      ],
      skillKeywords: ['Hyperledger Fabric', 'Docker', 'Java', 'Go', 'Linux', 'Git', 'Monitoring'],
    },
    {
      title: 'Ever More Security',
      position: 'Software Engineer',
      startedAt: '2017-01',
      endedAt: '2017-11',
      descriptions: [
        '인증된 기기 간 데이터를 암복호화하는 보안 장비 프로그램 개발',
        'iptable, netfileter를 활용한 계정/주소가 없는 통신 장비 시스템 구성',
        '통신 세션 간 실시간 키교환을 통해 동적으로 암호키를 생성하는 시스템 개발 및 특허 작성',
        '임베디드 리눅스 기반 소형 장비 시스템 구성',
      ],
      skillKeywords: ['Linux', 'C', 'Packet forwarding', 'Cryptographic'],
    },
  ],
};

export default experience;
