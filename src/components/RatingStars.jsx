function RatingStars({ rating = 0, size='md' }){
  const max = 6
  const px = size==='sm'? 'h-4 w-4' : size==='lg'? 'h-6 w-6' : 'h-5 w-5'
  const stars = Array.from({length:max}, (_,i)=> i < Math.round(rating))
  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${rating} of 5`}>
      {stars.map((filled, i)=> (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={px + ' ' + (filled? 'fill-yellow-400 stroke-yellow-500':'fill-none stroke-gray-400')}>
          <path strokeWidth="1.5" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
      <span className="text-xs text-gray-500 ml-1">{Number(rating).toFixed(1)}</span>
    </div>
  )
}

export  {RatingStars}