export const detectar_mobile = async ()=>{
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) return 'https://wa.me/5521997322497?text=Ola'

    else return 'https://web.whatsapp.com/send?phone=5521997322497&text=ola'
}
