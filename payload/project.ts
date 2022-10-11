import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '국민연금공단 블록체인 기반 해외 수급권 확인 시스템 구축사업',
      startedAt: '2022-03',
      where: '드림시큐리티',
      descriptions: [
        {
          content: '수급권 서비스 유지보수 및 추가 기능 개발',
        },
        {
          content: 'OS, DB의 취약점 항목에 대한 대응 작업 진행',
        },
      ],
    },
    {
      title: 'MagicDID 솔루션 GS 인증 취득',
      startedAt: '2022-04',
      endedAt: '2022-06',
      where: '드림시큐리티',
      descriptions: [
        {
          content: '자사 DID 솔루션의 GS 인증 취득 진행',
        },
        {
          content: '1차 대응 인원으로서, TTA취약점 리포트에 따른 대응 및 배포 진행',
        },
      ],
    },
  ],
};

export default project;
