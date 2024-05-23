const Home = () => {
  return (
    <div id="home" className="home-height flex items-center">
      <div className="md:w-[75%] w-[90%] text-center md:text-left mx-auto flex flex-col sm:flex-row justify-between place-items-end">
        <div className="md:w-1/2 ">
          <div className="lg:w-3/4">
            <h2 className="lg:text-2xl text-xl text-gray-300">
              So, you want to travel to
            </h2>
            <h1 className="lg:text-9xl text-8xl my-6">Space</h1>
            <p className="text-gray-400">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex  justify-center md:justify-end hover:cursor-pointer mt-8">
          <div
            id="explore"
            className="w-44 h-44 text-xl bg-white rounded-full text-black flex items-center justify-center"
          >
            Explore
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

//   So, you want to travel to
//   Space
//   Let’s face it; if you want to go to space, you might as well genuinely go to
//   outer space and not hover kind of on the edge of it. Well sit back, and relax
//   because we’ll give you a truly out of this world experience!

//   Explore
