import React, { useEffect, useRef } from 'react'
import { motion} from 'framer-motion'
import RubberSection from '@/effects/RubberSection';
import StaggerText from '@/effects/StaggerText';
import Section from '@/layout/Section';
import GridColumn from '@/layout/GridColumn';
import { useMediaQuery } from 'react-responsive';
import Copy from '@/effects/Copy';
import { secondaryColor } from '../../data';


function Services() {
   const ref = useRef(null);  
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const texts=
  [{text:'ceramic coating',
    para:'we provide premium car detailing services, restoring your vehicle’s shine inside and out with expert care, deep cleaning, and precision finishing to keep your car looking brand new every time.',
      url:'#',img:'/images/service01.png',y:isTabletOrMobile ? 0 : -20,initialY:0
    }, {text:'interior detailing',
      para:'we provide premium car detailing services, restoring your vehicle’s shine inside and out with expert care, deep cleaning, and precision finishing to keep your car looking brand new every time.',
      url:'#',img:'/images/service02.png',y:isTabletOrMobile ? 0 : -100,initialY:0
    }, {text:'exterior detailing',
      para:'we provide premium car detailing services, restoring your vehicle’s shine inside and out with expert care, deep cleaning, and precision finishing to keep your car looking brand new every time.',
      url:'#',img:'/images/service03.png',y:isTabletOrMobile ? 0 : -180,initialY:0
    }]
  return (
    <div ref={ref} className='bg-brand-white w-full min-h-[60vh]'>
        <Section>
            <GridColumn>
                <div className='lg:col-span-5 lg:col-start-1'>
                    <h2 className='font-custom text-brand-black text-heading2 mb-4'>
                   <span className=' capitalize'>services </span>
                   
                   </h2>
                </div>
                <div className='col-span-4 lg:col-span-7  col-start-3'>
                                    <p className='text-heading4 leading-[1.2] font-custom text-brand-black mb-10'>
                                       <Copy
                                                        stagger={0.05}
                                                        colorBlock={'#101718'}
                                                        trigger={true}
                                                        text={'We provide premium car detailing services, restoring your vehicle’s shine inside and out with expert care, deep cleaning, and precision finishing to keep your car looking brand new every time.'}
                                                      />

                                    </p>
                                  
                </div>
        
            </GridColumn>
          
        </Section>
        <Section>
              <GridColumn>
                  <div className="grid grid-cols-1 col-span-full md:grid-cols-3 gap-6  w-full">
  {/* Left side - stacked items */}
  {texts.map(({text,para,url,img,y,initialY},index)=>{

     return (
   <RubberSection defaultStart={["start 0.89", "0.7 start"]} defaultY={[initialY, y]} >
        <div className={`${index === 1 ? 'text-brand-black' : 'text-brand-white'} ${index === 1 ? 'bg-brand-secondary' : 'bg-brand-black'} cursor-pointer overflow-hidden flex justify-between  relative w-full py-10 px-2 h-[350px] lg:rounded-xl rounded-sm items-start gap-4 flex-col`}>
  {/* Background image */}
 <h2 className=" text-heading3 capitalize  font-custom z-10">{text}</h2>
 <p className=" text-para w-[90%]  z-10">{para}</p>

</div>
   </RubberSection>

    )
   
  })}
         
          
  </div>
            </GridColumn>
        </Section>
    
    </div>
  )
}

export default Services