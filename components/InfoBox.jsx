import Image from "next/image"

const InfoCard = ({img, title, subtitle}) => {
  return (
    <div className="flex flex-col rounded-t-2xl shadow-md">
        <Image 
        src={img}
        alt={title}
        className="object-cover h-1/2 w-full rounded-t-2xl "
        width={0}
        height={0}
        size='100vw'
        priority={true}
        unoptimized
        />
        <div className="text-blue-950">
        <h2 className="font-bold px-4 py-6 font-nav text-xl">{title}</h2>
        <p className="px-4 py-2 text-sm leading-6 tracking-wider">{subtitle}</p>
        </div>
    </div>
  )
}

const InfoBox = () => {
  return (
    <section className="pb-8 bg-slate-100">
        <div className="container-xl lg:container m-auto">
            <h1 className="p-8 text-center font-bold text-2xl tracking-widest font-nav text-blue-950 md:text-4xl">
                Why You Should Join Us
            </h1>
            <div className="grid grid-cols-1 items-center justify-around gap-8 p-4 text-center md:text-left md:grid-cols-2 lg:grid-cols-3">
            <InfoCard 
                img = '/images/img1.jpg'
                title = 'We Give You All You Need To Excel'
                subtitle = 'Receive training from some of the best trainers whose technical skills are continually aligned with industry standards, supported by the latest techniques and up-to-date curriculum. Experience a touch of excellence in our tech-enabled classrooms with interactive screens and well-equipped computer labs, all in a comfortable, air-conditioned environment.' 
            />
            <InfoCard 
                img = '/images/img6.jpg'
                title = 'Career Support & Certification'
                subtitle = 'Take advantage of our global recognition to save time and money on your international degree through credit transfer facilities with universities in the UK, UAE, Malaysia, and Canada.. All our programs and courses are delivered through blended learning with a collaborative cloud-based learning platform, allowing participants to catch up on missed sessions via recorded materials.' 
                />
            <InfoCard 
                img = '/images/img3.jpg'
                title = 'Job Opportunity'
                subtitle = 'Stay abreast of industry trends through our industry experts sessions, and enjoy benefits from our collaborations with global tech players and our efforts to secure local and international placements. Take advantage of our global recognition to save time and money on your international degree through credit transfer facilities with universities in the UK, UAE, Malaysia, and Canada.' 
                />
            </div>
        </div>
    </section>
  )
}
export default InfoBox