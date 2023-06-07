import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'SeungJoo Lee - Resume page';
const description = '주어진 일을 책임지고 수행하는 주니어';

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
          alt: 'Profile.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'SeungJoo',
        lastName: 'Lee',
        username: 'Solu',
        gender: 'Male',
      },
    },
  },
};
