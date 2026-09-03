//영화
//어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마를 프라다를 입크는다2, 마이클, 슈퍼마리오 갤럭시,프로젝트 헤일메리, 폭풍의 언덕
const moviesDB = [
    {
        id: 1,
        title: '어벤져스',
        date: '2026-12-18',
        poster: 'poster/poster_avengersdoomsday.jpg',
        plot: '지구를 위협하는 강력한 적에 맞서기 위해 사상 최강의 슈퍼히어로들이 다시 한번 힘을 합친다.',
        cast: ['로버트 다우니 주니어', '크리스 에반스', '크리스 헴스워스', '마크 러팔로'],
        rating: 9.2,
        director: '루소 형제',
        genre: ['액션', 'SF', '모험']
    },
    {
        id: 2,
        title: '스파이더맨',
        date: '2026-07-15',
        poster: 'poster/poster_spidermanbrandnewday.jpg',
        plot: '정체를 숨긴 채 평범한 고등학생으로 살아가던 피터 파커가 새로운 위기에 직면하며 벌어지는 이야기.',
        cast: ['톰 홀랜드', '젠데이아', '베네딕트 컴버배치'],
        rating: 8.9,
        director: '존 왓츠',
        genre: ['액션', 'SF', '어드벤처']
    },
    {
        id: 3,
        title: '오디세이',
        date: '2026-05-20',
        poster: 'poster/poster_theodyssey.jpg',
        plot: '광활한 우주를 항해하던 탐사선이 미지의 행성에 조우하면서 벌어지는 서사적 모험.',
        cast: ['라이언 고슬링', '아나 데 아르마스'],
        rating: 8.7,
        director: '드니 빌뇌브',
        genre: ['SF', '드라마', '모험']
    },
    {
        id: 4,
        title: '토이스토리5',
        date: '2026-06-19',
        poster: 'poster/poster_toystory5.jpg',
        plot: '장난감 마을에 새롭게 불어닥친 디지털 장난감들의 공세 속에서 우디와 버즈가 친구들을 지키기 위한 모험을 떠난다.',
        cast: ['톰 행크스', '팀 알렌'],
        rating: 9.0,
        director: '앤드류 스탠튼',
        genre: ['애니메이션', '코미디', '모험']
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다2',
        date: '2026-11-04',
        poster: 'poster/poster_thedevilwearsprada2.jpg',
        plot: '패션계의 여왕 미란다 프리슬리와 앤디가 변화한 미디어 환경 속에서 다시 재회하며 벌어지는 치열한 패션 비즈니스 세계.',
        cast: ['메릴 스트립', '앤 하서웨이', '에밀리 블런트'],
        rating: 8.5,
        director: '데이빗 프랭켈',
        genre: ['코미디', '드라마']
    },
    {
        id: 6,
        title: '마이클',
        date: '2026-04-18',
        poster: 'poster/poster_michael.jpg',
        plot: '팝의 황제 마이클 잭슨의 극적인 삶과 음악 세계, 그리고 무대 뒤편의 숨겨진 이야기를 그린 전기 영화.',
        cast: ['자파르 잭슨', '콜마 산도밍고'],
        rating: 9.1,
        director: '안톤 푸쿠아',
        genre: ['전기', '드라마', '음악']
    },
    {
        id: 7,
        title: '슈퍼마리오 갤럭시',
        date: '2026-12-25',
        poster: 'poster/poster_thesupermariogalaxymovie.jpg',
        plot: '우주로 확장된 버섯 왕국을 구하기 위해 마리오와 루이지가 은하계를 가로지르는 대모험을 시작한다.',
        cast: ['크리스 프랫', '안야 테일러 조이', '찰리 데이'],
        rating: 8.8,
        director: '아론 호바스',
        genre: ['애니메이션', '모험', '판타지']
    },
    {
        id: 8,
        title: '프로젝트 헤일메리',
        date: '2026-03-30',
        poster: 'poster/poster_projecthailmary.jpg',
        plot: '기억을 잃은 채 홀로 우주선에서 깨어난 과학자가 인류를 구하기 위해 홀로 외계 우주를 항해하며 문제를 해결해 나가는 SF 대작.',
        cast: ['라이언 고슬링', '산드라 ㅡ러'],
        rating: 9.4,
        director: '필 로드, 크리스 밀러',
        genre: ['SF', '모험', '드라마']
    },
    {
        id: 9,
        title: '폭풍의 언덕',
        date: '2026-10-10',
        poster: 'poster/poster_wutheringheights.jpg',
        plot: '요크셔의 거친 황야를 배경으로 펼쳐지는 사랑과 복수, 그리고 파멸적인 인간 감정의 서사.',
        cast: ['마고 로비', '제이콥 엘로디'],
        rating: 8.6,
        director: '에머랄드 펜넬',
        genre: ['로맨스', '드라마', '고전']
    }
];

