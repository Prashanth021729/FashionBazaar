import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";
import Title from "../components/Title";

const About = () =>{
    return(
        <div>
            <div className="text-2xl text-center pt-8 border-t  ">
                <Title text1={'ABOUT'} text2={'US'}/>
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={assets.about_img} alt=""/>
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Forever, we believe in offering timeless fashion that blends quality with style, making every piece a lasting part of your wardrobe.</p>
                    <p>Driven by a passion for fashion, Forever is dedicated to bringing you curated collections that celebrate individuality, quality, and affordability.</p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>Forever is to empower individuals to express themselves through fashion, providing high-quality, stylish apparel that feels as good as it looks</p>
                </div>
            </div>
            <div className="text-xl py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'}/>
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className="text-gray-600">At Forever,quality assurance is at the heart of everything we do. Each product undergoes rigorous checks to ensure it meets our standards for durability, comfort, and style, so you can shop with confidence.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className="text-gray-600">Forever is committed to providing a seamless shopping experience, from easy browsing and secure checkout to fast delivery, making style accessible and convenient for you.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">Our team at Forever is dedicated to exceptional customer service, ensuring every interaction is helpful, friendly, and tailored to meet your needs, because your satisfaction is our top priority.</p>
                </div>
            </div>
            <Newsletter/>
        </div>
    )
};

export default About;