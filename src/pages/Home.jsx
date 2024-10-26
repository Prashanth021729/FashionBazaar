import Bestseller from "../components/Bestseller";
import Hero from "../components/Hero";
import Latestcollections from "../components/Latestcollections";
import Newsletter from "../components/Newsletter";
import Ourpolicy from "../components/Ourpolicy";
import Collection from "./Collection";

const Home = () =>{
    return(
        <div>
            <Hero/>
            <Latestcollections/>
            <Bestseller/>
            <Ourpolicy/>
            <Newsletter/>
            <Collection/>
        </div>
    )
};

export default Home;