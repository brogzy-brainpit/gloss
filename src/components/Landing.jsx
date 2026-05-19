import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useAnimate } from 'framer-motion'
import SlideUpText from '@/effects/SlideUpText'
// import LandingVideo from './LandingVideo'
import useWindow from "./useWindow";
import Copy from '@/effects/Copy'
import { secondaryColor } from '../../data'

function Landing({ setPreLoaderOut, preLoaderOut }) {
  const { dimension } = useWindow();

  const [preLoaderOut2, setPreLoaderOut2] = useState(true)
  const [index, setIndex] = useState(0);

  const ease = [0.9, 0, 0.1, 1];

  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const image = [
    '/images/S/handsome.png',
    '/images/S/SBoot.jpg',
    '/images/S/detailer.png',
    '/images/S/SLambo.jpg',
    '/images/S/SUrus.jpg',
  ]

  const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // PRELOAD IMAGES
  const preloadImages = async () => {
    const promises = image.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();

        img.src = src;

        img.onload = () => resolve(src);
        img.onerror = reject;
      });
    });

    await Promise.all(promises);
  };

  const runAnimation = async (width) => {

    await animate([
      [".landing", { opacity: 1 }, { duration: 1.2 }],
      [".landing", { clipPath: 'inset(0 48% 0 48%)' }, { duration: 1.2, ease }],
      [".text-01", { x: '-20%' }, { duration: 1.2, ease }],
      [".text-02", { x: '20%' }, { duration: 1.2, ease, at: '<' }],
      [".landing", { clipPath: 'inset(0 0% 0 0%)' }, { duration: 1.2, ease, at: '<' }]
    ])

    // IMAGE SEQUENCE
    await delay(100);

    setIndex(1)
    await delay(200);

    setIndex(2)
    await delay(200);

    setIndex(4)
    await delay(200);

    setIndex(3)
    await delay(200);

    setIndex(0)

    await delay(600);

    setPreLoaderOut2(false)

    await delay(1400);

    animate(
      ".text-01",
      { x: `-100%`, scale: 1 },
      { duration: 2, ease }
    );

    animate(
      ".text-02",
      { x: `100%`, scale: 1 },
      { duration: 2, ease }
    );

    animate(
      ".landing",
      { scale: 1 },
      {
        duration: 2,
        ease,
        onComplete: () => {
          window.scrollTo({ top: 0 })
          setPreLoaderOut(true)
        }
      }
    );
  }

  const initialWidthRef = useRef(null)

  useEffect(() => {

    const init = async () => {
      if (dimension.width > 0 && initialWidthRef.current === null) {

        initialWidthRef.current = dimension.width

        // WAIT FOR ALL IMAGES
        await preloadImages();

        // THEN START
        runAnimation(initialWidthRef.current);
      }
    }

    init();

  }, [dimension.width])

  return (
    <div
      ref={scope}
      className={`${preLoaderOut ? 'relative' : 'fixed top-0 left-0'} bg-brand-white z-[998] h-svh w-full flex justify-center items-center`}
    >

      <div
        ref={scope2}
        className='z-preloadr overflow-hidden absolute left-[50%] -translate-x-1/2 top-[50%] w-full -translate-y-1/2 flex gap-3 items-center justify-center h-svh'
      >

        <h2 className='absolute bottom-[5%] text-brand-black flex-1 [letter-spacing:-0.4px] flex justify-end text-para font-body'>
          <SlideUpText
            delay={0.06}
            preLoaderOut={preLoaderOut2}
            gap='.2em'
            text={'site by memet'}
            initialDelay={2}
          />
        </h2>

        <h2 className='text-01 text-brand-black flex-1 [letter-spacing:-0.4px] flex justify-end text-heading1 font-custom'>
          <SlideUpText
            delay={0.06}
            preLoaderOut={true}
            gap='20px'
            text={'Gloss'}
            initialDelay={.7}
          />
        </h2>

        <h2 className='text-02 text-brand-black flex-1 [letter-spacing:-.4px] text-heading1 font-custom'>
          <SlideUpText
            delay={0.06}
            preLoaderOut={true}
            gap='20px'
            text={'Autos'}
            initialDelay={1}
          />
        </h2>

      </div>

      <div className='flex items-end landing [clip-path:inset(50%_50%_50%_50%)] opacity-0 scale-[0.2] bg-cover bg-no-repeat bg-center w-full h-full relative'>

        {/* STACKED IMAGES */}
        <div className='absolute top-0 left-0 w-full h-full'>

          {image.map((src, i) => (
            <Image
              key={src}
              fill
              priority
              alt=""
              src={src}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                index === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

        </div>

        <div className='absolute bg-black/35 top-0 left-0 w-full h-full' />

        <Section>
          <GridColumn>

            <div className='col-span-full lg:col-span-10'>

              <h2 className='text-heading4 mb-5 leading-[1] text-brand-white font-custom2 font-bold'>
                <Copy
                  stagger={0.05}
                  colorBlock={secondaryColor}
                  trigger={preLoaderOut}
                  text={'design by Memet'}
                />
              </h2>

              <h2 className='text-display leading-[1] text-brand-white capitalize [letter-spacing:-1px] font-custom font-bold'>
                <Copy
                  intialDelay={.2}
                  customWord={[0]}
                  customWordColor={secondaryColor}
                  stagger={0.05}
                  colorBlock={secondaryColor}
                  trigger={preLoaderOut}
                  text={'Elevate Your Car With Precision Detailing'}
                />
              </h2>

            </div>

          </GridColumn>
        </Section>

      </div>

    </div>
  )
}

export default Landing