import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Hyeonseok Han - Resume page';
const description = '걸어온 길을 믿고 나아가는 나의 발자취';

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
        firstName: 'Hyeonseok',
        lastName: 'Han',
        username: 'Toycode',
        gender: 'Male',
      },
    },
  },
};
