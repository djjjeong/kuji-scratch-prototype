/*
  =============================================================
  KUJI SCRATCH — 이미지 및 상품 상세 설정 (images.js)
  =============================================================
  각 상이 실제로 어떤 상품인지(피규어, 타올굿즈, 키링 등) 이름과
  이미지 주소를 여기서 편리하게 수정할 수 있습니다.

  [안내]
  1. index.html과 images.js는 같은 폴더(깃허브 저장소 루트)에 위치해야 합니다.
  2. 원하는 이미지 주소(https://...)와 상품 이름으로 변경하면 즉시 반영됩니다.
*/

window.KUJI_DATA = {
  // 1. 작품별 대표 정보 및 커버 이미지 (홈 상단 배너 및 라인업 카드)
  themes: {
    h2h: {
      name: "Hearts2Hearts",
      sub: "PHOTO & GOODS",
      // 대표 커버/배너 이미지
      cover: "https://i.namu.wiki/i/2ZtiTWq8hkjJfjC0dWlf3AvhYkjJH3h1QdBuPN_fzmogtYwsleqALb_1bgIKV4qPi6pf-u0zAn1i5wp1a2A9Dw.webp",
      // 마지막 1장을 뽑았을 때 주어지는 특별상
      lastOne: {
        name: "라스트원상 스페셜 친필사인 포토보드",
        image: "https://media.bunjang.co.kr/product/384339551_1_1778423813_w360.jpg"
      },
      // 영수증/일련번호 추첨용 특별상
      doubleChance: {
        name: "더블찬스 풀 패키지 굿즈 세트",
        image: "https://media.ktown4u.com/products/resize/thumbnail/2025/05/22/0aB0vz.png"
      }
    },

    tuide: {
      name: "TUIDE",
      sub: "ALBUM & GOODS",
      cover: "https://i.namu.wiki/i/1qBrISPkirbOV5srCae76MYhZkuJS-NgBQPYcKg-GUpDpt6TAo2y54TWb4gUFAOoTxx7sDlWcQWg6o89rAk8fA.webp",
      lastOne: {
        name: "라스트원상 한정 아크릴 디오라마",
        image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/a3ee/2839fc185ad845acf8d943bc65b3d2732ca12d9401fab9897f3ba320645e.jpg"
      },
      doubleChance: {
        name: "더블찬스 친필 사인 앨범 풀 세트",
        image: "https://media.bunjang.co.kr/product/436413937_1_1790862613_w360.jpg"
      }
    },

    goldkamuy: {
      name: "골든카무이",
      sub: "ICHIBAN KUJI",
      cover: "https://www.hakodate.travel/kr/wp-content/uploads/2026/04/20260401_PERMIT_HAKOSIN-1-1536x864.webp",
      lastOne: {
        name: "라스트원상 오가타 햐쿠노스케 피규어 (라스트원 Ver.)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PggjKsLNGlkVpA3ixAoiHxPDIq4bD8HFAGCOY2oP-rPrl6Ga2RETbDg&s=10"
      },
      doubleChance: {
        name: "더블찬스 스기모토 & 오가타 스페셜 피규어 세트",
        image: "https://pbs.twimg.com/media/G5D83vRa4AAL_P0.jpg"
      }
    }
  },

  // 2. 등급별 상세 상품 목록 (총 60매 구성: A:1, B:2, C:4, D:8, E:15, F:30)
  grades: [
    {
      key: "A",
      count: 1, // 박스 내 총 수량: 1개
      prizes: {
        h2h: {
          name: "A상 스페셜 굿즈",
          image: "https://i.namu.wiki/i/G15ItNLIhmxbiaMrSeQ1EDkbF3-rjAC2z_R0slsETrTRh7DQoqiMDgZWhQHenT3dw0JmJQ3HpZ9CQDNUQIKvVA.webp"
        },
        tuide: {
          name: "A상 스페셜 한정 앨범",
          image: "https://media.ktown4u.com/products/resize/thumbnail/2026/08/03/BJTaoJ.jpg"
        },
        goldkamuy: {
          name: "A상 스기모토 사이치 피규어",
          image: "https://m.herotime.co.kr/web/product/big/202209/9158c6ec764af779224a97dce5f25873.jpg"
        }
      }
    },

    {
      key: "B",
      count: 2, // 박스 내 총 수량: 2개
      prizes: {
        h2h: {
          name: "B상 포토카드 풀 세트",
          image: "https://media.ktown4u.com/products/resize/thumbnail/2026/06/29/AH6JfX.png"
        },
        tuide: {
          name: "B상 포토카드 & 포토북 세트",
          image: "https://image.yes24.com/Goods/194751747/M"
        },
        goldkamuy: {
          name: "B상 오가타 햐쿠노스케 피규어",
          image: "https://m.comics-art.co.kr/web/product/big/202301/48640eaa3127b886f9f084a4b534a858.jpg"
        }
      }
    },

    {
      key: "C",
      count: 4, // 박스 내 총 수량: 4개
      prizes: {
        h2h: {
          name: "C상 아크릴 키링 컬렉션",
          image: "https://kplaceshop.com/cdn/shop/files/hearts2hearts-acrylic-keyring-2nd-mini-album-lemon-tang-pop-up-official-md-carmen-ver-main-image_600x.png?v=1783013031"
        },
        tuide: {
          name: "C상 미니 굿즈 컬렉션",
          image: "https://cdn.shopify.com/s/files/1/0675/8105/1017/files/1000016904_detail_044.jpg?v=1785782781&width=1500"
        },
        goldkamuy: {
          name: "C상 카이조쿠 보타로 피규어",
          image: "https://m.figurefriends.co.kr/web/product/big/202607/8d40c77e9c8e28e2aed724c27af9c388.jpg"
        }
      }
    },

    {
      key: "D",
      count: 8, // 박스 내 총 수량: 8개
      prizes: {
        h2h: {
          name: "D상 스페셜 일러스트 보드",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47kFtAgb89RnwBH2qXfxSPX_vA4guq9xUCqcIEJy-5RRdMpqRhsMHYYg&s=10"
        },
        tuide: {
          name: "D상 앨범 일러스트 보드",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRgpPl0kHEYehzc_LcfMQ8Dza8l287cSWULDyTGqS8Tzp4kqZuPnakbc&s=10"
        },
        goldkamuy: {
          name: "D상 비주얼 일러스트 보드",
          image: "https://jumpichiban.com/cdn/shop/files/IchibanKujiGoldenKamuyGoldNuggetScramble-IPrizeVisualSheetCompleteSetof12_7.webp?v=1774572893&width=1000"
        }
      }
    },

    {
      key: "E",
      count: 15, // 박스 내 총 수량: 15개
      prizes: {
        h2h: {
          name: "E상 랜덤 스티커 & 포토 소품",
          image: "https://image.yes24.com/goods/190822956/XL"
        },
        tuide: {
          name: "E상 랜덤 스티커 컬렉션",
          image: "https://media.bunjang.co.kr/product/436103075_1_1790783990_w360.jpg"
        },
        goldkamuy: {
          name: "E상 쵸코놋코 미니 피규어 (랜덤)",
          image: "https://media.bunjang.co.kr/product/433655359_1_1789985566_w180.jpg"
        }
      }
    },

    {
      key: "F",
      count: 30, // 박스 내 총 수량: 30개
      prizes: {
        h2h: {
          name: "F상 데일리 타올 굿즈",
          image: "https://media.ktown4u.com/products/resize/thumbnail/2026/02/10/0M4ER5.png"
        },
        tuide: {
          name: "F상 클리어파일 & 타올 굿즈",
          image: "https://image.aladin.co.kr/img/music_content/C992939626_P00.jpg"
        },
        goldkamuy: {
          name: "F상 유리 컬렉션 (텀블러/접시)",
          image: "https://pbs.twimg.com/media/HEFQet5aoAAmwon.jpg"
        }
      }
    }
  ]
};

