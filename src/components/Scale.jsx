import { useScroll, useSpring, useTransform,motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import useWindow from './useWindow';
import Section from '@/layout/Section';
import GridColumn from '@/layout/GridColumn';
import Copy from '@/effects/Copy';
import { secondaryColor } from '../../data';

function Scale() {
  const {dimension} = useWindow();
      const scrollTracker= useRef(null)
        const {scrollYProgress}=useScroll({target:scrollTracker,offset:['start start','end end']})
       
               const scale=useSpring(useTransform(scrollYProgress,[.4,.9],[0,1]),{stiffness:120,damping:10,mass:.2})
               const x1=useSpring(useTransform(scrollYProgress,[.4,.9],['0%',`${-dimension.width/2}px`]),{stiffness:120,damping:10,mass:.2})
               const x2=useSpring(useTransform(scrollYProgress,[.4,.9],['0%',`${dimension.width/2}px`]),{stiffness:120,damping:10,mass:.2})
              
               const textOpacity=useTransform(scrollYProgress,[.2,.4],[1,0])
                  
               const arr= [8,7,6,5,4,3]    
              //  const arr= [15,14,13,12,11,109,8,7,6,5,4,3,2,1]    
  return (
    <div ref={scrollTracker} className='relative w-full h-[400vh]'>
         <div className='sticky overflow-hidden top-0 w-full h-svh bg-[#101718] flex  items-center justify-center' >
                  <Section className={'absolute h-full top-0 inset-0'}>
                    <GridColumn className={'h-full'}>
                      <div className='col-start-1 col-span-4 lg:col-start-1 flex items-en lg:col-span-4'>
                        <motion.h2 style={{opacity:textOpacity}} className='text-para text-brand-white font-body'>
                          <Copy colorBlock={secondaryColor} trigger  text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi similique numquam, tempora sunt sapiente cum totam reiciendis nisi quia officiis hic'}/>
                          </motion.h2>
                      </div>
                       <div className='col-start-3 col-span-4 lg:col-start-9 flex items-end lg:col-span-4'>
                        <motion.h2 style={{opacity:textOpacity}} className='text-para text-brand-white font-body'>
                          <Copy colorBlock={secondaryColor} trigger  text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi similique numquam, tempora sunt sapiente cum totam reiciendis nisi quia officiis hic'}/>
                          </motion.h2>
                      </div>
                    </GridColumn>
                  </Section>
                   <div className='flex w-full items-center justify-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                       <motion.h2  style={{x:x1}} className='text-brand-white font-custom2 leading-[.9] text-heading2 capitalize'>memet</motion.h2>
                       <motion.h2  style={{x:x2}} className='text-brand-white font-custom2 leading-[.9] text-heading2 capitalize'>oumar</motion.h2>
                   </div>
           <motion.div style={{scale}} className='overflow-hidden  bannerimg-container absolute top-0 w-full h-full'>
                      <div className="img "><Image fill className='w-full object-cover h-screen object-[50%_14%]'  src='/images/S/detailer.png' /></div>
              </motion.div>

        </div>
    </div>
  )
}

export default Scale