import { types } from "../types/types";

 
export const eventeAddNew=(event)=>({
    type:types.eventeAddNew,
    payload:event
})
export const eventeSetActive=(event)=>({
    type:types.eventSetActive,
    payload:event
})
export const clearActiveEvent=()=>({
    type:types.eventClearActiveEvent
})
export const eventUpdated=(event)=>({
    type:types.eventUpdated,
    payload:event
})
export const eventDeleted=()=>({
    type:types.eventDeleted
})