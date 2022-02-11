export interface ChatData {
  userId: string;
  userName: string;
  profileImage: string;
  content: string[];
  date: string;
}

export const chatData: ChatData[] = [
  {
    userId: '1',
    userName: '김종국',
    profileImage: 'https://www.youthdaily.co.kr/data/photos/20220206/art_16444852273702_4e41c2.jpg',
    content: ['여러분 운동을 합시다! 오래오래 살아야죠'],
    date: '2022-02-10 23:30:50',
  },
  {
    userId: '2',
    userName: '유재석',
    profileImage:
      'https://mimgnews.pstatic.net/image/144/2021/11/16/0000774696_001_20211116114302231.jpg?type=w540',
    content: ['김종국 쟤는 너무 과해.. '],
    date: '2022-02-10 23:50:23',
  },
  {
    userId: '3',
    userName: '이광수',
    profileImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjZfMTc4%2FMDAxNjA4OTg5NTI0MTQ2.gQd-eOs60T2JoHU4CftbE-2UE_6_hZNu9C2DCspgsLsg.CRp4r4FkEDQofwL6ctr0tcd69-xzSkN7mnlzwEtzp5cg.JPEG.cji1020a%2F20140619212024421_99_20140619212101.jpg&type=sc960_832',
    content: ['재석이 형 형이 참으세요.. 저 형 저러다가 진짜 병나는 거 아니야?'],
    date: '2022-02-10 23:55:12',
  },
  {
    userId: '1',
    userName: '김종국',
    profileImage: 'https://www.youthdaily.co.kr/data/photos/20220206/art_16444852273702_4e41c2.jpg',
    content: ['광수야 너 그러다 큰일나'],
    date: '2022-02-10 24:00:50',
  },
  {
    userId: '3',
    userName: '이광수',
    profileImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjZfMTc4%2FMDAxNjA4OTg5NTI0MTQ2.gQd-eOs60T2JoHU4CftbE-2UE_6_hZNu9C2DCspgsLsg.CRp4r4FkEDQofwL6ctr0tcd69-xzSkN7mnlzwEtzp5cg.JPEG.cji1020a%2F20140619212024421_99_20140619212101.jpg&type=sc960_832',
    content: ['저는 개나리 가나리 오나리'],
    date: '2022-02-10 24:55:12',
  },
];
