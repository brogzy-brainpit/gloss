// import Copy from '@/effects/Copy';
// import GridColumn from '@/layout/GridColumn';
import { useScroll, useTransform ,motion, useSpring} from 'framer-motion'
import React, { useRef } from 'react'
import ImageEffect from './ImageEffect';
import SlideUpText from '@/effects/SlideUpText';
import { useMediaQuery } from 'react-responsive';
import { secondaryColor } from '../../data';


export function mergeRefs(...refs) {
  return (el) => {
    refs.forEach((r) => {
      if (!r) return;
      if (typeof r === "function") r(el);
      else r.current = el;
    });
  };
}
function HorizontalScrollPanel() {
  const ref=useRef(null)
   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const {scrollYProgress}=useScroll({target:ref,offset:['start start','end end']})
  const {scrollYProgress}=useScroll({target:ref,offset:['start start','end end']})
  scrollYProgress.on('change',(progress)=>{
    console.log(progress)

  })
  const x1= useTransform(scrollYProgress,[0,1],[isTabletOrMobile?'0%':'30%','-66.6667%']);
  const x= useSpring(x1,{stiffness:200,damping:30,mass:.3});
  return (
   <section ref={ref} className='relative h-[400svh] w-full bg-brand-white'>
    <div className="sticky top-0 h-screen overflow-hidden">
      <motion.div style={{x}} className='lg:w-[300vw] w-[1200vw] flex h-full'>
        {/* <div className='w-screen h-full bg-purple-800 flex items-center justify-center text7xl text-black'>
          slide 01
        </div> */}

  <div className='lg:w-[100vw]  w-[300vw] p-5 h-screen  flex gap-[2.8em] items-center justify-center text7xl text-black'>
          <div className='flex-1 flex  justify-between flex-col h-full '>
            <Content color={secondaryColor} src={'/images/S/SBentley.jpg'} text={'bentley, 2024'} className=''/>
            <div className='flex w-full items-end  self-end justify-end'>

            <Content src={'/images/S/SBenz.jpg'}  text={'mercedez benz, 2025'} className='flelex-col'/>
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-end h-full '>
             <h2 className='w-[80%] lg:w-[75%] mb-[2em] text-para leading-[1] font-body text-black'>
              {/* <SlideUpText text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, asperiores?'} trigger={true}/> */}
            Lorem, Doloremque modi recusandae dolorem odit consectetur asperiores omnis culpa unde ipsam. Expedita, aut. Perspiciatis amet, a nihil aut aperiam expedita earum ea.
            </h2>
            <ImageEffect className='w-[30em] !h-auto' img='/images/S/SBenz2.jpg' />
            {/* <Content src={'/images/001.png'} text={'Qatar, 2024'} className='w-[30em] !h-auto'/> */}

             {/* <img className='my-2 object-cover w-[100%] ' src={'/images/001.png'}/> */}
          </div>
         <div className='flex-1 flex  items-end justify-between flex-col h-full '>
            <Content color={secondaryColor} src={'/images/S/SBenz3.jpg'} text={'Benz, 2024'} className=''/>
            <div className='flex w-full justify-start'>

            <Content color={secondaryColor}  src={'/images/S/SBmw.jpg'}  text={'BMW, 2019'} className='flelex-col'/>
            </div>
          </div>
        
             

         
        </div>
        <div className='lg:w-[100vw] w-[300vw]  p-5 h-screen hidde flex gap-[2.8em] items-center justify-center text7xl text-black'>
          <div className='flex-1 flex  justify-center items-center flex-col h-full '>
            <Content src={'/images/S/Sboot.jpg'} text={'Wagon Boot, 2024'} className=''/>
           
          </div>
          <div className='flex-1 flex flex-col justify-end h-full '>
             <h2 className='w-[80%] lg:w-[60%] mb-[3em] text-para leading-[1] font-body text-black'>
              <SlideUpText text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, asperiores?'} trigger={true}/>
            </h2>
            <ImageEffect className='w-[30em] !h-auto' img='/images/S/SLaboWash.jpg' />
            {/* <Content src={'/images/001.png'} text={'Qatar, 2024'} className='w-[30em] !h-auto'/> */}

             {/* <img className='my-2 object-cover w-[100%] ' src={'/images/001.png'}/> */}
          </div>
         <div className='flex-1 flex  items-end justify-between flex-col h-full '>
            <Content color={secondaryColor} src={'/images/S/SLambo.jpg'} text={'Lamboghini, 2024'} className=''/>
            <div className='flex w-full justify-start'>

            <Content src={'/images/S/SSeat.jpg'}  text={'interior, 2026'} className='flelex-col'/>
            </div>
          </div>
        
             

         
        </div>
        <div className='lg:w-[100vw] w-[300vw] p-5 h-screen  flex gap-[2.8em] items-center justify-center text7xl text-black'>
          <div className='flex-1 flex  justify-between flex-col h-full '>
            <Content src={'/images/S/STire.jpg'} text={'Urus Tire, 2024'} className=''/>
            <div className='flex w-full items-end  self-end justify-end'>

            <Content color={secondaryColor} src={'/images/S/SUrus.jpg'}  text={'lamboghini Urus, 2008'} className='flelex-col'/>
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-end h-full '>
             <h2 className='w-[80%] lg:w-[70%] mb-[2em] text-para leading-[.9] font-body text-black'>
              <SlideUpText text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, asperiores?'} trigger={true}/>
            </h2>
            <ImageEffect className='w-[30em] !h-auto' img='/images/S/SWagon.jpg' />
            {/* <Content src={'/images/001.png'} text={'Qatar, 2024'} className='w-[30em] !h-auto'/> */}

             {/* <img className='my-2 object-cover w-[100%] ' src={'/images/001.png'}/> */}
          </div>
         <div className='flex-1 flex  items-end justify-between flex-col h-full '>
            <Content color={secondaryColor} src={'/images/S/SWagon2.jpg'} text={'G.wagon, 2024'} className=''/>
            <div className='flex w-full justify-start'>

            <Content src={'/images/S/SBenz3.jpg'}  text={'Benz, 2026'} className='flelex-col'/>
            </div>
          </div>
        
             

         
        </div>
       
       

      </motion.div>
    </div>

   </section>
  )
}


const Content=({className='',color={secondaryColor},text,src='/images/003.png'})=>{
  return (
    <div   >
            <h2>
              {/* <SlideUpText text={text} preLoaderOut={true}/> */}
              {text}
            </h2>
            {/* <img className={` ${className} max-w-[30em] my-2 object-cover  h-[40svh]`} src={src}/> */}
             <ImageEffect height='40vh' color={color} className='max-w-[30em] my-2 object-cover  h-[20svh]' img={src} />
              </div>
  )
}
export default HorizontalScrollPanel