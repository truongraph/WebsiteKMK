
export default function Header() {
  return <div>
    <div className="font-inter h-screen flex flex-col items-center justify-center bg-gray-900" >
    <img src="/whitelonglogo.png" className="h-[50px] w-[200px]  absolute top-10 left-10" />
      <div className="relative z-10 text-white m-auto ">
        <div className="text-center space-y-10">
          <h3 className="font-extrabold text-[60px] uppercase tracking-wider text-white border rounded-full">
            Coming Soon
          </h3>
          <h1 className="text-1xl lg:text-4xl font-extrabold">ĐANG TRONG QUÁ TRÌNH XÂY DỰNG</h1>
          <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
            We`re under construction. Check back for an update soon. Stay in
            touch!
          </p>
        </div>
      </div>
    </div>
    
  </div>;
  
}
