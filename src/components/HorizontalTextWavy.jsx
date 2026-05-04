'use client'

import { motion, useTransform, useScroll, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import useWindow from "./useWindow";
import Section from "@/layout/Section";
import CustomBtn from "./CustomButton";

export const random = (min=-40, max=200) => Math.random() * (max - min) + min;

const texts = "car detailing service at it's finest".split(" ");

const HorizontalTextWavy = () => {
  const targetRef = useRef(null);
  const textRef = useRef(null);

  const finalX = useMotionValue(0);
  const { dimension } = useWindow();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  /* ----------------------------
     Horizontal centering
  -----------------------------*/
  useEffect(() => {
    if (!textRef.current) return;

    const update = () => {
      const textWidth = textRef.current.scrollWidth;
      const offset= isTabletOrMobile?-(textWidth - dimension.width/2) *.9:-(textWidth - dimension.width/2)
      finalX.set(offset);
      // finalX.set(-(textWidth - dimension.width) *1.1);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [dimension.width]);

 

  const x =useTransform(
    scrollYProgress,[0, 0.9],[dimension.width*.92, finalX.get()]
  )

   const swiftx = useSpring(x, { stiffness: 220, damping: 30, mass: 0.3 });
  /* ----------------------------
     Flatten letters
  -----------------------------*/
  const letters = useMemo(
    () =>
      texts.flatMap((word, wi) =>{
        const char= word.split("").map((char, ci) => ({
           char,
           key: `${wi}-${ci}`
         }))


         if(wi<texts.length-1){
          char.push({
            char:"\u00A0",
            key: `${wi}-space`

          })
         }
         return char

      }
      ),
    []
  );

  /* ----------------------------
     Stable random start values
  -----------------------------*/
const opacity =useSpring(useTransform(scrollYProgress, [.9,.95], [0,1]),{ stiffness: 190, damping: 30, mass: 0.3 })
  

  return (
    <section
      ref={targetRef}
      className="relative h-[600svh]  bg-black"
    >
      
      <div className="sticky top-0 h-svh pt-20 pb-5 lg:pt-20 lg:pb-10 overflow-hidden flex items-start">
        <div className="h-full w-full relative">

        <div className="absolute top-0 translate-y-[18%] lg:translate-y-[5%] h-full w-full">
        <motion.h2
          ref={textRef}
          style={{ x:swiftx }}
          className="whitespace-nowrap text-brand-white font-custom text-[5.5em] lg:text-[12em] leading-[0.95] tracking-[.02em]"
        >
          {letters.map((l, i) => {
            const total= letters.length
            const endBefore=isTabletOrMobile?1:.70
            // const endBefore=.72
            // const endBefore=.71
            // const start = (i / total) * endBefore;
            // const start = 0.1+(i / total) * endBefore;
            // const end=start+ endBefore / total


              // const start = (i/total)*endBefore;
              const start = (i/total)*.78;
          const end= start+endBefore/total;
          const progressPoint= (progress)=>{
              const inHalfway = start+(end-start)*progress;
            return inHalfway}

            
          //     const start = i / total;
          // const end = start + 1 / total;
const x =useSpring(useTransform(scrollYProgress, [progressPoint(.50),end], [random(55,85), 0]),{ stiffness: 200, damping: 30, mass: 0.3 })
const options=[isTabletOrMobile?-80:-100,isTabletOrMobile?80:150]
const rand= options[Math.floor(Math.random()* options.length)]
const y =useSpring(useTransform(scrollYProgress, [start,progressPoint(.60),end], [rand,-rand*.5, 0]),{ stiffness: 190, damping: 20, mass: 0.3 })
const rotate =useSpring(useTransform(scrollYProgress, [start,progressPoint(.9),end], [random(-15,15),random(-12,10), 0]),{ stiffness: 190, damping: 30, mass: 0.3 })

const opacity=(start,end)=>{
const opacity =useSpring(useTransform(scrollYProgress, [start,end], [0,1]),{ stiffness: 190, damping: 30, mass: 0.3 })
        return opacity
      }
      return <span  key={l.key} className="relative h-max">
      {i==8?<span className='cursor-pointer w-full absolute bottom-0  translate-y-[55%] translate-x-[85%]'>
        {/* <motion.svg className="horizontal-words__arrow-svg w-[2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386 127" fill="none" >
        <motion.path style={{pathLength:opacity}} initial={{pathLength:0}} transition={{duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path>
        <motion.path style={{pathLength:opacity}}  initial={{pathLength:0}} transition={{type:'spring',stiffness:120,mass:0.3,damping:30,duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path>
        </motion.svg> */}
          <motion.svg className="w-[2.4em] lg:w-[2em]" style={{rotateX:200,rotate:8}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 386 127" fill="none">
          <motion.path style={{pathLength:opacity(start,.4)}}  initial={{pathLength:0}} transition={{duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path>
          <motion.path 
        style={{pathLength:opacity(start,.4)}}  initial={{pathLength:0}} transition={{type:'spring',stiffness:120,mass:0.3,damping:30,duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path></motion.svg>

    </span>:''}

          {/* the smile icon */}
           {/* the smile icon */}
      {i==2?<span className='z-50 cursor-pointer w-full absolute bottom-0 left-0 translate-y-[40%] translate-x-[45%]'>
      <motion.img initial={{scale:0}} whileInView={{scale:1.4,rotate:-20}} transition={{type:'spring',damping:6,stiffness:120}}   src='/truus/smile.svg' className='size-[8em] lg:size-[9em]'/>
      </span>:''}

           {/* the phone icon */}
           {/* the phone icon */}
      {i==16?<span className='z-50 cursor-pointer w-full absolute bottom-0 translate-y-[45%] translate-x-[45%]'>
      <motion.img initial={{scale:0}} whileInView={{scale:1}} transition={{type:'spring',damping:6,stiffness:120}}   src='/truus/phone.svg' className='size-[8em] lg:size-[9em]'/>
      </span>:''}
           {/* the last line */}
       {i==letters.length-1?<span className='w-full absolute top-0 left-0 translate-y-[35%] translate-x-[50%]'>
  <motion.svg className="w-[2.4em] lg:w-[1em]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 127" fill="none">
  <motion.path style={{pathLength:opacity(end,.9)}}  initial={{pathLength:0}}  transition={{type:'spring',damping:20,stiffness:120}} d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.437 125.078L99.6875 107.891" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></motion.path>
  <motion.path style={{pathLength:opacity(end,.9)}}   initial={{pathLength:0}}  transition={{type:'spring',damping:20,stiffness:120}} d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.438 125.078L137.969 110.234" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
  </motion.path></motion.svg>
      </span>:''}

           {/* the actual letter */}
           {/* the actual letter */}
           <motion.span
              style={{
               rotate,y,x
              }}
              className="inline-block mr-[0.08em"
            >
              {l.char}
            </motion.span>
           </span>
           
})}
        </motion.h2>
        </div>
        <Section padding={false} className={'px-5 h-full '}>
          <div className="relative h-full w-full">
        <motion.div style={{opacity}} className="absolute  flex flex-col items-center justify-centr h-full w-full left- bottom-0 translate-y-[50%] lg:translate-y-[55%]">
            <motion.p  className="mb-4 text-para text-center text-brand-white font-body text-balance max-w-[32em]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam cupiditate et error tempora cum expedita odio, accusantium, enim excepturi beatae. Voluptatem eius, aperiam distinctio quo eveniet odit dicta hic!
            </motion.p>
            <CustomBtn>
              click me
              </CustomBtn>
      </motion.div>

          </div>
        </Section>
        </div>
      </div>
    </section>
  );
};

export default HorizontalTextWavy;
