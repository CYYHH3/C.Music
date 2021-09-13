// APlayer
var url="https://cdn.jsdelivr.net/gh/CYYHH3/Music@main";
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    volume: 0.5,
    lrcType: 3,
    audio: [
        {
            name: '起风了',
            artist: '周深',
            url: url+'/music/起风了/起风了.mp3',
            cover: url+'/music/起风了/起风了-compressed.png',
            lrc: url+'/music/起风了/起风了.lrc'
        },
        {
            name: 'Let Yourself Go',
            artist: 'Ooyy / Snake City',
            url: url+'/music/Let Yourself Go/Let Yourself Go.mp3',
            cover: url+'/music/Let Yourself Go/Let Yourself Go-compressed.png',
            lrc: url+'/music/Let Yourself Go/Let Yourself Go.lrc'
        },
        {
            name: '恋のうた',
            artist: 'Yunomi / 鬼頭明里',
            url: url+'/music/恋のうた/恋のうた.mp3',
            cover: url+'/music/恋のうた/恋のうた-compressed.png',
            lrc: url+'/music/恋のうた/恋のうた.lrc'
        },
        {
            name: '恋のうた (Short Version)',
            artist: 'Yunomi',
            url: url+'/music/恋のうた/恋のうた (Short Version).mp3',
            cover: url+'/music/恋のうた/恋のうた-compressed.png',
            lrc: url+'/music/恋のうた/恋のうた (Short Version).lrc'
        },
        {
            name: 'only my railgun -version2020-',
            artist: 'fripSide',
            url: url+'/music/only my railgun -version2020-/only my railgun -version2020-.mp3',
            cover: url+'/music/only my railgun -version2020-/only my railgun -version2020- (compressed).jpg',
            lrc: 'https://api.imjad.cn/cloudmusic/?type=lyric&id=532776373'
        },
        {
            name: 'Lose Control',
            artist: 'Hedley',
            url: url+'/music/Lose Control/Lose Control.mp3',
            cover: url+'/music/Lose Control/Hello-compressed.png',
            lrc: url+'/music/Lose Control/Lose Control.lrc'
        },
        {
            name: '怪可爱的',
            artist: 'YYGQ',
            url: url+'/music/怪可爱的/怪可爱的.mp3',
            cover: url+'/music/怪可爱的/怪可爱的.png',
            lrc: url+'/music/怪可爱的/怪可爱的.lrc'
        },
        {
            name: 'Love and War',
            artist: 'Fleurie',
            url: url+'/music/Love and War/Love and War.mp3',
            cover: url+'/music/Love and War/Love and War-compressed.png',
            lrc: url+'/music/Love and War/Love and War.lrc'
        },
        {
            name: "Ready Let's Go",
            artist: 'DARKMINDS',
            url: url+'/music/Ready Lets Go/Ready Lets Go.mp3',
            cover: url+'/music/Ready Lets Go/Ready Lets Go-compressed.png',
            lrc: url+'/music/Ready Lets Go/Ready Lets Go.lrc'
        },
        {
            name: "Dimples",
            artist: 'oomiee',
            url: url+'/music/Dimples/Dimples.mp3',
            cover: url+'/music/Dimples/Dimples-compressed.jpg',
            lrc: url+'/music/Dimples/Dimples.lrc',
        }
    ]
});