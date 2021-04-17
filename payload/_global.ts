import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Wonjoon Lee - Resume page';
const description = '차곡차곡 적어보는 나의 이력서 - by Wonjoon Lee.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Wonjoon',
        lastName: 'Lee',
        username: '월리',
        gender: 'Male',
      },
    },
  },
};
