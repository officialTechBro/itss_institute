import Link from "next/link"

const NotFound = () => {
  return (
    <section>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 my-20 px-4 text-blue-950">
                <h1 className="font-logo text-[200px]">404</h1>
                <h3 className="text-2xl font-bold">Oooops!!</h3>
                <p className="font-nav font-bold uppercase tracking-widest">This Page doesn't exist or is unavailable</p>
                <Link className="text-sm bg-blue-900 text-white px-6 py-3 hover:bg-blue-700" href="/">Return Home</Link>
            </div>
        </div>
    </section>
  )
}
export default NotFound