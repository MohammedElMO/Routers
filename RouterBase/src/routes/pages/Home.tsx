
import sunset from "../../assets/jordan-wozniak-xP_AGmeEa6s-unsplash.jpg"


interface Props {}

function Home(props: Props) {
    const {} = props

    return (
        <div className=" flex flex-col  h-[100vh] p-7  ">
            <img src={sunset}  className=" bg-center absolute h-full inset-0 -z-10 bg-cover w-full" />
            {/* <img src={set} alt="sun Set image"  */}
            {/* className="absolute -z-20 bg-cover w-full bg-origin-border bg-center " /> */}

            <h2 className="font-inter max-md:text-3xl max-md:text-center font-bold text-left text-4xl mb-7 ">TYou Got the travel plans , we got the travel vans</h2>
            <p className="font-inter text-gray-200 max-md:text-center text-md  mb-8 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, fuga? elit. Repellat illo obcaecati et, consectetur pariatur ullam perspiciatis modi corporis placeat autem!
            </p>
            <button className="bg-orange-500 p-4 text-white text-lg font-semibold  hover:bg-orange-400 font-pop rounded-md">Find your van</button>

            
        </div>
    )
}

export default Home
