export const detectar_mobile_f = async ()=>{
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) return 'fb://page/105780954126464'

    else return 'https://web.facebook.com/Zuzu-Cakes-105780954126464'
}
