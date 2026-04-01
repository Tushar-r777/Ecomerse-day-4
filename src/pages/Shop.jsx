import React from 'react'
import SelectInput from '../components/UI/Selectinput'

const Shop = () => {
  const sortoptions=[
    {
    value:"newest_items",
    label:"Newest Items",
  },
  {
    value:"oldest_items",
    label:"Oldest Items",
  }
]
  return (
    <main className='py-12'>
      <div className="container grid grid-cols-12">
        <div className="grid-span-3">sidebar</div>
        <div className="grid-span-9">
          <div className='flex items-center justify-between'>
            <p>Showing  20 of 160 product</p>
            <div className='w-fit flex items-center gap-7'>
              <p>Sort by:</p>
              <SelectInput className='max-w-44' options={sortoptions}/> 
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Shop
