import { assets } from "../assets/assets";
const Ourpolicy = () => {
    return(
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-2">
            <div className="">
                <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5"/>
                <p className="font-semibold">Easy exchange policy </p>
                <p className="text-gray-500">We offer hassel free exchage policy </p>
            </div>
            <div className="">
                <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5"/>
                <p className="font-semibold">7 Days return policy </p>
                <p className="text-gray-500">We provide 7 days easy return policy </p>
            </div>
            <div className="">
                <img src={assets.support_img} alt="" className="w-12 m-auto mb-5"/>
                <p className="font-semibold">Best customer support </p>
                <p className="text-gray-500">We provide 24/7 customer support</p>
            </div>
        </div>
    )
}

export default Ourpolicy;