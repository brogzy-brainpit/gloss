import Section from '@/layout/Section'
import {useEffect, useRef, useState} from 'react'
import {motion, useInView, useTransform} from 'framer-motion'
import Image from 'next/image'
import GridColumn from '@/layout/GridColumn'
import { ArrowBigRight } from 'lucide-react'
import useMouse from '@/effects/hooks/useMouse'
import Copy from '@/effects/Copy'
import { secondaryColor } from '../../data'

function Projects() {
  
    const projects=[
        {   title:'project 01',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat accusamus nisi officiis ab pariatur corporis esse aperiam debitis omnis!',
            image:'/images/S/SWagon.jpg',
            service:"full valet"
        },
         {   title:'project 02',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat accusamus nisi officiis ab pariatur corporis esse aperiam debitis omnis!',
            image:'/images/S/SLaboWash.jpg',
            service:"interior valet"
        },
         {   title:'project 03',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat accusamus nisi officiis ab pariatur corporis esse aperiam debitis omnis!',
            image:'/images/S/SPorsche.jpg',
            service:"exterior valet"
        },
         {   title:'project 04',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat accusamus nisi officiis ab pariatur corporis esse aperiam debitis omnis!',
            image:'/images/S/SBmw.jpg',
            service:"full valet"
        },
         {   title:'project 05',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi illo consectetur saepe temporibus aliquid!',
            image:'/images/S/SLaboWash.jpg',
            service:"interior valet"
        },
            
        ]
const [selectedProject,setSelectedProject]= useState(null)
const MotionImage= motion(Image)
 const {x,y}=  useMouse()
const newX= useTransform(x,x=>x+14)
const newY= useTransform(y,x=>x+14)
const [isMouseActiv,setIsMouseActiv]=useState(false)
  return (
    <div className='hsvh w-full bg-[#101718]'>
        
        <Section>
            <GridColumn>
                <div className='col-span-full lg:col-span-6'>
                    <h2 className='font-custom text-brand-white text-heading2 mb-4'>
                   <span className=' capitalize'>projects </span>
                    <span className='font-body opacity-35 text-para'><sup >05</sup></span>
                   
                   </h2>
                </div>

                <div className='col-span-4 lg:col-span-4  col-start-3 lg:col-start-9'>
                  <p className='font-body my-10 lg:my-0 text-para text-brand-white capitalize'>
                  <Copy
                  stagger={0.05}
                  colorBlock={secondaryColor}
                  trigger={true}
                  text={'A collection of professional car detailing projects focused on deep cleaning, paint enhancement, interior restoration, and premium finishing for a clean, polished appearance.'}
                  /> 
                      </p>
                  
                </div>

            </GridColumn>
        </Section>
        <div className='w-full h-full' onMouseEnter={()=>{setIsMouseActiv(true)}} onMouseLeave={()=>{setIsMouseActiv(false)}} >
 <motion.div initial={{scale:0}}  animate={{scale:isMouseActiv?1:0}} style={{x:newX,y:newY}}
       className='fixed hidden md:flex lg:flex pointer-events-none cursor-none items-center
        justify-center z-[999] top-0 left-0 w-[7em] 
        roundedfull h-[50px] bg-brand-black text-brand-secondary capitalize text-[1.2em] tracking-wide font-custom'>
view project
       </motion.div>

     {projects.map((props,i)=>{
        const ref = useRef(null)

  // activates when element reaches center-ish of viewport
  const isInView = useInView(ref, {
    margin: '-45% 0px -45% 0px',
  })

  // mobile auto activation
  useEffect(() => {
    if (window.innerWidth < 1024) {
      if (isInView) {
        setSelectedProject(i)
      }
    }
  }, [isInView, i, setSelectedProject])

        return (
            <div key={i}
              ref={ref}
      onMouseOver={() => {
        if (window.innerWidth >= 1024) {
          setSelectedProject(i)
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) {
          setSelectedProject(null)
        }
      }}
               className='relative w-full'>
         
            <div className='border-b w-full z-30 relative border-brand-secondary p-4' >
               <Section padding={false} className={'w-full relative'}>
                <GridColumn>
                    <div className="lg:col-span-4  col-span-2 flex items-center">
                <motion.p  className='text-heading3 leading-[1.3] font-custom text-brand-white'>{props.title}</motion.p>
                    </div>
                      <div className="lg:col-start-5 lg:col-span-4 col-span-2 flex justify-center items-center">
                <motion.img
                initial={{clipPath:"inset(0 50% 0 50%)"}}
                exit={{clipPath:"inset(0 50% 0 50%)"}}
        animate={{clipPath:selectedProject==i?"inset(0 0 0 0)":"inset(0 50% 0 50%)"}} 
       
                className=' aspect-[8/6] h-[8em] w-[14em] object-cover' src={props.image} width={300} height={300}/>
              
                    </div>
                      <div className="lg:col-span-4 col-span-2 lg:col-start-11  relative flex justify-end items-center ">
                <motion.p  className='text-para leading-[.3] capitalize  font-body text-brand-white'>{props.service}</motion.p>
               
                    </div>
                </GridColumn>
               </Section>
              <Overlay selectedProject={selectedProject} i={i} props={props} />
                </div>
            </div>
        )
     })}
        </div>
       

    </div>
  )
}
const Overlay= ({props,i,selectedProject})=>{
    return (
        <motion.div 
        initial={{clipPath:"inset(0 0 100% 0)"}}
        animate={{clipPath:selectedProject==i?"inset(0 0 0 0)":"inset(0 0 100% 0)"}} 
       
        className="absolute h-full w-full z-20 [transition:clip-path_.4s top-0 inset-0 bg-brand-secondary">

         <Section padding={false} className={' h-full w-full relative'}>
            <GridColumn className={'h-full w-full relative'}>
                 <div className="lg:col-span-4 col-span-2 flex items-center">
                <p className='text-heading3 leading-[1.3] font-custom text-brand-black'>{props.title}</p>
                    </div>
                      <div className="lg:col-span-4 col-span-2 flex justify-center items-center">
                <motion.img
                initial={{clipPath:"inset(0 50% 0 50%)"}}
                exit={{clipPath:"inset(0 50% 0 50%)"}}
        animate={{clipPath:selectedProject==i?"inset(0 0 0 0)":"inset(0 50% 0 50%)"}} 
       
                className='aspect-[8/6] h-[8em] w-[14em] object-cover' src={props.image} width={300} height={300}/>
              
                    </div>
                 <div className="lg:col-start-9  lg:col-span-4 col-span-2 relative  flex justify-cente items-center ">
                <p className='font-body text-para text-brand-black capitalize'> {'dolor sit amet consectetur adipisicing elit. Minima iusto ducimus expedita doloribus aliquid mollitia.'.substring(0,40)}</p>
                  
                    </div>
            </GridColumn>
         </Section>
           </motion.div>
    )
}
export default Projects