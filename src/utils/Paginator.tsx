import * as React from 'react';
import s from '../components/Users/Users.module.css'

export interface PaginatorPropsI {
   currentPage: number
   pageSize: number
   totalUsersCount: number
   onPageChanged: (pageNumber: number, pageSize: number) => void
}

export const Paginator: React.FC<PaginatorPropsI> = ({
   currentPage, onPageChanged,
   pageSize, totalUsersCount,
}) => {

   const pagesCount: number = Math.ceil(totalUsersCount / pageSize);
   const pages: number[] = [];

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   const [int, setInt] = React.useState<number>(currentPage)

   const paginationCompute = (): number[] => pages.slice(((int - 5) < 0) ? 0 : int - 5, int + 5);

   const handlerPagination = (value: number): void => {
      setInt(value)
      onPageChanged(value, 10)
   }

   const classNamePaginatorCondition = (p: number): string => int === p ? s.selectedPage : ''

   return <div
      className={s.pageNumbersBlock}>
      {
         paginationCompute().map((p, i) =>
            <span
               key={i}
               className={classNamePaginatorCondition(p)}
               onClick={() => { handlerPagination(p) }}>
               {p}
            </span>)
      }
   </div>
}