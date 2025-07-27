import {YoutubeLogo, ScissorsIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image"
import fotoFundo from "../../../public/foto-fundo.png"



export function Hero(){
    return(
        <section className="text-white relative overflow-x-hidden">
           
            <Image
                                   src={fotoFundo }
                                   alt="foto do cachorro 2"
                                   fill
                                   quality={100}
                                   
                                   priority
                               />

            <div className="absolute inset-0 bg-black opacity-60">

            </div>
           
            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2  gap-8 '>
                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">Néia Oliveira Tricô</h1>
                        <p className="lg:text-lg">Apaixonada pelo tricô há mais de 30 anos, transformando fios em arte com habilidade e dedicação.</p>
                           
                            <div className="pb-8 justify-items-start flex gap-3" >
                                <a
                                target='_blank'
                                href={`https://wa.me/5547996655148?text=Olá vim pelo site e gostaria de mais informações`}
                                className="bg-gray-500 hover:bg-gray-600  px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                                >

                                <YoutubeLogo className='w-5 h-5'/>
                                Canal no Youtube

                                </a>

                                  <a
                                target='_blank'
                                href={`https://wa.me/5547996655148?text=Olá vim pelo site e gostaria de mais informações`}
                                className="bg-gray-500 hover:bg-gray-600  px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                                >

                                <ScissorsIcon className='w-5 h-5'/>
                                Loja de Receitas

                                </a>
                            </div>

                          
                    </div>

                   

                </article>
            </div>

            
        </section>
    )
}