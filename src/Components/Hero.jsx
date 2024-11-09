import { Link } from "react-router-dom";

const Hero = () => {
    return (
    <div>
    <section>
	<div className="dark:bg-violet-600">
		<div className="container px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">

			<h1 className="text-5xl font-bold leading-none sm:text-5xl xl:max-w-3xl dark:text-gray-50">Welcome to <span className="bg-gradient-to-r from-secondary  to-primary text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span></h1>

			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>

			<div className="flex flex-wrap space-x-5 justify-center">

                {/* blogs button  */}
            <Link to="/blogs" class="relative inline-block px-4 py-2 font-medium group">

                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>

                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary  group-hover:bg-primary"></span>
                <span class="relative text-black group-hover:text-white">Read Blogs</span>
            </Link>


            {/* bookmarks button */}
            <Link to="/bookmarks" class="relative inline-block px-4 py-2 font-medium group">

                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>

                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary  group-hover:bg-primary"></span>
                <span class="relative text-black group-hover:text-white">Bookmarks</span>
            </Link>
			</div>
		</div>
	</div>
    </section>
        </div>
    );
};

export default Hero;