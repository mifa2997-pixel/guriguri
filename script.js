const restaurants = [
  {
    "id": 1,
    "name": "잉꼬칼국수",
    "source": "기존 목록",
    "address": "체육관로171번길 11-4, 2층",
    "phone": "031-564-3354",
    "menu": "칼국수 12,000원 내외",
    "description": "굵은 면발과 매운 김치",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9E%89%EA%BC%AC%EC%B9%BC%EA%B5%AD%EC%88%98",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9E%89%EA%BC%AC%EC%B9%BC%EA%B5%AD%EC%88%98"
    ]
  },
  {
    "id": 2,
    "name": "토평메주콩",
    "source": "기존 목록",
    "address": "벌말로 77",
    "phone": "031-555-7906",
    "menu": "청국장·고등어·불고기 정식 / 가격 미확인",
    "description": "나물과 반찬을 곁들인 한식",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%ED%86%A0%ED%8F%89%EB%A9%94%EC%A3%BC%EC%BD%A9",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%ED%86%A0%ED%8F%89%EB%A9%94%EC%A3%BC%EC%BD%A9"
    ]
  },
  {
    "id": 3,
    "name": "시골식당",
    "source": "기존 목록",
    "address": "수택동 522-24",
    "phone": "031-551-1113",
    "menu": "동태탕 / 가격 미확인",
    "description": "얼큰한 국물 요리",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%8B%9C%EA%B3%A8%EC%8B%9D%EB%8B%B9",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%8B%9C%EA%B3%A8%EC%8B%9D%EB%8B%B9"
    ]
  },
  {
    "id": 4,
    "name": "미성식당",
    "source": "기존 목록",
    "address": "체육관로172번길 38",
    "phone": "031-563-8832",
    "menu": "부대찌개 약 11,000원",
    "description": "마늘 향과 백김치",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%AF%B8%EC%84%B1%EC%8B%9D%EB%8B%B9",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%AF%B8%EC%84%B1%EC%8B%9D%EB%8B%B9"
    ]
  },
  {
    "id": 5,
    "name": "동갈전",
    "source": "기존 목록",
    "address": "아차산로 411",
    "phone": "031-554-2969",
    "menu": "북엇국 8,000원 / 동갈전 13,000원",
    "description": "북엇국과 동태전",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%8F%99%EA%B0%88%EC%A0%84",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%8F%99%EA%B0%88%EC%A0%84"
    ]
  },
  {
    "id": 6,
    "name": "정성가득",
    "source": "기존 목록",
    "address": "갈매순환로204번길 22",
    "phone": "0507-1422-3535",
    "menu": "장칼국수 / 가격 미확인",
    "description": "얼큰한 칼국수",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%A0%95%EC%84%B1%EA%B0%80%EB%93%9D",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%A0%95%EC%84%B1%EA%B0%80%EB%93%9D"
    ]
  },
  {
    "id": 7,
    "name": "두메골",
    "source": "기존 목록",
    "address": "동구릉로 335",
    "phone": "031-573-5558",
    "menu": "두메 한정식 / 가격 미확인",
    "description": "가족 식사 한정식",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%91%90%EB%A9%94%EA%B3%A8",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%91%90%EB%A9%94%EA%B3%A8"
    ]
  },
  {
    "id": 8,
    "name": "송가네두부촌",
    "source": "직접 추천",
    "address": "아차산로405번길 31",
    "phone": "031-552-7771",
    "menu": "비지·순두부찌개 각 10,000원",
    "description": "손두부와 집밥",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%86%A1%EA%B0%80%EB%84%A4%EB%91%90%EB%B6%80%EC%B4%8C",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%86%A1%EA%B0%80%EB%84%A4%EB%91%90%EB%B6%80%EC%B4%8C"
    ]
  },
  {
    "id": 9,
    "name": "옛날보리밥집 뷔페",
    "source": "직접 추천",
    "address": "벌말로 102-2, 1층",
    "phone": "미확인",
    "menu": "두부찌개 / 가격 미확인",
    "description": "직접 추천한 한식뷔페",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%98%9B%EB%82%A0%EB%B3%B4%EB%A6%AC%EB%B0%A5%EC%A7%91%20%EB%B7%94%ED%8E%98",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%98%9B%EB%82%A0%EB%B3%B4%EB%A6%AC%EB%B0%A5%EC%A7%91%20%EB%B7%94%ED%8E%98"
    ]
  },
  {
    "id": 10,
    "name": "메밀랑",
    "source": "2025 와구리",
    "address": "아차산로 463",
    "phone": "031-554-7080",
    "menu": "비빔막국수 / 가격 미확인",
    "description": "메밀면과 양념",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%A9%94%EB%B0%80%EB%9E%91",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%A9%94%EB%B0%80%EB%9E%91"
    ]
  },
  {
    "id": 11,
    "name": "길목감자탕",
    "source": "2026 와구리",
    "address": "아차산로 379",
    "phone": "0507-1477-5709",
    "menu": "원조 감자탕 / 가격 미확인",
    "description": "감자탕 전문",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EA%B8%B8%EB%AA%A9%EA%B0%90%EC%9E%90%ED%83%95",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EA%B8%B8%EB%AA%A9%EA%B0%90%EC%9E%90%ED%83%95"
    ]
  },
  {
    "id": 12,
    "name": "오씨네 냉면만두",
    "source": "2026 와구리",
    "address": "장자대로13번길 53-30",
    "phone": "031-563-1882",
    "menu": "물냉면 / 가격 미확인",
    "description": "냉면과 만두",
    "category": "한식 · 밥상·탕·면",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%98%A4%EC%94%A8%EB%84%A4%20%EB%83%89%EB%A9%B4%EB%A7%8C%EB%91%90",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%98%A4%EC%94%A8%EB%84%A4%20%EB%83%89%EB%A9%B4%EB%A7%8C%EB%91%90"
    ]
  },
  {
    "id": 13,
    "name": "돌다리보쌈칼국수",
    "source": "기존 목록",
    "address": "수택동 417-6",
    "phone": "031-557-9119",
    "menu": "굴·오징어보쌈 각 25,000원 / 칼국수 10,000원",
    "description": "보쌈과 전골칼국수",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%8F%8C%EB%8B%A4%EB%A6%AC%EB%B3%B4%EC%8C%88%EC%B9%BC%EA%B5%AD%EC%88%98",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%8F%8C%EB%8B%A4%EB%A6%AC%EB%B3%B4%EC%8C%88%EC%B9%BC%EA%B5%AD%EC%88%98"
    ]
  },
  {
    "id": 14,
    "name": "유박사곱창",
    "source": "기존 목록",
    "address": "안골로103번길 56",
    "phone": "031-568-0320",
    "menu": "알곱창 약 15,000원",
    "description": "매콤한 돼지곱창 볶음",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9C%A0%EB%B0%95%EC%82%AC%EA%B3%B1%EC%B0%BD",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9C%A0%EB%B0%95%EC%82%AC%EA%B3%B1%EC%B0%BD"
    ]
  },
  {
    "id": 15,
    "name": "대용식당",
    "source": "기존 목록",
    "address": "수택동 429-2",
    "phone": "미확인",
    "menu": "수구레전골·무침 / 가격 미확인",
    "description": "독특한 수구레 요리",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%8C%80%EC%9A%A9%EC%8B%9D%EB%8B%B9",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%8C%80%EC%9A%A9%EC%8B%9D%EB%8B%B9"
    ]
  },
  {
    "id": 16,
    "name": "단양돼지촌",
    "source": "기존 목록",
    "address": "안골로57번길 11",
    "phone": "031-551-2740",
    "menu": "참숯 돼지고기구이 / 가격 미확인",
    "description": "숯불구이 골목식당",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%8B%A8%EC%96%91%EB%8F%BC%EC%A7%80%EC%B4%8C",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%8B%A8%EC%96%91%EB%8F%BC%EC%A7%80%EC%B4%8C"
    ]
  },
  {
    "id": 17,
    "name": "토평소곱창",
    "source": "기존 목록",
    "address": "토평동 971",
    "phone": "031-556-7373",
    "menu": "소곱창·대창 / 가격 미확인",
    "description": "소곱창 구이",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%ED%86%A0%ED%8F%89%EC%86%8C%EA%B3%B1%EC%B0%BD",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%ED%86%A0%ED%8F%89%EC%86%8C%EA%B3%B1%EC%B0%BD"
    ]
  },
  {
    "id": 18,
    "name": "통 본점",
    "source": "기존 목록",
    "address": "벌말로147번길 29",
    "phone": "031-566-8604",
    "menu": "돼지고기구이 / 가격 미확인",
    "description": "토평동 고깃집",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%ED%86%B5%20%EB%B3%B8%EC%A0%90",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%ED%86%B5%20%EB%B3%B8%EC%A0%90"
    ]
  },
  {
    "id": 19,
    "name": "우미관",
    "source": "직접 추천",
    "address": "아차산로 293, 1층",
    "phone": "0507-1419-2848",
    "menu": "장어정식 39,000원 / 특 덮밥 36,000원",
    "description": "민물장어 구이와 덮밥",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9A%B0%EB%AF%B8%EA%B4%80",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9A%B0%EB%AF%B8%EA%B4%80"
    ]
  },
  {
    "id": 20,
    "name": "일석한우",
    "source": "직접 추천",
    "address": "아차산로 45, 1층",
    "phone": "0507-1410-4955",
    "menu": "모둠 99,000원~ / 꽃등심 42,000원~",
    "description": "다양한 한우 부위",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9D%BC%EC%84%9D%ED%95%9C%EC%9A%B0",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9D%BC%EC%84%9D%ED%95%9C%EC%9A%B0"
    ]
  },
  {
    "id": 21,
    "name": "고구려참숯구이",
    "source": "직접 추천",
    "address": "우미내길 6",
    "phone": "02-456-9788",
    "menu": "양념갈비 28,000원",
    "description": "참숯 고기구이",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EA%B3%A0%EA%B5%AC%EB%A0%A4%EC%B0%B8%EC%88%AF%EA%B5%AC%EC%9D%B4",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EA%B3%A0%EA%B5%AC%EB%A0%A4%EC%B0%B8%EC%88%AF%EA%B5%AC%EC%9D%B4"
    ]
  },
  {
    "id": 22,
    "name": "이선자연약초백숙 구리본점",
    "source": "직접 추천",
    "address": "건원대로99번길 23",
    "phone": "031-565-3345",
    "menu": "한방삼계탕 17,000원~ / 약초 19,000원~",
    "description": "약초 육수 백숙과 삼계탕",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9D%B4%EC%84%A0%EC%9E%90%EC%97%B0%EC%95%BD%EC%B4%88%EB%B0%B1%EC%88%99%20%EA%B5%AC%EB%A6%AC%EB%B3%B8%EC%A0%90",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9D%B4%EC%84%A0%EC%9E%90%EC%97%B0%EC%95%BD%EC%B4%88%EB%B0%B1%EC%88%99%20%EA%B5%AC%EB%A6%AC%EB%B3%B8%EC%A0%90"
    ]
  },
  {
    "id": 23,
    "name": "안스게장",
    "source": "2024 와구리",
    "address": "경춘북로 252",
    "phone": "031-575-7877",
    "menu": "간장·양념게장 / 가격 미확인",
    "description": "게장 한상",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%95%88%EC%8A%A4%EA%B2%8C%EC%9E%A5",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%95%88%EC%8A%A4%EA%B2%8C%EC%9E%A5"
    ]
  },
  {
    "id": 24,
    "name": "인창해물아구찜",
    "source": "2024 와구리",
    "address": "건원대로 44",
    "phone": "031-569-1114",
    "menu": "아구찜 / 가격 미확인",
    "description": "매콤한 해물찜",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9D%B8%EC%B0%BD%ED%95%B4%EB%AC%BC%EC%95%84%EA%B5%AC%EC%B0%9C",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9D%B8%EC%B0%BD%ED%95%B4%EB%AC%BC%EC%95%84%EA%B5%AC%EC%B0%9C"
    ]
  },
  {
    "id": 25,
    "name": "고목나무집",
    "source": "2025 와구리",
    "address": "안골로 12-1",
    "phone": "031-567-7000",
    "menu": "코다리찜 / 가격 미확인",
    "description": "코다리 요리",
    "category": "한식 · 고기·보양·해산물",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EA%B3%A0%EB%AA%A9%EB%82%98%EB%AC%B4%EC%A7%91",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EA%B3%A0%EB%AA%A9%EB%82%98%EB%AC%B4%EC%A7%91"
    ]
  },
  {
    "id": 26,
    "name": "차이나타운 (토평)",
    "source": "기존 목록",
    "address": "검배로 128",
    "phone": "031-553-1312",
    "menu": "짜장면·짬뽕·탕수육 / 가격 미확인",
    "description": "동네 중화요리",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%B0%A8%EC%9D%B4%EB%82%98%ED%83%80%EC%9A%B4%20%28%ED%86%A0%ED%8F%89%29",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%B0%A8%EC%9D%B4%EB%82%98%ED%83%80%EC%9A%B4%20%28%ED%86%A0%ED%8F%89%29"
    ]
  },
  {
    "id": 27,
    "name": "차이나타운본점",
    "source": "2025 와구리",
    "address": "안골로 46",
    "phone": "031-563-1006",
    "menu": "삼선짬뽕 / 가격 미확인",
    "description": "해물 짬뽕",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%B0%A8%EC%9D%B4%EB%82%98%ED%83%80%EC%9A%B4%EB%B3%B8%EC%A0%90",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%B0%A8%EC%9D%B4%EB%82%98%ED%83%80%EC%9A%B4%EB%B3%B8%EC%A0%90"
    ]
  },
  {
    "id": 28,
    "name": "북경대반점",
    "source": "2024 와구리",
    "address": "건원대로 45",
    "phone": "031-558-0700",
    "menu": "유린기 / 가격 미확인",
    "description": "튀긴 닭고기와 소스",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%B6%81%EA%B2%BD%EB%8C%80%EB%B0%98%EC%A0%90",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%B6%81%EA%B2%BD%EB%8C%80%EB%B0%98%EC%A0%90"
    ]
  },
  {
    "id": 29,
    "name": "연화산",
    "source": "2025 와구리",
    "address": "벌말로 76",
    "phone": "031-558-0998",
    "menu": "차돌짬뽕 / 가격 미확인",
    "description": "차돌박이 짬뽕",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%97%B0%ED%99%94%EC%82%B0",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%97%B0%ED%99%94%EC%82%B0"
    ]
  },
  {
    "id": 30,
    "name": "리하",
    "source": "2025 와구리",
    "address": "장자대로86번길 14-7, 2층",
    "phone": "0507-1423-6533",
    "menu": "숙주유린기 / 가격 미확인",
    "description": "숙주를 곁들인 닭요리",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%A6%AC%ED%95%98",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%A6%AC%ED%95%98"
    ]
  },
  {
    "id": 31,
    "name": "유래등",
    "source": "지도 검색",
    "address": "동구릉로 239",
    "phone": "031-551-7555",
    "menu": "전가복 등 중화요리 / 가격 미확인",
    "description": "오래된 중식당으로 소개됨",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9C%A0%EB%9E%98%EB%93%B1",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9C%A0%EB%9E%98%EB%93%B1"
    ]
  },
  {
    "id": 51,
    "name": "동구짬뽕",
    "source": "직접 추천",
    "address": "동구릉로148번길 24-34",
    "phone": "031-555-4883",
    "menu": "짬뽕 10,000원 / 짜장 8,000원 / 군만두 6,000원",
    "description": "불향과 진한 국물, 점심 대기 가능",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%8F%99%EA%B5%AC%EC%A7%AC%EB%BD%95",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%8F%99%EA%B5%AC%EC%A7%AC%EB%BD%95",
      "https://www.diningcode.com/profile.php?rid=A1z76fOgIXMP"
    ]
  },
  {
    "id": 52,
    "name": "대림각찐짬뽕",
    "source": "직접 추천",
    "address": "체육관로 169, 1층",
    "phone": "031-555-2211",
    "menu": "해물짬뽕 10,000원 / 볶음밥 7,000원",
    "description": "칼칼한 해물짬뽕과 중화요리",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%8C%80%EB%A6%BC%EA%B0%81%EC%B0%90%EC%A7%AC%EB%BD%95",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%8C%80%EB%A6%BC%EA%B0%81%EC%B0%90%EC%A7%AC%EB%BD%95",
      "https://www.diningcode.com/profile.php?rid=q9A6SlhLQ2PL"
    ]
  },
  {
    "id": 53,
    "name": "촉석루",
    "source": "직접 추천",
    "address": "검배로84번길 14",
    "phone": "031-562-0661",
    "menu": "간짜장・짬뽕 각 9,000원 / 탕수육(소) 20,000원",
    "description": "옛날식 탕수육과 간짜장",
    "category": "중식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%B4%89%EC%84%9D%EB%A3%A8",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%B4%89%EC%84%9D%EB%A3%A8",
      "https://www.diningcode.com/profile.php?rid=hGRviUCWn6f4"
    ]
  },
  {
    "id": 32,
    "name": "토평동대표",
    "source": "기존 목록",
    "address": "수택동 875-2",
    "phone": "010-3258-2028",
    "menu": "텐동·돈카츠·소바 / 가격 미확인",
    "description": "튀김 덮밥과 일식",
    "category": "일식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%ED%86%A0%ED%8F%89%EB%8F%99%EB%8C%80%ED%91%9C",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%ED%86%A0%ED%8F%89%EB%8F%99%EB%8C%80%ED%91%9C"
    ]
  },
  {
    "id": 33,
    "name": "만센",
    "source": "기존 목록",
    "address": "갈매중앙로 70, 1층",
    "phone": "0507-1426-9737",
    "menu": "VIP초밥 / 가격 미확인",
    "description": "초밥 전문점",
    "category": "일식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%A7%8C%EC%84%BC",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%A7%8C%EC%84%BC"
    ]
  },
  {
    "id": 34,
    "name": "우동 키노야",
    "source": "기존 목록",
    "address": "검배로 5",
    "phone": "010-4586-0701",
    "menu": "덴뿌라 붓카케우동 / 가격 미확인",
    "description": "튀김을 곁들인 우동",
    "category": "일식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9A%B0%EB%8F%99%20%ED%82%A4%EB%85%B8%EC%95%BC",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9A%B0%EB%8F%99%20%ED%82%A4%EB%85%B8%EC%95%BC"
    ]
  },
  {
    "id": 35,
    "name": "카츠엔쇼",
    "source": "직접 추천",
    "address": "경춘로175번길 30-9",
    "phone": "0508-9590-0807",
    "menu": "로스 13,000원~ / 히레 14,000원~",
    "description": "일본식 숙성 돈카츠",
    "category": "일식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%B9%B4%EC%B8%A0%EC%97%94%EC%87%BC",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%B9%B4%EC%B8%A0%EC%97%94%EC%87%BC"
    ]
  },
  {
    "id": 36,
    "name": "기꾸초밥",
    "source": "2025 와구리",
    "address": "경춘로 274",
    "phone": "0507-1314-0558",
    "menu": "도로초밥 / 가격 미확인",
    "description": "참치 뱃살 초밥",
    "category": "일식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EA%B8%B0%EA%BE%B8%EC%B4%88%EB%B0%A5",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EA%B8%B0%EA%BE%B8%EC%B4%88%EB%B0%A5"
    ]
  },
  {
    "id": 37,
    "name": "JOY 돈가츠",
    "source": "2025 와구리",
    "address": "벌말로147번길 39",
    "phone": "031-565-5525",
    "menu": "등심가츠 / 가격 미확인",
    "description": "등심 돈카츠",
    "category": "일식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20JOY%20%EB%8F%88%EA%B0%80%EC%B8%A0",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20JOY%20%EB%8F%88%EA%B0%80%EC%B8%A0"
    ]
  },
  {
    "id": 38,
    "name": "진품참치",
    "source": "2025 와구리",
    "address": "이문안로136번길 7, 111호",
    "phone": "0507-1419-3772",
    "menu": "참치모듬회 / 가격 미확인",
    "description": "참치회 전문",
    "category": "일식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%A7%84%ED%92%88%EC%B0%B8%EC%B9%98",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%A7%84%ED%92%88%EC%B0%B8%EC%B9%98"
    ]
  },
  {
    "id": 39,
    "name": "청량",
    "source": "지도 검색",
    "address": "갈매중앙로55번길 16-5",
    "phone": "031-529-9009",
    "menu": "초밥 코스 / 가격 미확인",
    "description": "한 점씩 제공하는 초밥",
    "category": "일식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%B2%AD%EB%9F%89",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%B2%AD%EB%9F%89"
    ]
  },
  {
    "id": 40,
    "name": "빈체로 갈매점",
    "source": "기존 목록",
    "address": "갈매중앙로 70, 204호",
    "phone": "031-571-1066",
    "menu": "파스타·피자·리조또 / 가격 미확인",
    "description": "캐주얼 이탈리안",
    "category": "양식·퓨전",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%B9%88%EC%B2%B4%EB%A1%9C%20%EA%B0%88%EB%A7%A4%EC%A0%90",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%B9%88%EC%B2%B4%EB%A1%9C%20%EA%B0%88%EB%A7%A4%EC%A0%90"
    ]
  },
  {
    "id": 41,
    "name": "구리 리틀파스타",
    "source": "기존 목록",
    "address": "건원대로 44, 211호",
    "phone": "0507-1421-3328",
    "menu": "뚝배기누룽지파스타 / 가격 미확인",
    "description": "한식과 양식의 조합",
    "category": "양식·퓨전",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EA%B5%AC%EB%A6%AC%20%EB%A6%AC%ED%8B%80%ED%8C%8C%EC%8A%A4%ED%83%80",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EA%B5%AC%EB%A6%AC%20%EB%A6%AC%ED%8B%80%ED%8C%8C%EC%8A%A4%ED%83%80"
    ]
  },
  {
    "id": 42,
    "name": "리미트",
    "source": "2024 와구리",
    "address": "갈매순환로204번길 8-68",
    "phone": "031-573-2506",
    "menu": "꽃게로제파스타 / 가격 미확인",
    "description": "꽃게와 로제소스",
    "category": "양식·퓨전",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EB%A6%AC%EB%AF%B8%ED%8A%B8",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EB%A6%AC%EB%AF%B8%ED%8A%B8"
    ]
  },
  {
    "id": 43,
    "name": "제이스쿠진",
    "source": "2024 와구리",
    "address": "갈매중앙로55번길 79",
    "phone": "031-529-0606",
    "menu": "갈릭쉬림프올리오 / 가격 미확인",
    "description": "마늘과 새우 오일파스타",
    "category": "양식·퓨전",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%A0%9C%EC%9D%B4%EC%8A%A4%EC%BF%A0%EC%A7%84",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%A0%9C%EC%9D%B4%EC%8A%A4%EC%BF%A0%EC%A7%84"
    ]
  },
  {
    "id": 44,
    "name": "파스타 아미고",
    "source": "2025 와구리",
    "address": "벌말로70번길 67",
    "phone": "031-562-4357",
    "menu": "빠네 / 가격 미확인",
    "description": "빵을 곁들인 파스타",
    "category": "양식·퓨전",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%ED%8C%8C%EC%8A%A4%ED%83%80%20%EC%95%84%EB%AF%B8%EA%B3%A0",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%ED%8C%8C%EC%8A%A4%ED%83%80%20%EC%95%84%EB%AF%B8%EA%B3%A0"
    ]
  },
  {
    "id": 45,
    "name": "일리에또",
    "source": "2026 와구리",
    "address": "장자대로86번길 38",
    "phone": "031-569-1212",
    "menu": "빠네 / 가격 미확인",
    "description": "빵 파스타",
    "category": "양식·퓨전",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%9D%BC%EB%A6%AC%EC%97%90%EB%98%90",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%9D%BC%EB%A6%AC%EC%97%90%EB%98%90"
    ]
  },
  {
    "id": 46,
    "name": "팔레그린",
    "source": "2025 와구리",
    "address": "건원대로99번길 99",
    "phone": "0507-1403-2484",
    "menu": "아보카도샌드위치 / 가격 미확인",
    "description": "샌드위치 식사",
    "category": "양식·퓨전",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%ED%8C%94%EB%A0%88%EA%B7%B8%EB%A6%B0",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%ED%8C%94%EB%A0%88%EA%B7%B8%EB%A6%B0"
    ]
  },
  {
    "id": 47,
    "name": "사이공빌리지",
    "source": "기존 목록",
    "address": "수택동 423-18",
    "phone": "031-516-5226",
    "menu": "베트남 쌀국수 / 가격 미확인",
    "description": "시장 골목 베트남 음식",
    "category": "세계음식·분식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%82%AC%EC%9D%B4%EA%B3%B5%EB%B9%8C%EB%A6%AC%EC%A7%80",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%82%AC%EC%9D%B4%EA%B3%B5%EB%B9%8C%EB%A6%AC%EC%A7%80"
    ]
  },
  {
    "id": 48,
    "name": "알라이",
    "source": "직접 추천",
    "address": "갈매순환로 188, 101동 120호",
    "phone": "031-528-6118",
    "menu": "팟타이 12,000원 / 똠얌꿍 18,000원",
    "description": "태국식 쌀국수와 볶음면",
    "category": "세계음식·분식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%95%8C%EB%9D%BC%EC%9D%B4",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%95%8C%EB%9D%BC%EC%9D%B4"
    ]
  },
  {
    "id": 49,
    "name": "고향김밥",
    "source": "기존 목록",
    "address": "수택동 404-14",
    "phone": "031-567-4305",
    "menu": "국물떡볶이·참치주먹밥 / 가격 미확인",
    "description": "시장 분식",
    "category": "세계음식·분식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EA%B3%A0%ED%96%A5%EA%B9%80%EB%B0%A5",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EA%B3%A0%ED%96%A5%EA%B9%80%EB%B0%A5"
    ]
  },
  {
    "id": 50,
    "name": "즉석떡볶이 전문 칠떡",
    "source": "2025 와구리",
    "address": "이문안로113번길 5",
    "phone": "0507-1377-0135",
    "menu": "우삼겹 즉석떡볶이 / 가격 미확인",
    "description": "우삼겹을 곁들인 떡볶이",
    "category": "세계음식·분식",
    "links": [
      "https://map.naver.com/p/search/%EA%B5%AC%EB%A6%AC%20%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%A0%84%EB%AC%B8%20%EC%B9%A0%EB%96%A1",
      "https://map.kakao.com/?q=%EA%B5%AC%EB%A6%AC%20%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%A0%84%EB%AC%B8%20%EC%B9%A0%EB%96%A1"
    ]
  }
];
const $ = s => document.querySelector(s);
const categories = [...new Set(restaurants.map(r=>r.category))];
let category = '전체';
const filters = $('#filters');
for (const c of ['전체',...categories]) {
 const b=document.createElement('button'); b.type='button'; b.textContent=c+' '+(c==='전체'?restaurants.length:restaurants.filter(r=>r.category===c).length); b.dataset.category=c; b.addEventListener('click',()=>{category=c;render()}); filters.append(b);
}
function node(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
function render(){
 const q=$('#search').value.trim().toLocaleLowerCase(); const only=$('#recommended').checked;
 const visible=restaurants.filter(r=>(category==='전체'||r.category===category)&&(!only||r.source==='직접 추천')&&[r.name,r.address,r.menu,r.description,r.source,r.category].join(' ').toLocaleLowerCase().includes(q));
 for(const b of filters.children)b.setAttribute('aria-pressed',String(b.dataset.category===category));
 $('#count').textContent=`${visible.length}개 음식점`; const list=$('#list');list.replaceChildren();
 for(const c of categories){const rows=visible.filter(r=>r.category===c);if(!rows.length)continue;const section=node('section','group');section.append(node('h2','',c+' · '+rows.length+'개소')); const grid=node('div','grid');
 for(const r of rows){const card=node('article','restaurant');const head=node('div','card-head');head.append(node('span','number',String(r.id).padStart(2,'0')),node('span','source',r.source));card.append(head,node('h3','',r.name),node('p','menu',r.menu),node('p','description',r.description),node('p','address','경기도 구리시 '+r.address));const phone=node('p','phone');if(r.phone!=='미확인'){const a=node('a','',r.phone);a.href='tel:'+r.phone;phone.append(a)}else phone.textContent='연락처 미확인';card.append(phone);const actions=node('div','actions');r.links.forEach((url,i)=>{const a=node('a',['naver','kakao','review'][i],['네이버 지도·리뷰','카카오 지도·평점','메뉴·후기 출처'][i]);a.href=url;a.target='_blank';a.rel='noopener noreferrer';actions.append(a)});card.append(actions);grid.append(card)}section.append(grid);list.append(section)}
 if(!visible.length)list.append(node('p','empty','검색 결과가 없습니다. 다른 검색어를 입력해 보세요.'));
}
$('#search').addEventListener('input',render);$('#recommended').addEventListener('change',render);$('#reset').addEventListener('click',()=>{$('#search').value='';$('#recommended').checked=false;category='전체';render()});render();
