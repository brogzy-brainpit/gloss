import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {useAnimate } from 'framer-motion'
import SlideUpText from '@/effects/SlideUpText'
// import LandingVideo from './LandingVideo'
import useWindow from "./useWindow";
import Copy from '@/effects/Copy'
import { secondaryColor } from '../../data'


function Landing({setPreLoaderOut,preLoaderOut}) {
  const {dimension} = useWindow();
const [preLoaderOut2,setPreLoaderOut2]=useState(true)
  const ease = [0.9, 0, 0.1, 1];
 const [scope, animate] = useAnimate();
 const [scope2=scope, animate2=animate] = useAnimate();
 const [index, setIndex] = useState(0);
//  const [preLoaderOut, setPreLoaderOut] = useState(false);
 const image=
 [
  // '/images/S/Valet.jpg',
  '/images/S/handsome.png',
  '/images/S/SBoot.jpg',
  '/images/S/detailer.png',
  '/images/S/SLambo.jpg',
  '/images/S/SUrus.jpg',
]
 const runAnimation=async(width)=>{
  // small delay so browser paints initial state
    // await new Promise((r) => setTimeout(r, 600));
    await animate([
    [ ".landing", { opacity:1 },{ duration: 1.2}],
    [ ".landing", { clipPath:'inset(0 48% 0 48%)' },{ duration: 1.2, ease, }],
    [".text-01", { x:'-20%' }, { duration: 1.2, ease,}],
    [".text-02", { x:'20%' }, { duration: 1.2, ease,at:'<'}],
    [ ".landing", { clipPath:'inset(0 0% 0 0%)' },{ duration: 1.2, ease,at:'<' }]

  ])
     // small delay so browser paints initial state
    await new Promise((r) => setTimeout(r, 100));
    setIndex(1)
     await new Promise((r) => setTimeout(r, 200));
    setIndex(2)
     await new Promise((r) => setTimeout(r, 200));
    setIndex(4)
     await new Promise((r) => setTimeout(r, 200));
     setIndex(3)
     await new Promise((r) => setTimeout(r, 200));
    setIndex(0)
    await new Promise((r) => setTimeout(r, 600));
    setPreLoaderOut2(false)
    await new Promise((r) => setTimeout(r, 1400));
    animate(
     ".text-01",
     { x:`-100%`,scale:1,},
     { duration: 2, ease, }
   );
     animate(
     ".text-02",
     { x:`100%`,scale:1,},
     { duration: 2, ease,}
   );
 animate(
      ".landing",
      { scale:1 },
      { duration: 2, ease, onComplete:()=>{
        window.scrollTo({top:0})
        setPreLoaderOut(true)
    //    const timer= setTimeout(() => {
    //     }, 200);
    // // return ()=>clearTimeout(timer)

      } 
      }
    );
 }

const initialWidthRef=useRef(null)

 useEffect(()=>{
if(dimension.width>0 && initialWidthRef.current===null){
  initialWidthRef.current= dimension.width
  runAnimation(initialWidthRef.current);
}

},[dimension.width])
   
  return (
    <div ref={scope} className={` ${preLoaderOut?'relative':'fixed top-0 left-0'}  bg-brand-white z-[998] bgblue-900 h-svh w-full flex justify-center items-center`}>
       <div ref={scope2} className=' z-preloadr overflow-hidden absolute left-[50%] -translate-x-1/2 top-[50%] w-full -translate-y-1/2 flex gap-3 items-center justify-center h-svh  b-pink-700'>
              <h2   className='absolute bottom-[5%] text-brand-black flex-1 [letter-spacing:-0.4px] flex justify-end bgslate-600 text-para  font-body'>
              <SlideUpText delay={0.06} preLoaderOut={preLoaderOut2} gap='.2em' text={'site by memet'} initialDelay={2}/>
                </h2>
              <h2   className='text-01 text-brand-black flex-1 [letter-spacing:-0.4px] flex justify-end text-heading1 font-custom'>
              <SlideUpText delay={0.06} preLoaderOut={true} gap='20px' text={'Gloss'} initialDelay={.7}/>
                </h2>
              <h2   className=' text-02 text-brand-black flex-1 [letter-spacing:-.4px] text-heading1 font-custom'>
                
              <SlideUpText delay={0.06} preLoaderOut={true} gap='20px' text={'Autos'} initialDelay={1}/>
      
                </h2>
            </div>
      <div  className='flex items-end landing [clip-path:inset(50%_50%_50%_50%)] opacity-0 scale-[0.2] bg-purple-60 background-image:url(/images/001.png)] bg-cover bg-no-repeat bg-center w-full h-full '
        >

<div className='absolute top-0 left-0 w-full h-full'>
  <Image  height={1400} width={1400} src={image[index]} className='w-full h-full  object-cover'/>
</div>
<div className='absolute bg-black/35 top-0 left-0 w-full h-full'/>

      <Section>
        <GridColumn>
      <div className='col-span-full lg:col-span-10'>
        <h2 className='text-heading4 mb-5 leading-[1] text-brand-white    text-brand-text-dark font-custom2 font-bold'>
         <Copy   stagger={0.05} colorBlock={secondaryColor}   trigger={preLoaderOut} text={'design by Memet'}/>
        {/* <SlideUpText delay={0.06} preLoaderOut={preLoaderOut} gap='20px' text={'design by memet'} initialDelay={0}/> */}
        </h2>
         <h2 className='text-display leading-[1] text-brand-white   capitalize [letter-spacing:-1px font-custom font-bold'>
         <Copy intialDelay={.2} customWord={[0]} customWordColor={secondaryColor} stagger={0.05} colorBlock={secondaryColor} trigger={preLoaderOut} text={'Elevate Your Car With Precision Detailing'}/>
        {/* <SlideUpText delay={0.06} preLoaderOut={preLoaderOut} gap='20px' text={'design by memet'} initialDelay={0}/> */}
        </h2>
      </div>

        </GridColumn>

      </Section>
      </div>

    </div>
  )
}

export default Landing