export type PaginatorPropsType = {
   totalItemsCount: number,
   pageSize: number,
   currentPage: number,
   portionSize?: number,

   onPageChanged: (pageNumber: number) => void
}