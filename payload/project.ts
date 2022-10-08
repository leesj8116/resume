import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Hyperledger Fabric 플랫폼 관리자 솔루션 개발과제',
      startedAt: '2022-02',
      where: '드림시큐리티',
      descriptions: [
        { content: 'Hyperledger Fabric 상용화를 위한 기술, 정책, 성능개선 검토 담당.' },
        {
          content:
            'RESTful API 아키텍처의 블록체인 네트워크 노드구성, 구축, 관리, 모니터링 기능 설계 및 개발 담당.',
        },
        { content: '스마트컨트랙트 비즈니스로직 개발(Golang, Java)' },
        { content: 'TTA 블록체인 플랫폼 시험 합의서 검토 및 대응 담당.' },
      ],
    },
    {
      title: '부산에코델타 스마트빌리지 Smart-Pass 서비스 구축사업',
      startedAt: '2021-05',
      endedAt: '2022-01',
      where: '드림시큐리티',
      descriptions: [
        { content: '개발 PL 업무 겸임 및 개발 담당' },
        {
          content: '사용자 자격증명서 데이터 정의 및 VC 서버 개발 담당.',
        },
        { content: '스마트컨트랙트 비즈니스로직 개발(Golang, Java)' },
        { content: 'TTA 블록체인 플랫폼 시험 합의서 검토 및 대응 담당.' },
      ],
    },
  ],
};

export default project;
