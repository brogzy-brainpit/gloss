import React, { useEffect, useRef, useState } from 'react'
import useWindow from './useWindow'
import {motion, progress, useAnimate, useAnimation, useScroll, useSpring, useTransform} from 'framer-motion'
import Copy, { mergeRefs } from '@/effects/Copy'
import { accentColor, secondaryColor } from '../../data'
import Section from '@/layout/Section'

function SpreadCards() {
    const {dimension}=useWindow()
    const [positions,setPositions]=useState([])
    const [triggerCardSpread, SetTriggerCardSpread]=useState(false)
   const [scope,animate]= useAnimate()
   const controls= useAnimation()
   
   const trackScroll= useRef(null)
   const ref= useRef([])
   const {scrollYProgress}= useScroll({target:trackScroll,offset:['start end', 'end start']})
  
   scrollYProgress.on('change',(progress)=>{
    // animate('.card',{y:(i)=>(30*i)},{type:'spring',stiffness:120,damping:8,})
    if(progress>=.4){

        SetTriggerCardSpread(true)
    }else if(progress<=.3){
        SetTriggerCardSpread(false)

    }
   })
    useEffect(()=>{
const AllCards= Array.from(ref.current)
 if(triggerCardSpread){
   controls.start('spread')
 }else{
   controls.start('initial')
    

 }
   },[triggerCardSpread])
    const cards=[
        {
        bg:secondaryColor,
        img:'/images/S/Valet.jpg',
    },
      {
        bg:secondaryColor,
        img: '/images/S/SBoot.jpg',
    },
      {
        bg:secondaryColor,
        img:  '/images/S/STire.jpg',
    },
      {
        bg:secondaryColor,
        img:  '/images/S/SLambo.jpg',
    },
      {
        bg:secondaryColor,
        img: '/images/S/SUrus.jpg',
    },
]
 const check=(i)=>{
        if(i==0){
            return {x:'-100%',
              // y:30,
              rotateZ:-11,scale:.78}
        }else if(i==1){
            return {x:'-60%',
              // y:10,
              rotateZ:-10,
              scale:.9}
        }else if(i==2){
            return {x:0}

        }else if(i==3){
             return {x:'60%',
              // y:10,
              rotateZ:10,scale:.9}
        }else if(i==4){
            return {x:'100%',
              // y:30,
              rotateZ:11,scale:.78}
        }
    }
const spreadCard={
  initial:{
     x:0,
     rotateZ:0,
     scale:1,
     
  },
  spread:(i)=>({
    ...check(i),
    transition:{type:'spring',stiffness:120,damping:8,}
    // x:i==0?'-100%':i==1?'-60%':i==2?0:i==3?'60%':'100%',
    // // y:i==0?30:i==1?10:i==2?0:i==3?10:30,
    // rotateZ:i==0?-15:i==1?-10:i==2?0:i==3?10:15,
    // scale:i==0?.85:i==1?.9:i==2?1:i==3?.9:.85,
}),
}
  return (
    <div className=' h-sv bg-black overflow-hidden'>
    <div ref={mergeRefs(trackScroll,scope)} className='flex h-[70svh]  justify-center relative items-center w-full'>

        {cards.map(({img},i)=>{
           const middleCard= Math.floor(cards.length/2)
    const z= cards.length - Math.abs(i-middleCard)
          const y= useSpring(useTransform(scrollYProgress,[0.2,.4],[i*20,0]),{stiffness:130,damping:20})
            return (
    <motion.div style={{y,zIndex:z,borderColor:secondaryColor,borderWidth:'.3em'}} variants={spreadCard} animate={controls} custom={i} className={`overflow-hidden card absolute [aspect-ratio:5/7]  h-[16em] w-[10em] lg:h-[23em] lg:w-[18em] rounded-2xl `}>
            
     <img src={img} className='object-cover w-full h-full'/>             
                </motion.div>
            )
        })}
    </div>
   <Section>
         <div className=' text-heading3 text-brand-white text-center leading-[1.1] font-body max-w-[23em] mx-auto my-4 relative w-[75%] h-full overflow-hidden'>
         <Copy justify='center' trigger={true}  colorBlock={secondaryColor} text={'Creative Web Design trends are what keeps our Productivity Alive as Designers. Shout out to all Creative Minds giving us us what we need '}>
         
         </Copy>
   
         </div>
           

          </Section>
    </div>
  )
}

export default SpreadCards