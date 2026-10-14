/*
  =============================================================================
  KUJI SCRATCH — 통합 설정 파일 (config.js)
  =============================================================================
  사용자 요청 최신 이미지 주소가 반영된 설정 파일입니다.
  새 작품 추가, 상 이름, 수량(count), 이미지(image), 1회 가격(price)을 자유롭게 변경할 수 있습니다.
*/

window.KUJI_CONFIG = {
  defaultTheme: "h2h",

  kujis: [
    {
      id: "h2h",
      title: "Hearts2Hearts",
      sub: "PHOTO & GOODS",
      cover: "https://i.namu.wiki/i/2ZtiTWq8hkjJfjC0dWlf3AvhYkjJH3h1QdBuPN_fzmogtYwsleqALb_1bgIKV4qPi6pf-u0zAn1i5wp1a2A9Dw.webp",
      price: 5000,
      grades: [
        { grade: "A", name: "A상 스페셜 굿즈", count: 1, image: "https://i.namu.wiki/i/G15ItNLIhmxbiaMrSeQ1EDkbF3-rjAC2z_R0slsETrTRh7DQoqiMDgZWhQHenT3dw0JmJQ3HpZ9CQDNUQIKvVA.webp" },
        { grade: "B", name: "B상 포토카드 풀 세트", count: 2, image: "https://media.ktown4u.com/products/resize/thumbnail/2026/06/29/AH6JfX.png" },
        { grade: "C", name: "C상 아크릴 키링 컬렉션", count: 4, image: "https://kplaceshop.com/cdn/shop/files/hearts2hearts-acrylic-keyring-2nd-mini-album-lemon-tang-pop-up-official-md-carmen-ver-main-image_600x.png?v=1783013031" },
        { grade: "D", name: "D상 스페셜 일러스트 보드", count: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47kFtAgb89RnwBH2qXfxSPX_vA4guq9xUCqcIEJy-5RRdMpqRhsMHYYg&s=10" },
        { grade: "E", name: "E상 랜덤 스티커 & 포토 소품", count: 15, image: "https://image.yes24.com/goods/190822956/XL" },
        { grade: "F", name: "F상 멤버 스티커 굿즈", count: 30, image: "https://media.ktown4u.com/products/resize/thumbnail/2026/02/10/0M4ER5.png" }
      ],
      lastOne: {
        name: "라스트원상 스페셜 친필사인 포토보드",
        image: "https://media.bunjang.co.kr/product/384339551_1_1778423813_w360.jpg"
      },
      doubleChance: {
        name: "더블찬스 풀 패키지 굿즈 세트",
        image: "https://media.ktown4u.com/products/resize/thumbnail/2025/05/22/0aB0vz.png"
      }
    },

    {
      id: "tuide",
      title: "TUIDE",
      sub: "ALBUM & GOODS",
      cover: "https://i.namu.wiki/i/1qBrISPkirbOV5srCae76MYhZkuJS-NgBQPYcKg-GUpDpt6TAo2y54TWb4gUFAOoTxx7sDlWcQWg6o89rAk8fA.webp",
      price: 5000,
      grades: [
        { grade: "A", name: "A상 스페셜 한정 앨범", count: 1, image: "https://media.ktown4u.com/products/resize/thumbnail/2026/08/03/BJTaoJ.jpg" },
        { grade: "B", name: "B상 포토카드 & 포토북 세트", count: 2, image: "https://image.yes24.com/Goods/194751747/M" },
        { grade: "C", name: "C상 미니 굿즈 컬렉션", count: 4, image: "https://cdn.shopify.com/s/files/1/0675/8105/1017/files/1000016904_detail_044.jpg?v=1785782781&width=1500" },
        { grade: "D", name: "D상 앨범 일러스트 보드", count: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRgpPl0kHEYehzc_LcfMQ8Dza8l287cSWULDyTGqS8Tzp4kqZuPnakbc&s=10" },
        { grade: "E", name: "E상 랜덤 스티커 컬렉션", count: 15, image: "https://media.bunjang.co.kr/product/436103075_1_1790783990_w360.jpg" },
        { grade: "F", name: "F상 클리어파일 굿즈", count: 30, image: "https://image.aladin.co.kr/img/music_content/C992939626_P00.jpg" }
      ],
      lastOne: {
        name: "라스트원상 한정 아크릴 디오라마",
        image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/a3ee/2839fc185ad845acf8d943bc65b3d2732ca12d9401fab9897f3ba320645e.jpg"
      },
      doubleChance: {
        name: "더블찬스 친필 사인 앨범 풀 세트",
        image: "https://media.bunjang.co.kr/product/436413937_1_1790862613_w360.jpg"
      }
    },

    {
      id: "goldkamuy",
      title: "골든카무이",
      sub: "ICHIBAN KUJI",
      cover: "https://www.hakodate.travel/kr/wp-content/uploads/2026/04/20260401_PERMIT_HAKOSIN-1-1536x864.webp",
      price: 5000,
      grades: [
        { grade: "A", name: "A상 스기모토 사이치 피규어", count: 1, image: "https://m.herotime.co.kr/web/product/big/202209/9158c6ec764af779224a97dce5f25873.jpg" },
        { grade: "B", name: "B상 오가타 햐쿠노스케 피규어", count: 2, image: "https://m.comics-art.co.kr/web/product/big/202301/48640eaa3127b886f9f084a4b534a858.jpg" },
        { grade: "C", name: "C상 카이조쿠 보타로 피규어", count: 4, image: "https://m.figurefriends.co.kr/web/product/big/202607/8d40c77e9c8e28e2aed724c27af9c388.jpg" },
        { grade: "D", name: "D상 유리 컬렉션 (텀블러/접시)", count: 8, image: "https://pbs.twimg.com/media/HEFQet5aoAAmwon.jpg" },
        { grade: "E", name: "E상 쵸코놋코 미니 피규어 (랜덤)", count: 15, image: "https://media.bunjang.co.kr/product/433655359_1_1789985566_w180.jpg" },
        { grade: "F", name: "F상 비주얼 클리어파일", count: 30, image: "https://jumpichiban.com/cdn/shop/files/IchibanKujiGoldenKamuyGoldNuggetScramble-IPrizeVisualSheetCompleteSetof12_7.webp" }
      ],
      lastOne: {
        name: "라스트원상 오가타 햐쿠노스케 피규어 (라스트원 Ver.)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PggjKsLNGlkVpA3ixAoiHxPDIq4bD8HFAGCOY2oP-rPrl6Ga2RETbDg&s=10"
      },
      doubleChance: {
        name: "더블찬스 스기모토 & 오가타 & 보타로 스페셜 피규어 세트",
        image: "https://pbs.twimg.com/media/G5D83vRa4AAL_P0.jpg"
      }
    }
  ]
};

window.KUJI_DATA = {
  themes: {
    h2h: {
      name: window.KUJI_CONFIG.kujis[0].title,
      sub: window.KUJI_CONFIG.kujis[0].sub,
      cover: window.KUJI_CONFIG.kujis[0].cover,
      lastOne: window.KUJI_CONFIG.kujis[0].lastOne,
      doubleChance: window.KUJI_CONFIG.kujis[0].doubleChance
    },
    tuide: {
      name: window.KUJI_CONFIG.kujis[1].title,
      sub: window.KUJI_CONFIG.kujis[1].sub,
      cover: window.KUJI_CONFIG.kujis[1].cover,
      lastOne: window.KUJI_CONFIG.kujis[1].lastOne,
      doubleChance: window.KUJI_CONFIG.kujis[1].doubleChance
    },
    goldkamuy: {
      name: window.KUJI_CONFIG.kujis[2].title,
      sub: window.KUJI_CONFIG.kujis[2].sub,
      cover: window.KUJI_CONFIG.kujis[2].cover,
      lastOne: window.KUJI_CONFIG.kujis[2].lastOne,
      doubleChance: window.KUJI_CONFIG.kujis[2].doubleChance
    }
  },
  grades: [
    { key: "A", count: 1, prizes: { h2h: window.KUJI_CONFIG.kujis[0].grades[0], tuide: window.KUJI_CONFIG.kujis[1].grades[0], goldkamuy: window.KUJI_CONFIG.kujis[2].grades[0] } },
    { key: "B", count: 2, prizes: { h2h: window.KUJI_CONFIG.kujis[0].grades[1], tuide: window.KUJI_CONFIG.kujis[1].grades[1], goldkamuy: window.KUJI_CONFIG.kujis[2].grades[1] } },
    { key: "C", count: 4, prizes: { h2h: window.KUJI_CONFIG.kujis[0].grades[2], tuide: window.KUJI_CONFIG.kujis[1].grades[2], goldkamuy: window.KUJI_CONFIG.kujis[2].grades[2] } },
    { key: "D", count: 8, prizes: { h2h: window.KUJI_CONFIG.kujis[0].grades[3], tuide: window.KUJI_CONFIG.kujis[1].grades[3], goldkamuy: window.KUJI_CONFIG.kujis[2].grades[3] } },
    { key: "E", count: 15, prizes: { h2h: window.KUJI_CONFIG.kujis[0].grades[4], tuide: window.KUJI_CONFIG.kujis[1].grades[4], goldkamuy: window.KUJI_CONFIG.kujis[2].grades[4] } },
    { key: "F", count: 30, prizes: { h2h: window.KUJI_CONFIG.kujis[0].grades[5], tuide: window.KUJI_CONFIG.kujis[1].grades[5], goldkamuy: window.KUJI_CONFIG.kujis[2].grades[5] } }
  ]
};

window.KUJI_IMAGES = {
  covers: {
    h2h: window.KUJI_CONFIG.kujis[0].cover,
    tuide: window.KUJI_CONFIG.kujis[1].cover,
    goldkamuy: window.KUJI_CONFIG.kujis[2].cover
  },
  prizes: {
    A: { h2h: window.KUJI_CONFIG.kujis[0].grades[0].image, tuide: window.KUJI_CONFIG.kujis[1].grades[0].image, goldkamuy: window.KUJI_CONFIG.kujis[2].grades[0].image },
    B: { h2h: window.KUJI_CONFIG.kujis[0].grades[1].image, tuide: window.KUJI_CONFIG.kujis[1].grades[1].image, goldkamuy: window.KUJI_CONFIG.kujis[2].grades[1].image },
    C: { h2h: window.KUJI_CONFIG.kujis[0].grades[2].image, tuide: window.KUJI_CONFIG.kujis[1].grades[2].image, goldkamuy: window.KUJI_CONFIG.kujis[2].grades[2].image },
    D: { h2h: window.KUJI_CONFIG.kujis[0].grades[3].image, tuide: window.KUJI_CONFIG.kujis[1].grades[3].image, goldkamuy: window.KUJI_CONFIG.kujis[2].grades[3].image },
    E: { h2h: window.KUJI_CONFIG.kujis[0].grades[4].image, tuide: window.KUJI_CONFIG.kujis[1].grades[4].image, goldkamuy: window.KUJI_CONFIG.kujis[2].grades[4].image },
    F: { h2h: window.KUJI_CONFIG.kujis[0].grades[5].image, tuide: window.KUJI_CONFIG.kujis[1].grades[5].image, goldkamuy: window.KUJI_CONFIG.kujis[2].grades[5].image }
  }
};
