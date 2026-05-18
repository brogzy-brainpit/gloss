import SmoothScroll from "@/providers/Lenis";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import {useState } from "react";

import Section1 from '@/components/Section1';
import SlideIn from '@/components/SlideIn';
import SpreadCards from '@/components/SpreadCards';
import Scale from '@/components/Scale';
import Projects from '@/components/Projects';
import HorizontalTextWavy from "@/components/HorizontalTextWavy";

function PageContent() {
   const [isLoading,setIsLoading]=useState(true)
   const [isLoading2,setIsLoading2]=useState(true)
   const [preLoaderOut,setPreLoaderOut]=useState(false)

  //  document.body.style.cursor="default"
 
  return (
    <SmoothScroll>

    {/* <AnimatePresence  mode="sync" onExitComplete={()=>{setPreLoaderOut(true)}}>
    {isLoading &&  <Preloader key={'preloader'}/>}
     <Preloader key={'preloader'}/>
    </AnimatePresence> */}
    

      <Header preLoaderOut={preLoaderOut}/>
     {/* <Section2 preLoaderOut={preLoaderOut}/> */}
      <Landing setPreLoaderOut={setPreLoaderOut} preLoaderOut={preLoaderOut}/> 
{!preLoaderOut && <div className='h-[1000svh]'/>}
     <Section1  preLoaderOut={preLoaderOut}/>
     <Scale/>
     <SlideIn/>
     <Projects/>
     <SpreadCards/>
     {/* <HorizontalTextWavy/> */}
     {/* <FlipCardOnScroll/> */}
      {/* <Skiper49/> */}
    </SmoothScroll>
           
    
  );
}

export default function Home() {
  return (
    <main>
        <PageContent />
    </main>
  );
}
