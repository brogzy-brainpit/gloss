import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/layout/Section'
import GridColumn from '@/layout/GridColumn'
import { Mail } from 'lucide-react'
function Map() {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
   className="w-full h-svh overflow-hidden rounded-2xl">
      <Section className='h-full w-full '>
        <GridColumn className='h-full w-full '>
            <div className='col-span-4'>
                 <h2 className='font-custom text-brand-black text-heading2 mb-4'>
                   <span className=' capitalize'>contact us</span>
                   </h2>
                   <p className='my-10 text-para leading-[1.2] font-body text-brand-black mb-10'>
                        We are here to assist you with any inquiries, feedback, or support you may need. Please feel free to reach out to us through any of the following channels:
                      </p>

                      <div>
                        <div className="flex items-center gap-3">
                        <Mail size={18} className="opacity-60" />
                        
                        <p className="text-lg">
                            hello@studio.com
                        </p>
                        </div>
                      </div>
            </div>
            <div className='col-span-full lg:col-span-8'>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45060306.91979327!2d-129.94270855!3d46.423669000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7708fcf1663%3A0x4eac67c53a584ea3!2sSHINE%20CARWASH%20MOBILE!5e0!3m2!1sen!2sng!4v1779110692416!5m2!1sen!2sng"
      

            width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
            </div>
        </GridColumn>
      </Section>
    </motion.div>
  )
}

export default Map