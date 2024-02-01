import { createAction, props } from "@ngrx/store";
import { Sidebar } from "./open-sidebar.state";

export const openSidebarAction = createAction('openSidebarAction', props<Sidebar>());