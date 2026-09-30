import { apiRequest } from './client';
export const loginRequest=(data:{usuario:string;contrasena:string})=>apiRequest<{token:string}>('/auth/login',{method:'POST',body:JSON.stringify(data)});
export const logoutRequest=()=>apiRequest<{message:string}>('/auth/logout',{method:'POST'});
