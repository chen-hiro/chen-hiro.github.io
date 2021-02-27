var xiaokang = new xkTool();
// // 添加图片，背景图片会在这里随机选取一个设置为banner
// xiaokang.bannerList = [
//     "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/25-min.jpg",
//     "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/23-min.jpg",
//     "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/24-min.jpg",
//     "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/2-min.jpg",
//     "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/27-min.jpg",
// ];
// xiaokang.randomBanner(true); // true为使用滤镜，不写或者false为不使用滤镜
xiaokang.imgList = [
    "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
    "https://ae01.alicdn.com/kf/Hb4b6a83a124049819bd561439312edc96.jpg",
    "https://ae01.alicdn.com/kf/H146b0a3e074a4e91b11fcce994098034y.jpg",
    "https://ae03.alicdn.com/kf/H76674cd5901840be9b12f8596bb649bdP.jpg",
  ];
  // 调用随机背景
  xiaokang.randomBg();
xiaokang.mobileSidebar();
xiaokang.codeFull();
xiaokang.consoleAnchor();
xiaokang.bgPage();
xiaokang.footFish();
xiaokang.aplayer({
    audio: [
        {
            name: "SB",
            artist: "SB",
            url: "http://music.163.com/song/media/outer/url?id=574566207.mp3",
            cover: "SB",
        },
    ],
    fixed: true,
    mini: true,
});

