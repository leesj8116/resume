import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '세션 별 독립적 암호 키 생성을 위한 동적 키 교환 시스템',
      subTitle: '석사학위논문',
      at: '2017-12',
      descriptions: [
        {
          content:
            '3-way handshaking 세션 구성 단계에 키 교환방식을 적용한 세션 별 독립적인 암호키 생성 구조 제안',
        },
        {
          content: 'Paper:',
          postHref: 'http://www.riss.kr/link?id=T14771241',
        },
      ],
    },
    {
      title: 'AES 암호 방식에서의 암호 키 길이 변화에 따른 넌어드레스 장비의 성능 측정 및 비교',
      subTitle: '학회논문 - 주저자',
      at: '2017-11',
      descriptions: [
        {
          content:
            '넌어드레스 장비에서의 AES 키 길이 변화에 따른 데이터 암복호화 성능 개선 방안 제안',
        },
        {
          content: 'Paper:',
          postHref: 'https://www.koreascience.or.kr/article/CFKO201735553776135.pdf',
        },
      ],
    },
    {
      title: 'A Performance Simulator for DDS Network',
      subTitle: 'IEEE - 참여저자',
      at: '2015-01',
      descriptions: [
        {
          content:
            'Develope simulator on QualNet for performance evaluation of the DDS and verify performances',
        },
        {
          content: 'Paper:',
          postHref: 'https://ieeexplore.ieee.org/document/7057868',
        },
      ],
    },
    {
      title: 'A full-duplex listening structure for network and application monitoring',
      subTitle: 'IEEE - 참여저자',
      at: '2014-11',
      descriptions: [
        {
          content:
            'Propose a programming pattern that functions as a full-duplex listening structure, and apply it to implement tools for DDS monitoring and analysis',
        },
        {
          content: 'Paper:',
          postHref: 'https://ieeexplore.ieee.org/document/7028691',
        },
      ],
    },
  ],
};

export default presentation;
