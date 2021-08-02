import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'LG CNS',
      position: 'Blockchain Software Engineer',
      startedAt: '2018-07',
      descriptions: [
        'Construct and configure Hyperledger fabric-based blockchain system',
        'Apply various consensus algorithms (Raft, Kafka-zookeeper)',
        'Test and optimize chaincode performance (nGrinder)',
        'Construct node monitoring system (ELK, Prometheus)',
        'Develop Hyperledger fabric-based smart contract',
        'Develop API application for smart contract transaction call',
        'Design and implement smart contract logic for efficient processing of large amounts of data',
      ],
      skillKeywords: ['Blockchain', 'Hyperledger Fabric', 'Docker', 'Golang', 'Java'],
    },
    {
      title: 'Ever More Security',
      position: 'Software Engineer',
      startedAt: '2016-01',
      endedAt: '2018-03',
      descriptions: [
        'Develop internal systems of security equipment called NADP(Non-Addressable Data Protection) that do not have IP or other accounts',
        'Develop a real-time key exchange system between communication sessions using Netfilter and iptables-based packet capture system',
        'Apply for a patent of real-time key exchange mechanism',
      ],
      skillKeywords: ['Packet forwarding', 'Key exchange', 'Cryptographic', 'C'],
    },
  ],
};

export default experience;
