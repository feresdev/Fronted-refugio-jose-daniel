import { getToken, clearSession } from '../auth/storage';
const base=import.meta.env.PUBLIC_API_URL||'http://localhost:3000';
export class ApiError extends Error { constructor(public status:number,message:string){super(message)} }
export async function apiRequest<T>(path:string, options:RequestInit={}):Promise<T>{ const headers=new Headers(options.headers); headers.set('Content-Type','application/json'); const token=getToken(); if(token) headers.set('Authorization',`Bearer ${token}`); const response=await fetch(`${base}${path}`,{...options,headers}); const data=await response.json().catch(()=>({})); if(!response.ok){if(response.status===401)clearSession();throw new ApiError(response.status,data.error||'No se pudo completar la solicitud')} return data as T; }
