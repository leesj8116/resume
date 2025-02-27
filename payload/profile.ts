import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
// import { faBlogger, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlogger, faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: 'Seungjoo Lee',
    small: '',
  },
  contact: [
    {
      title: 'leesj8115@naver.com',
      link: 'mailto:leesj8115@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github',
      link: 'https://github.com/leesj8116',
      icon: faGithub,
    },
    // {
    //   title: 'LinkedIn',
    //   link: 'https://www.linkedin.com/in/wonjoon/',
    //   icon: faLinkedin,
    // },
    {
      title: 'Blog',
      // link: 'https://hyeonseokhan.github.io',
      link: 'https://solu8115.tistory.com/',
      icon: faBlogger,
    },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: 'Open to new opportunities and challenges 🧑🏻‍💻',
    icon: faBell,
  },
};

export default profile;
