/*
  KUJI SCRATCH — 이미지 링크 목록
  이 파일에서만 이미지 주소를 바꾸면 됩니다.

  수정 방법
  1) 아래 따옴표 안의 URL만 새 이미지 주소로 바꾸세요.
  2) 저장할 때 파일 이름은 images.js 그대로 유지하세요.
  3) index.html과 images.js는 반드시 같은 폴더에 올리세요.
  4) 이미지는 https:// 로 시작하는 직접 이미지 주소(.jpg, .png, .webp 등)를 권장합니다.
  5) 사이트에 따라 외부 이미지 표시를 막을 수 있습니다. 이 경우 이미지를 저장소에 올리는 방식이 더 안정적입니다.
*/
window.KUJI_IMAGES = {
  // 첫 화면 대표 이미지와 작품별 카드 이미지
  covers: {
    h2h: "https://i.namu.wiki/i/2ZtiTWq8hkjJfjC0dWlf3AvhYkjJH3h1QdBuPN_fzmogtYwsleqALb_1bgIKV4qPi6pf-u0zAn1i5wp1a2A9Dw.webp", // Hearts2Hearts
    tuide: "https://i.namu.wiki/i/1qBrISPkirbOV5srCae76MYhZkuJS-NgBQPYcKg-GUpDpt6TAo2y54TWb4gUFAOoTxx7sDlWcQWg6o89rAk8fA.webp", // TUIDE
    goldkamuy: "https://www.hakodate.travel/kr/wp-content/uploads/2026/04/20260401_PERMIT_HAKOSIN-1-1536x864.webp" // 골든카무이
  },

  // 스크래치 티켓과 당첨 결과 이미지. A~F는 당첨 등급입니다.
  // 각 등급마다 h2h / tuide / goldkamuy 주소를 지정합니다.
  prizes: {
    A: {
      h2h: "https://fcdn2.smtown-official.jp/files/images/2141_4ccd9d0a27809492fd3ccb3b8be86b84.jpg", // Hearts2Hearts
      tuide: "https://i.namu.wiki/i/1qBrISPkirbOV5srCae76MYhZkuJS-NgBQPYcKg-GUpDpt6TAo2y54TWb4gUFAOoTxx7sDlWcQWg6o89rAk8fA.webp", // TUIDE
      goldkamuy: "https://pbs.twimg.com/media/G5D83vRa4AAL_P0.jpg" // 골든카무이
    },
    B: {
      h2h: "https://media.ktown4u.com/products/resize/thumbnail/2026/06/29/AH6JfX.png", // Hearts2Hearts
      tuide: "https://cdn-contents.weverseshop.io/public/shop/ec6db57bfb9f528544b42d75c704ef92.png", // TUIDE
      goldkamuy: "https://actionfigurebrasil.com.br/cdn/shop/files/golden-kamuy-ogata-hyakunosuke-ichiban-kuji-ichiban-kuji-golden-kamuy-kinkai-soudatsusen-b-prize-masterlise-bandai-spirits-actionfigurebrasil-01_1024x1024.webp?v=1774221274" // 골든카무이
    },
    C: {
      h2h: "https://kplaceshop.com/cdn/shop/files/hearts2hearts-acrylic-keyring-2nd-mini-album-lemon-tang-pop-up-official-md-carmen-ver-main-image_600x.png?v=1783013031", // Hearts2Hearts
      tuide: "https://cdn.shopify.com/s/files/1/0675/8105/1017/files/1000016904_detail_044.jpg?v=1785782781&width=1500", // TUIDE
      goldkamuy: "https://pbs.twimg.com/media/G5D83vRa4AAL_P0.jpg" // 골든카무이
    },
    D: {
      h2h: "https://fcdn2.smtown-official.jp/files/images/2141_4ccd9d0a27809492fd3ccb3b8be86b84.jpg", // Hearts2Hearts
      tuide: "https://cdn-contents.weverseshop.io/public/shop/ec6db57bfb9f528544b42d75c704ef92.png", // TUIDE
      goldkamuy: "https://jumpichiban.com/cdn/shop/files/IchibanKujiGoldenKamuyGoldNuggetScramble-IPrizeVisualSheetCompleteSetof12_7.webp?v=1774572893&width=1000" // 골든카무이
    },
    E: {
      h2h: "https://media.ktown4u.com/products/resize/thumbnail/2026/06/29/AH6JfX.png", // Hearts2Hearts
      tuide: "https://cdn-contents.weverseshop.io/public/shop/ec6db57bfb9f528544b42d75c704ef92.png", // TUIDE
      goldkamuy: "https://pbs.twimg.com/media/HEFQfc8bsAATsES.jpg" // 골든카무이
    },
    F: {
      h2h: "https://kplaceshop.com/cdn/shop/files/hearts2hearts-acrylic-keyring-2nd-mini-album-lemon-tang-pop-up-official-md-carmen-ver-main-image_600x.png?v=1783013031", // Hearts2Hearts
      tuide: "https://cdn-contents.weverseshop.io/public/shop/0d88dca6eb62e72c3bce249e096fe372.png", // TUIDE
      goldkamuy: "https://pbs.twimg.com/media/HEFQet5aoAAmwon.jpg" // 골든카무이
    }
  }
};
