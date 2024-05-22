export default function Home() {
  return (
    <div className=" flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-yellow-500"></div>
        <div className="absolute top-0 left-[30%]  animate-rotate">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
