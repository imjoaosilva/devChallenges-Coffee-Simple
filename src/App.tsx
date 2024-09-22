import { useEffect, useState } from 'react';
import Vector from './assets/vector.svg';
import { ProductData } from './@types/product';
import axios from 'axios';
import { Product } from './components/product';

function App() {
  const [data, setData] = useState<ProductData[]>([])

  useEffect(() => {
    axios.get<ProductData[]>('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(r => setData(r.data))
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className='flex justify-center overflow-x-hidden mx-9 sm:mx-0'>
      <main className='relative bg-mainbg rounded-xl py-10 sm:py-16 md:py-20 lg:py-24 overflow-hidden max-w-[90%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] min-w-[400px]'>
        <img
          src={Vector}
          alt='Vector image'
          className='absolute hidden sm:block top-0 left-1/2 transform -translate-x-1/2 sm:top-4 sm:left-[50%] sm:transform-none w-3/4 sm:w-auto max-w-[15rem]'
        />

        <h1 className='text-headingtext text-center text-4xl font-bold mb-4'>
          Our Collection
        </h1>
        <p className='relative text-sm max-w-56 sm:text-base sm:max-w-[26rem] text-bodytext font-semibold text-center w-full mx-auto mb-4 lg:max-w-[32rem]'>
          Introducing our Coffee Collection, a selection of unique coffees
          from different roast types and origins, expertly roasted in small
          batches and shipped fresh weekly.
        </p>

        <div className='flex justify-center gap-6 mt-3'>
          <button className='bg-bodytext rounded-lg py-2 px-3 text-headingtext text-label font-semibold'>All Products</button>
          <button className='text-headingtext text-label'>Available now</button>
        </div>

        <div className='flex flex-wrap gap-4 mx-auto max-w-5xl justify-center mt-10'>
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App;
