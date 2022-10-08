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
        { content: '개발팀 PL 업무 및 개발 담당' },
        {
          content: '사용자 자격증명서 데이터 정의 및 VC 서버 개발 담당.',
        },
        { content: 'Docker 컨테이너 배포를 위한 DID 플랫폼 도커라이징 및 배포 스크립트 작성' },
        {
          content:
            '블록체인(Aergo, 블로코) 업무협의 및 DID 플랫폼 연계 블록체인 인터페이스 Java library 개발',
        },
      ],
    },
    {
      title: '국민연금공단 블록체인 기반 해외 수급권 확인 시스템 구축사업',
      startedAt: '2021-05',
      endedAt: '2021-12',
      where: '드림시큐리티',
      descriptions: [
        {
          content:
            '운영계 Proxy 서버구축 및 구간 암호화(SSL/TLS) 설정 및 KISA 정보보안취약점 조치 담당',
        },
        {
          content: '운영계 연계 구간별 패킷분석을 통해 백본 및 라우터 보안이슈 담당',
        },
        { content: '사용자 제출 문서 TST 발급 및 주입, PDS 연계 문서 백업 작업 담당' },
        {
          content: 'TTA 서비스 및 블록체인 플랫폼 시험 대응',
        },
      ],
    },
  ],
};

export default project;
