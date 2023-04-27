import { Link } from "react-router-dom"
import sky from "../../assets/sky.jpg"




function About() {

    return (
        <section className="bg-[#c79e969c]">
            <img src={sky}className="w-full bg-center " />
           <div className="flex flex-col justify-start gap-4 font-inter ">
            <h1 className="font-bold text-4xl ">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className="text-[#0000009e]">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
            <p className="mt-4 text-[#0000009e]">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
           </div>
            <article className="flex flex-col bg-orange-400 rounded-lg p-8 m-5 mb-0">
                <span className="text-2xl font-inter  font-semibold">
                    Your destination is waiting.
                </span>
                <span className="text-2xl font-inter font-semibold">
                Your van is ready.
                </span>
                <button type="submit" className="bg-black self-start mt-4 p-4 py-2 font-inter font-semibold text-white  rounded-lg ">
                    <Link to="/vans">Explore our vans</Link>
                </button>
            </article>
        </section>
        )
}

export default About
