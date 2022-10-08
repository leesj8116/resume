import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: true,

  list: [
    {
      title: 'Dynamic key exchange system for independent cryptographic key generation per session',
      subTitle: "Master's thesis",
      at: '2017-12',
      descriptions: [
        {
          content: 'Korean: 세션 별 독립적 암호 키 생성을 위한 동적 키 교환 시스템',
        },
        {
          content:
            'Proposal of an independent encryption key generation structure for each session applying the key exchange method to the 3-way handshaking session configuration step',
        },
        {
          content: 'Paper:',
          postHref: 'http://www.riss.kr/link?id=T14771241',
        },
      ],
    },
  ],
};

export default presentation;
