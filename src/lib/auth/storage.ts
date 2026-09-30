const KEY='refugio_token';
export const getToken=()=>typeof localStorage==='undefined'?null:localStorage.getItem(KEY);
export const saveToken=(token:string)=>localStorage.setItem(KEY,token);
export const clearSession=()=>localStorage.removeItem(KEY);
export const isAuthenticated=()=>Boolean(getToken());
