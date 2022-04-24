import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Have various experience in security, cryptographic and blockchain. Interested in developing a user-friendly service platform and token economy by digital currency.',
    '',
    '보안, 암호학 및 블록체인까지 다양한 경험을 갖고 있습니다. 사용자 중심의 서비스 플랫폼 개발에 관심이 있으며, 최근에는 디지털화폐를 이용한 토큰 이코노미의 변화, 특히 증권형 토큰(ST)에 가장 관심이 많습니다.',
  ],
  sign: 'Wonjoon Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
