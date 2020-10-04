import {PaginationDataModel} from "./pagination-data.model";

export interface FarmerSearchModel extends PaginationDataModel{
  // TODO: filter options
  name: string;
  sort: string;
}