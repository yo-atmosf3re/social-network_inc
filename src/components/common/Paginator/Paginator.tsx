import React, { useState } from "react";
import styles from "./Paginator.module.css"
import cn from 'classnames'

type PropsType = {
   totalItemsCount: number,
   pageSize: number,
   currentPage: number,
   portionSize?: number,

   onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PropsType> = (props) => {
   let {
      totalItemsCount, pageSize, currentPage, onPageChanged,
      portionSize = 4
   } = props;

   let pageCount = Math.ceil(totalItemsCount / pageSize);
   let pages: Array<number> = [];
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
   }
   let portionCount = Math.ceil(pageCount / portionSize);
   let [portionNumber,
      setPortionNumber] = useState(1);
   let leftPortionPageNumber = ((portionNumber - 1) * portionSize) + 1;
   let rightPortionPageNumber = portionNumber * portionSize;


   return (

      <div className={styles.paginator}>

         {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>
               PREV </button>
         }

         {pages
            .filter(pageF => {
               return pageF >= leftPortionPageNumber
                  && pageF <= rightPortionPageNumber
            })
            .map(page => {

               return (
                  <span
                     className={cn(
                        styles.pageNumber,
                        { [styles.selectedPage]: currentPage === page })
                     }
                     key={page}
                     onClick={() => {
                        onPageChanged(page);
                     }}>
                     {page}
                  </span>)

            })}

         {portionNumber < portionCount &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>
               NEXT </button>
         }

      </div>

   )
}
