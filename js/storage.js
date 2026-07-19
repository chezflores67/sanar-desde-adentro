const KEY='smartapps_sanar_v01';
const defaults={consent:false,profile:{name:'',email:'',startDate:'',reminder:'09:00'},assessment:{answers:{},scores:{},completed:false},selectedWounds:[],currentDay:1,completedDays:[],journal:{},settings:{theme:'light',fontScale:1,locale:'es-MX'}};
export function load(){try{return {...structuredClone(defaults),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return structuredClone(defaults)}}
export function save(data){localStorage.setItem(KEY,JSON.stringify(data))}
export function reset(){localStorage.removeItem(KEY)}
export function downloadBackup(data){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='sanar-desde-adentro-respaldo.json';a.click();URL.revokeObjectURL(a.href)}
export async function restoreBackup(file){const parsed=JSON.parse(await file.text());if(!parsed||typeof parsed!=='object')throw new Error('Formato inválido');save(parsed);return parsed}
