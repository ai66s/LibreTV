const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
        detail: '',
        isAdult: false
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'IKUN',
        detail: '',
        isAdult: false
    },
    iqiyi: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: 'IQIYI',
        detail: '',
        isAdult: false
    },
    tianya: {
        api: 'https://ty.tyyszy5.com/api.php/provide/vod',
        name: '天涯',
        detail: '',
        isAdult: false
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台',
        detail: '',
        isAdult: false
    },
    site1: {
        api: 'https://hsckzy888.com/api.php/provide/vod/from/hsckm3u8/at/json',
        name: '1',
        detail: '',
        isAdult: true
    },
    xingba: {
        api: 'https://xingba222.com/api.php/provide/vod',
        name: '杏吧',
        detail: '',
        isAdult: true
    },
    site91: {
        api: 'https://91jpzyw.com/api.php/provide/vod/at/json',
        name: '91',
        detail: '',
        isAdult: true
    },
    da: {
        api: 'https://apidanaizi.com/api.php/provide/vod',
        name: '大',
        detail: '',
        isAdult: true
    },
    tiantang: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod/from/dyttm3u8/at',
        name: '天堂',
        detail: '',
        isAdult: false
    },
    site2: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod/from/dytt/at',
        name: '2',
        detail: '',
        isAdult: false
    },
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8/at',
        name: '量子',
        detail: '',
        isAdult: false
    },
    ok: {
        api: 'https://dh.ha.cn/api.php/provide/vod/from/pbm3u8',
        name: 'OK',
        detail: '',
        isAdult: false
    },
    modu: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都',
        detail: '',
        isAdult: false
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽',
        detail: '',
        isAdult: false
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
