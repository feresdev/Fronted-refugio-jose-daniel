import { apiRequest } from './client';
import type { Animal,AnimalPayload } from '../../types/animal';
export const listAnimals=(filters:Record<string,string>)=>{const query=new URLSearchParams(Object.entries(filters).filter(([,v])=>v));return apiRequest<Animal[]>(`/animals${query.size?'?'+query:''}`)};
export const getAnimal=(id:number)=>apiRequest<Animal>(`/animals/${id}`);
export const createAnimal=(data:AnimalPayload)=>apiRequest<Animal>('/animals',{method:'POST',body:JSON.stringify(data)});
export const updateAnimal=(id:number,data:Partial<AnimalPayload>)=>apiRequest<Animal>(`/animals/${id}`,{method:'PUT',body:JSON.stringify(data)});
