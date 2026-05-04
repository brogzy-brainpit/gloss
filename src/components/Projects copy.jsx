import Section from '@/layout/Section'
import {useState} from 'react'
import {motion} from 'framer-motion'

function Projects() {
    const projects=[
        {   title:'project 01',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat accusamus nisi officiis ab pariatur corporis esse aperiam debitis omnis!',
            image:'/images/001.png'
        },
         {   title:'project 02',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat accusamus nisi officiis ab pariatur corporis esse aperiam debitis omnis!',
            image:'/images/002.png'
        },
         {   title:'project 03',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat accusamus nisi officiis ab pariatur corporis esse aperiam debitis omnis!',
            image:'/images/003.png'
        },
         {   title:'project 04',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat accusamus nisi officiis ab pariatur corporis esse aperiam debitis omnis!',
            image:'/images/004.png'
        },
         {   title:'project 05',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi illo consectetur saepe temporibus aliquid!',
            image:'/images/005.png'
        },
            
        ]
const [selectedProject,setSelectedProject]= useState(null)
  return (
    <div className='hsvh w-full bg-brand-secondary'>
        <Section>
     {projects.map((props,i)=>{
        return (
            <div key={i}
             onMouseOver={()=>{setSelectedProject(i)}}
              onMouseLeave={()=>{setSelectedProject(null)}}
               className='relative'>

            <div className='border-t z-30 relative border-brand-text-dark p-4 bg-slate600'>
                <p className='text-heading2 font-custom text-brand-text-dark'>{props.title}</p>
                </div>
              <Overlay selectedProject={selectedProject} i={i} props={props} />
            </div>
        )
     })}
        </Section>

    </div>
  )
}
const Overlay= ({props,i,selectedProject})=>{
    return (
        <motion.div 
        initial={{clipPath:"inset(0 0 100% 0)"}}
        animate={{clipPath:selectedProject==i?"inset(0 0 0 0)":"inset(0 0 100% 0)"}} 
        className="absolute z-20 [transition:clip-path_.4s] top-0 inset-0 bg-brand-background">{props.description}</motion.div>
    )
}
export default Projects