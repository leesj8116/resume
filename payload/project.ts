import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '한국은행 CBDC 파일럿 컨설팅 사업',
      startedAt: '2020-12',
      endedAt: '2021-03',
      where: 'LG CNS',
      descriptions: [
        { content: '한국은행 CBDC 시스템 구성을 위한 컨설팅 진행' },
        { content: 'CBDC 원장 및 시스템 아키텍처 구성 지원' },
      ],
    },
    {
      title: '블록체인 기반 식품안전 데이터플랫폼 구축 사업',
      startedAt: '2020-04',
      endedAt: '2020-11',
      where: 'LG CNS',
      descriptions: [
        {
          content: '하이퍼레저 패브릭 기반 멀티 노드 블록체인 시스템 구축',
          descriptions: [
            { content: 'Raft 합의 알고리즘을 통한 KZ대비 서버 사용량 및 구축 복잡도 감소' },
            { content: '하이퍼레저 패브릭 호출용 nGrinder 스크립트 작성 및 TPS 측정' },
            {
              content:
                '패브릭 설정 변경을 통한 전체 노드 커밋시점 TPS 성능 수치 증가 (W: +200TPS, R: +400TPS',
            },
            { content: '피어노드 별 Service discovery 정책 구성 및 API 호출 부하 감소' },
          ],
        },
        {
          content: '공공클라우드 기반 노드 인프라 구성',
          descriptions: [
            { content: '폐쇄망 내 Docker, 하이퍼레저 패브릭, MariaDB 등의 시스템 구성' },
            { content: '서버 별 효율적인 로그 관리를 위한 logrotate 적용' },
            {
              content:
                '서버 장애 시 자동으로 블록체인 시스템 동작여부를 체크해서 복구해주는 스크립트 적용',
            },
          ],
        },
      ],
    },
    {
      title: '한국은행 분산원장기술 기반 증권대금동시결제 PoC',
      startedAt: '2020-01',
      endedAt: '2020-03',
      where: 'LG CNS',
      descriptions: [
        { content: '하이퍼레저 패브릭 기반 블록체인 시스템 구축' },
        {
          content: '클라우드 벤더 변경에 따른 블록체인 시스템 이관',
          descriptions: [{ content: '컨테이너 기반의 블록체인 노드, 체인코드 이미지화 후 재배포' }],
        },
      ],
    },
    {
      title: '전남도청 블록체인 기반 친환경 농산물 유통 플랫폼 및 서비스 구축',
      startedAt: '2019-08',
      endedAt: '2019-12',
      where: 'LG CNS',
      descriptions: [
        {
          content: '농산물 유통 업무 체인코드 개발',
          descriptions: [
            {
              content:
                'go언어 기반 체인코드 내 다건 배치 데이터(일별 최대 90000건 이상) 처리 기능 구현',
            },
            { content: '체인코드 검증 및 테스트용 어플리케이션 개발을 통한 TDD 적용' },
          ],
        },
      ],
    },
    {
      title: '블록체인 기반 유플러스 분실/파손보험 보상 시스템 구축',
      startedAt: '2018-10',
      endedAt: '2019-07',
      where: 'LG CNS',
      descriptions: [
        { content: '파손 보험 청구 업무 체인코드 개발' },
        { content: 'go언어 기반 체인코드 공통 함수 모듈 개발을 통한 코드 리팩토링' },
      ],
    },
    {
      title: '넌어드레스 장비에서의 동적 암호화 기술 개발',
      startedAt: '2016-11',
      endedAt: '2017-07',
      where: 'Ever More Security',
      descriptions: [
        {
          content: '넌어드레스(Non-addressable) 기반 통신 장비 소프트웨어 개발',
          descriptions: [
            { content: '세션 별 동적 암호키 생성 기술 개발 및 특허 작성' },
            { content: '장비 간 인증 확인을 위한 {key,value} 형태의 별도 라우팅 테이블 구성' },
            { content: '다양한 리눅스 벤더에서 동작할 수 있도록 시스템 커널 수정' },
          ],
        },
      ],
    },
    {
      title: '분산 시스템 미들웨어 연구 및 개발',
      startedAt: '2014-03',
      endedAt: '2016-01',
      where: 'Mobile Distributed Computing Lab: Chungnam National University',
      descriptions: [
        { content: '세션 별 독립적 암호키 생성을 위한 동적 키 교환 시스템 개발 및 논문 작성' },
        { content: 'AES 암호 키 길이 변화에 따른 넌어드레스 장비의 성능 측정 및 비교 논문 작성' },
        {
          content: 'DDS 모니터링 도구 성능 향상을 위한 다방향 리스닝 구조 연구 및 논문 작성 참여',
          descriptions: [
            { content: 'A full-duplex listening structure for network and application monitoring' },
          ],
        },
        {
          content: 'DDS 시뮬레이션을 위한 도구 개발 및 논문 작성 참여',
          descriptions: [{ content: 'A Performance Simulator for DDS Network' }],
        },
      ],
    },

    // {
    //   title: 'Lorem ipsum Project',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   where: 'Bar Co., LTD.',
    //   descriptions: [
    //     { content: 'Hello Everyone' },
    //     {
    //       content: 'Launched Bar Service in 2018',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
    //         {
    //           content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default project;
