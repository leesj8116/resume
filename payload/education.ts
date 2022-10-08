import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '고려사이버대학교',
      subTitle: '학사, 소프트웨어공학',
      startedAt: '2021-08',
    },
    {
      title: '혜전대학',
      subTitle: '전문학사, 호텔조리과 서양식전공',
      startedAt: '2011-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
