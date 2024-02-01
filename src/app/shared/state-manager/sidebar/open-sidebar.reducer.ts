import { createReducer, on } from "@ngrx/store";
import { Sidebar, initOpenSidebarState } from "./open-sidebar.state";
import { openSidebarAction } from "./open-sidebar.action";

const _openSideBarReducer = createReducer(
    initOpenSidebarState,
    on(openSidebarAction,(state,action :Sidebar)=>{
       return {
        ...state,
        isOpen : action.isOpen
       }
    })
)
export function openSideBarReducer (state: Sidebar | undefined,action: any) {
    return _openSideBarReducer(state,action)
}
