import React from 'react'
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
    <div className='flex flex-row max-w-7xl mx-auto px-20 py-8'>
      <div className='flex flex-col justify-center items-start w-1/3 '>
      <h2 className='text-2xl font-bol text-brand-900 mb-4'>Curated Teas for Your Everyday Ritual</h2>
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
