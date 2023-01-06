$(".banner-carousel").owlCarousel({
    center: true,
    items: 2,
    loop: true, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示角角
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      600: {
        items: 1.5 // 螢幕大小為 600~1000 顯示 2 個項目
      },
      1000: {
        items: 1.25 // 螢幕大小為 1000 以上 顯示 5 個項目
      }

    }

  })