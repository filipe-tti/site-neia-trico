import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

const brands = [
  {  title: "PANTUFA ADULTO",
    url: <iframe width="260" height="215" src="https://www.youtube.com/embed/Z06nAjF75uc?si=G3UM5zBulvbzxpiu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> },

  { title: "PANTUFA ADULTO",
    url: <iframe width="260" height="215" src="https://www.youtube.com/embed/APDOQWDb9HI?si=tQzMy-09ftor9oy-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>},

   {title: "PANTUFA ADULTO", 
    url: <iframe width="260" height="215" src="https://www.youtube.com/embed/2bV2DTT-vOQ?si=70LKc-p_J9jUlP__" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>},
  
 
];

export function Footer() {
  return (
    <section className="bg-[#382b2a] py-16 text-white">
      <div className="container mx-auto px-4">
       
       
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-4xl text-center  font-bold mb-12">
            LAÇOS
          </h4>
          <div className=" gap-8 flex items-center justify-center">
            {brands.map((item, index) => (
                <div key={index} className=" p-4 rounded-lg flex items-center justify-center">
                 
                 <div className='items-center text-center'>
                     <div className='font-bold text-xl my-1'>
                  {item.title}
                 </div>
                 <div>
                    {item.url}
                 </div>

                 </div>
                
                
                </div>
            ) )}
          </div>

        </div>

       
        <footer className="flex items-center text-center justify-center gap-20 py-4 mt-4">
       

              <div>
                <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                <p>Email: contato.neiaoliverartes@gmail.com </p>  
                <p>Telefone: (47) 9.8908-6759</p>  
                
              </div>


              <div>

                  
                  <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
                 
                    <div className="justify-center flex items-center gap-2 mt-4">
                      
                      <a href="#" className="text-3xl w-12 h-12 hover:text-yellow-500" target="_blank"> <FacebookLogo/> </a>
                     <a href="https://www.instagram.com/neia.oliveira.atelie/" className="text-3xl w-12 h-12 hover:text-yellow-500" target="_blank"> <InstagramLogo/> </a>
                     <a href="https://www.youtube.com/@neiaoliveiratrico" className="text-3xl w-12 h-12 hover:text-yellow-500" target="_blank"> <YoutubeLogo/> </a>
                    
                   

                    </div>
                      
                  
               
                  
               </div>

           

        </footer>


      </div>
    </section>
  );
}
