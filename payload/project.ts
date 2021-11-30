import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'NFT marketplace system prototyping',
      startedAt: '2021-08',
      endedAt: '2021-11',
      where: 'LG CNS',
      descriptions: [
        { content: '블록체인 신기술 프로토타이핑 - NFT 마켓플레이스' },
        { content: 'Construct Ethereum private network based on PoW using geth and truffle' }, 
        {
          content: 'Develop Ethereum client application calling smart contract using Web3j',
          descriptions: [
            { content: 'Using class wrapper to adjust smart contract to Java' },
            { content: 'Adjust 0xProtocol to Java without class wrapper to avoid internal problem by ABIEncoderV2' },
            { content: 'Develop smart contract using solidity to exchange different types of tokens seperately' },
            { content: 'Develop RESTful API to communicate with web3j' },
          ],
        },
        { content: 'Develop marketplace prototype application using react' },
      ],
    },
    {
      title: 'Central bank digital currency pilot system consulting',
      startedAt: '2020-12',
      endedAt: '2021-03',
      where: 'LG CNS',
      descriptions: [
        { content: '한국은행 CBDC 파일럿 컨설팅 사업' },
        {
          content:
            'Analysis Bank of Korea business and propose blockchain data structure and system',
        },
      ],
    },
    {
      title: 'Blockchain-based food safety data platform construction business',
      startedAt: '2020-04',
      endedAt: '2020-11',
      where: 'LG CNS',
      descriptions: [
        { content: '블록체인 기반 식품안전 데이터플랫폼 구축 사업' },
        {
          content: 'Construct Hyperledger Fabric-based multi-node blockchain system',
          descriptions: [
            {
              content:
                'Reduced server usage and construction complexity compared to Kafka-Zookeeper through Raft consensus algorithm',
            },
            { content: 'Measure and Optimize TPS using nGrinder' },
            {
              content:
                'Configure service discovery policies for each peer node and reduce API call load',
            },
          ],
        },
        { content: 'System configuration in an environment without internet (public cloud)' },
        {
          content:
            'Application of a script that automatically checks blockchain server failure and restores it',
        },
      ],
    },
    {
      title: 'Distributed Ledger Technology-based Simultaneous Securities Payment (PoC)',
      startedAt: '2020-01',
      endedAt: '2020-03',
      where: 'LG CNS',
      descriptions: [
        { content: '한국은행 분산원장기술 기반 증권대금동시결제 PoC' },
        { content: 'Construct Hyperledger Fabric-based blockchain system' },
        {
          content: 'Transfer of blockchain system according to cloud vendor change',
          descriptions: [
            { content: 'Re-distribute blockchain node and chaincode using docker image' },
          ],
        },
      ],
    },
    {
      title:
        'Jeollanam-do Provincial Government Blockchain-based Eco-Friendly Agricultural Products Distribution Platform and Service Construction',
      startedAt: '2019-08',
      endedAt: '2019-12',
      where: 'LG CNS',
      descriptions: [
        { content: '전남도청 블록체인 기반 친환경 농산물 유통 플랫폼 및 서비스 구축' },
        {
          content:
            'Develop Agricultural product distribution business Smart contract in Hyperledger fabric',
          descriptions: [
            {
              content:
                'Implementation of multiple batch data (up to 90,000 cases per day) processing function (Golang)',
            },
          ],
        },
      ],
    },
    {
      title: 'Blockchain-based LG U+ Loss/Damage Compensation System Construction',
      startedAt: '2018-10',
      endedAt: '2019-07',
      where: 'LG CNS',
      descriptions: [
        { content: '블록체인 기반 유플러스 분실/파손보험 보상 시스템 구축' },
        { content: 'Develop damaged-compensation chaincode system ' },
        { content: 'Code refactoring through chaincode common function module development' },
      ],
    },
    {
      title: 'Development of dynamic encryption technology in non-address equipment',
      startedAt: '2016-11',
      endedAt: '2017-07',
      where: 'Ever More Security',
      descriptions: [
        {
          content: 'Develop Non-addressable communication equipment software',
          descriptions: [
            {
              content:
                'Developed and patented dynamic encryption key generation technology for each session',
            },
            {
              content:
                'Configure a separate routing table in the form of {key,value} to check authentication between devices',
            },
            { content: 'Modifying the system kernel to work with various Linux vendors' },
          ],
        },
      ],
    },
    {
      title: 'Develop and Research Distributed system middleware',
      startedAt: '2014-03',
      endedAt: '2016-01',
      where: 'Mobile Distributed Computing Lab: Chungnam National University',
      descriptions: [
        {
          content: 'Research and Development',
          descriptions: [
            {
              content:
                'Participate in multi-directional listening structure research to improve DDS monitoring tool performance',
            },
            { content: 'Participate in Developing tools for DDS simulation' },
          ],
        },
        {
          content: 'Papers',
          descriptions: [
            {
              content:
                'Dynamic key exchange system for independent cryptographic key generation per session (2017)',
            },
            {
              content:
                'Performance comparison by key length of AES encryption using Non-Addressable Data Protection Devices (2017)',
            },
            { content: 'A Performance Simulator for DDS Network (2015)' },
            {
              content:
                'A full-duplex listening structure for network and application monitoring (2014)',
            },
          ],
        },
      ],
    },

    // {
    //   title: 'Lorem ipsum Project',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   where: 'Bar Co., LTD.',
    //   descriptions: [
    //     { content: 'Hello Everyone' },
    //     {
    //       content: 'Launched Bar Service in 2018',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
    //         {
    //           content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default project;
