export interface SortModel {
  colId: unknown;
  sort: 'asc' | 'desc';
}

export interface AGGetRowsParams {
  // The first row index to get.
  startRow: number;

  // The first row index to NOT get.
  endRow: number;

  // If doing Server-side sorting, contains the sort model
  sortModel: SortModel;

  // If doing Server-side filtering, contains the filter model
  filterModel: any;

  // The grid context object
  context: any;

  // Callback to call when the request is successful.
  successCallback(rowsThisBlock: any[], lastRow?: number): void;

  // Callback to call when the request fails.
  failCallback(): void;
}

export interface AGDataSource {
  // Callback the grid calls that you implement to fetch rows from the server. See below for params.
  getRows(params: AGGetRowsParams): void;

  // optional destroy method, if your datasource has state it needs to clean up
  destroy?(): void;
}
