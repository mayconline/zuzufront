export const detectar_mobile_f = async ()=>{
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) return 'https://m.facebook.com/zulmira.serafim'

    else return 'https://web.facebook.com/zulmira.serafim'
}
