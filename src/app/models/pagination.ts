import { IAllocation } from "./allocation";

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IAllocation[];
}