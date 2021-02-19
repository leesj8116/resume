import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '베이스기타와 재즈를 좋아하는 3년차 백엔드 개발자이며, 현재는 프라이빗 블록체인 개발자로 일하고 있습니다.',
    '다수의 사용자가 사용하는 대량 서비스 솔루션 개발에 관심이 있으며, 업무를 단순화 시키고 자동화하는 일을 좋아합니다.',
    '모놀리틱보다는 마이크로틱한 구조를 좋아하고, 개발과 단위테스트는 절대 떼놓을 수 없는 사이라고 생각하고 있습니다.',
    '최근에는 클라우드, 데브옵스, k8s와 같이 분산된 환경에서의 효율적인 확장성에 관심을 갖고 있으며, go routine의 매력에 빠져있습니다.'
  ],
  sign: 'Wonjoon Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
