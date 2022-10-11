import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt, author } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '블록체인을 이용한 기술 중, 탈중앙화 신원 증명(Decentralized Identity, DID)을 기반 솔루션의 개발팀으로 합류하여 업무를 경험했습니다.',
    '주로 Spring Boot를 이용한 RESTful API 백엔드 개발을 담당하였으나 업무의 영역을 가리지 않고 사업 진행에 있어 발생하는 문제를 고민하고 해결하는 것을 좋아합니다.',
    '최근에는 Node.js 기반의 기술 중 React에 관심이 있습니다.',
  ],
  sign: author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
