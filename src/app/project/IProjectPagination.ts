import { Project } from "./project.model";

export interface IProjectPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    project: Project[];
}