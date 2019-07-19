export const isAuth = ()=>{
    return localStorage.getItem('@userId') ? true : false
}

export const isAdmin = ()=>{

  return localStorage.getItem('@staff')==='admin' ? true : false
}