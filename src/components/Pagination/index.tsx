import { PaginationType } from './type'
import './style.css'

export const Pagination = ({ currentPage, goTo }: PaginationType) => {
  return (
    <div className='pagination'>
      {/* if prev page is 0 it don't show */}
      {currentPage - 1 === 0 ? null : (
        <b className='pagination__item' onClick={(e) => goTo(currentPage - 1)}>
          {currentPage - 1}
        </b>
      )}
      <b onClick={(e) => goTo(currentPage)} className='pagination__item pagination__item--current'>
        {currentPage}
      </b>
      <b className='pagination__item' onClick={(e) => goTo(currentPage + 1)}>
        {currentPage + 1}
      </b>
    </div>
  )
}
