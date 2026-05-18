import Section from '@/layout/Section'
import { useAnimate } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import RubberSection from './RubberSection'
import Copy from '@/effects/Copy'
import GridColumn from '@/layout/GridColumn'
import ImageEffect from './ImageEffect'
import { secondaryColor } from '../../data'

function Section1({preLoaderOut}) {
  
  return (
    <div className='flex justify-between h-svh pt-9 bg-[#101718]'>
          <Section>
         <div className=' text-[clamp(2.4em,_4vw_+_0.5em,_4em)] flex items-center justify-center text-brand-white text-center leading-[1.1] font-custom max-w-[23em] mx-auto my-4 relative w-[75%] h-full overflow-hidden'>
         <Copy justify='center' trigger={preLoaderOut}  colorBlock={secondaryColor} text={'Creative Web Design trends are what keeps our Productivity Alive as Designers. Shout out to all Creative Minds giving us us what we need '}>
         
         </Copy>
   
         </div>
           

          </Section>
         </div>
  )
}

export default Section1
