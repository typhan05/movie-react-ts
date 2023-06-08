import { Link } from 'react-router-dom'
import { noImage } from '../../utils/helper'
import { CardType } from './type'

const Card = ({ id, image, title, year }: CardType) => {
  return (
    <div className='group relative h-full overflow-hidden'>
      {image === 'N/A' ? (
        <img src={noImage} alt={title} className='h-full object-cover' />
      ) : (
        <img src={image} alt={title} className='h-full object-cover' />
      )}
      <div className='absolute left-0 top-0 h-full w-full z-0 bg-overlay backdrop-brightness-50 group-hover:backdrop-brightness-75 ease-in duration-300'></div>

      <div className='absolute left-4 bottom-4 font-semibold'>
        <span className='card__info__title'>{title}</span> - <span className='card__info__year'>{year}</span>
      </div>
      <Link to={`/movies/${id}`}>
        <span aria-hidden='true' className='absolute inset-0'></span>
      </Link>
    </div>
  )
}

export default Card
