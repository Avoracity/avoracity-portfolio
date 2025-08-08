import React from 'react';
import minimoss from '../styles/images/minimoss-pixel-art.gif';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 mb-7	"
                  style={{
                  
            background: `url(${minimoss})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
         }}>
         <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col text-center">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Michael Alvarez</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
   
               Coding projects are a mix of passion projects and team collaboration
               encompassing unique solutions from a wide range of topics.
            </p>
         </div>
      </div>
   )
}

export default function IntroContainer() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Intro />
    </div>
  );
}
