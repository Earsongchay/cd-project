import { createFeatureSelector } from "@ngrx/store";
import { Sidebar } from "./open-sidebar.state";

export const selectOpenSideBar = createFeatureSelector<Sidebar>('sidebar')