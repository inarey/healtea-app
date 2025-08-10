import React from 'react'
import { Link } from 'react-router-dom';
import TeaCategoryCard from './TeaCategoryCard';
import { hojichaBliss, nuttyComfort, orangeSunrise, plumLimited, tropicalCitrusHarmony } from '../../../assets/images/fillerImg';

const teaCategories = [
  {id: 1, name: "Morning Focus", img: hojichaBliss, isLimited: false},
  {id: 2, name: "Detox and Wellness", img: tropicalCitrusHarmony, isLimited: false},
  {id: 3, name: "Comfort and Sleep", img: nuttyComfort, isLimited: false},
  {id: 4, name: "Summer Teas", img: orangeSunrise, isLimited: false},
  {id: 5, name: "Plum Tea", img: plumLimited, isLimited: true},
]

const CuratedTeas = () => {
  return (
    <div className='flex flex-row max-w-full px-24 py-10 border-t-8 border-b-8 border-brand-500'>
      <div className='flex flex-col justify-center items-start w-1/3 '>
      <h2 className='text-2xl font-bold text-brand-900 mb-4 w-3/4'>Curated Teas for Your Everyday Ritual</h2>
      <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
          aria-label="View all products"
        >
          View all products <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {teaCategories.map((tea) => (
          <TeaCategoryCard
            key={tea.id}
            name={tea.name}
            img={tea.img}
            isLimited={tea.isLimited}
          />
        ))}
      </div>

    </div>
  )
}

export default CuratedTeas
