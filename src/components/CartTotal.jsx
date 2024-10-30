import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () =>{
    const {currency, delivery_fee ,getCartTotal} = useContext(ShopContext)
    return(
        <div className="w-full">
            <div className="text-2xl ">
                <Title text1={'CART'} text2={'TOTALS'}/>
            </div>
            <div className="felx flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{getCartTotal()}.00</p>

                </div>
                <hr></hr>
                <div className="flex justify-between">
                    <p>shipping fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                <hr></hr>
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency}{getCartTotal()===0 ? 0 : getCartTotal()+ delivery_fee}.00</b>
                </div>
            </div>
        </div>
    )
};

export default CartTotal;