// 기존 형식 호환용
window.KUJI_IMAGES = {
  covers: {
    h2h: window.KUJI_DATA.themes.h2h.cover,
    tuide: window.KUJI_DATA.themes.tuide.cover,
    goldkamuy: window.KUJI_DATA.themes.goldkamuy.cover
  },
  prizes: {
    A: { h2h: window.KUJI_DATA.grades[0].prizes.h2h.image, tuide: window.KUJI_DATA.grades[0].prizes.tuide.image, goldkamuy: window.KUJI_DATA.grades[0].prizes.goldkamuy.image },
    B: { h2h: window.KUJI_DATA.grades[1].prizes.h2h.image, tuide: window.KUJI_DATA.grades[1].prizes.tuide.image, goldkamuy: window.KUJI_DATA.grades[1].prizes.goldkamuy.image },
    C: { h2h: window.KUJI_DATA.grades[2].prizes.h2h.image, tuide: window.KUJI_DATA.grades[2].prizes.tuide.image, goldkamuy: window.KUJI_DATA.grades[2].prizes.goldkamuy.image },
    D: { h2h: window.KUJI_DATA.grades[3].prizes.h2h.image, tuide: window.KUJI_DATA.grades[3].prizes.tuide.image, goldkamuy: window.KUJI_DATA.grades[3].prizes.goldkamuy.image },
    E: { h2h: window.KUJI_DATA.grades[4].prizes.h2h.image, tuide: window.KUJI_DATA.grades[4].prizes.tuide.image, goldkamuy: window.KUJI_DATA.grades[4].prizes.goldkamuy.image },
    F: { h2h: window.KUJI_DATA.grades[5].prizes.h2h.image, tuide: window.KUJI_DATA.grades[5].prizes.tuide.image, goldkamuy: window.KUJI_DATA.grades[5].prizes.goldkamuy.image }
  }
};
