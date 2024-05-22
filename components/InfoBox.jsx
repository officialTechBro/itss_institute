import Image from "next/image"

const InfoBox = () => {
  return (
    <section className="pb-4 bg-slate-100">
        <div className="container-xl lg:container m-auto">
            <h1 className="p-8 text-center font-bold text-2xl tracking-widest font-nav text-black md:text-4xl">
                Why You Should Join Us
            </h1>
            <div className="grid grid-cols-1 items-center justify-around gap-8 p-4 text-center md:text-left md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col rounded-t-2xl shadow-md">
                   <Image 
                    src='/images/img1.jpg'
                    alt=""
                    className="object-cover h-1/2 w-full rounded-t-2xl "
                    width={0}
                    height={0}
                    size='100vw'
                    priority={true}
                    unoptimized
                   />
                   <div>
                   <h2 className="font-bold px-4 py-6 font-nav text-xl">We Give You All You Need To Excel</h2>
                   <p className="px-4 py-2 text-sm leading-6 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ducimus beatae ut perferendis incidunt suscipit, 
                    enim excepturi tempora, iure facilis ea libero illum odit quidem. Soluta aliquam rerum, 
                    esse exercitationem sit similique quidem distinctio, id blanditiis nemo reiciendis dolore maiores eveniet quia ea suscipit hic nobis. Impedit, enim doloribus.
                   </p>
                   </div>
                </div>
                <div className="flex flex-col rounded-t-2xl shadow-md">
                   <Image 
                    src='/images/img2.jpg'
                    alt=""
                    className="object-cover h-1/2 w-full rounded-t-2xl "
                    width={0}
                    height={0}
                    size='100vw'
                    priority={true}
                    unoptimized
                   />
                   <div>
                   <h2 className="font-bold px-4 py-6 font-nav text-xl">Career Support & Certification</h2>
                   <p className="px-4 py-2 text-sm leading-6 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ducimus beatae ut perferendis incidunt suscipit, 
                    enim excepturi tempora, iure facilis ea libero illum odit quidem. Soluta aliquam rerum, 
                    esse exercitationem sit similique quidem distinctio, id blanditiis nemo reiciendis dolore maiores eveniet quia ea suscipit hic nobis. Impedit, enim doloribus. 
                   </p>
                   </div>
                </div>
                <div className="flex flex-col rounded-t-2xl shadow-md">
                   <Image 
                    src='/images/img3.jpg'
                    alt=""
                    className="object-cover h-1/2 w-full rounded-t-2xl "
                    width={0}
                    height={0}
                    size='100vw'
                    priority={true}
                    unoptimized
                   />
                   <div>
                   <h2 className="font-bold px-4 py-6 font-nav text-xl">Job Opportunity</h2>
                   <p className="px-4 py-2 text-sm leading-6 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ducimus beatae ut perferendis incidunt suscipit, 
                    enim excepturi tempora, iure facilis ea libero illum odit quidem. Soluta aliquam rerum, 
                    esse exercitationem sit similique quidem distinctio, id blanditiis nemo reiciendis dolore maiores eveniet quia ea suscipit hic nobis. Impedit, enim doloribus.
                   </p>
                   </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
export default InfoBox