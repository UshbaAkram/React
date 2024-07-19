import { useContext } from "react";
import myContext from "../../context/data/myContext";
const HeroSection = () => {
    const context = useContext(myContext);
  const { mode, toggleMode } = context;
  const darkThemeImage='https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg'
  const lightThemeImage='https://static.vecteezy.com/system/resources/previews/004/299/830/original/shopping-online-on-phone-with-podium-paper-art-modern-pink-background-gifts-box-illustration-free-vector.jpg'
  const heroStyle = {
    backgroundImage: `url(${mode === 'light' ? lightThemeImage : darkThemeImage})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '5%',
  };
  
   return (  
<>
<section class="hero">
	<div  style={heroStyle}>
		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-2">
				<h1 class="text-3xl md:text-5xl p-2 text-pink-800 font-bold tracking-loose"  style={{
                    color: mode === "dark" ? "white" : "",
          }}>E - Pak</h1>
				<h2 class="text-3xl  md:text-5xl leading-relaxed md:leading-snug mb-2">Your One-Stop Shop
				</h2>
				<p class="text-sm md:text-base text-gray-800 mb-4" style={{
                 color: mode === "dark" ? "white" : "",
          }}>Explore your favourite Products and
					buy now to showcase your personality and win exciting prizes.</p>
				<a href="#"
					class="bg-transparent hover:bg-pink-800 text-red-600 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-pink-800 hover:border-transparent"
                   >
					Explore Now</a>
			</div>
			{/* <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div class="h-48 flex flex-wrap content-center">
					<div>
						<img class="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"></div>
						<div>
							<img class="inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"></div>
							<div>
								<img class="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"></div>
							</div>
						</div> */}
					</div>
				</div>
</section>
</>
        
    );
}
 
export default HeroSection;