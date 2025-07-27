"use client"

import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight } from 'lucide-react'





const services = [
    {
        title: "PANTUFA ADULTO",
        
        url: <iframe width="260" height="215" src="https://www.youtube.com/embed/P3oCPH9i5oc?si=XG6nqLb0rKpMIOXu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        title: "CACHECOL",
       
        url: <iframe width="260" height="215" src="https://www.youtube.com/embed/DKjpw1yITcM?si=6cn28YMGkoHC6Hun" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        title: "PANTUFA",
      
        url: <iframe width="260" height="215" src="https://www.youtube.com/embed/iWbLNMr5Uok?si=8VIxH_fTNu02uXpn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        title: "CASAQUINHO INFANTIL",
  
      url: <iframe width="260" height="215" src="https://www.youtube.com/embed/fURjfaJN620?si=qKnORMr3tfL5nMSd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
    },
    {
            title: "CACHECOL MEIA ESTAÇÃO",
         
        url: <iframe width="260" height="215" src="https://www.youtube.com/embed/HgdpXYcTV9w?si=PYiD0GEYLvZuLoYn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
]


export function Services(){
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align:"start",
        slidesToScroll:1,
        breakpoints:{
            "(min-width: 768px)": { slidesToScroll:3}
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }

        function scrollNext(){
        emblaApi?.scrollNext();
    }





    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl text-center  font-bold mb-12">
                        TRICÔS
                    </h2>

                    <div className="relative">

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>

                                            <div className='flex-1 flex items-start justify-between '>
                                                
                                                   
                                                    <div className='items-center text-center'>
                                                        <h3 className='font-bold text-xl my-1'>{item.title}</h3>

                                                        

                                                        <div>
                                                            {item.url}
                                                        
                                                        </div>

                                                        <div className='rounded mt-4 bg-gray-500 hover:bg-gray-600 px-5 py-2'>
                                                             <a href="#">VER RECEITA</a>
                                                        </div>
                                                        
                                                        
                                                    </div>

                                                
                                            </div>

                                           

                                        </article>
                                        
                                    </div>
                                

                                ))}
                            </div>
                        </div>

                        <button 
                        onClick={scrollPrev}
                        className=' bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>

                            <ChevronLeft  className='w-6 h-6 text-gray-600'/>
                        </button>

                         <button 
                        onClick={scrollNext}
                        className=' bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>

                            <ChevronRight  className='w-6 h-6 text-gray-600'/>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}