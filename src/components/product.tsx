import { useState } from "react";
import { ProductData } from "../@types/product";
import star from '../assets/Star.svg';
import starfill from '../assets/Star_fill.svg';

interface Props {
    product: ProductData
}

export const Product = ({ product }: Props) => {
    const [stared, setStared] = useState(false);

    const handlestar = () => setStared(!stared);

    return (
        <div className="relative p-4 bg-white rounded-2xl shadow-md">
            <img
                src={product.image}
                alt={product.name}
                className="rounded-2xl w-full object-cover"
            />

            {product.popular &&
                <div className="absolute z-50 bg-tagbg rounded-full text-small py-1 px-2 top-6 left-7">
                    Popular
                </div>
            }

            <div className="mt-3 flex justify-between items-center">
                <h1 className="text-headingtext font-semibold text-lg">{product.name}</h1>
                <div className="py-1 px-2 rounded bg-pricebg text-label text-mainBgClr">
                    {product.price}
                </div>
            </div>

            <div className="mt-2 flex items-center">
                <img
                    onClick={handlestar}
                    className="cursor-pointer"
                    src={stared ? starfill : star}
                    alt="Star"
                />
                {product.rating === null ? (
                    <p className="text-bodytext ml-2">No ratings</p>
                ) : (
                    <p className="text-headingtext font-semibold ml-2">
                        {product.rating}
                        <span className="text-bodytext ml-1 font-semibold">({product.votes} votes)</span>
                    </p>
                )}

                {!product.available && (
                    <div className="flex-1 flex justify-end">
                        <p className="text-soldouttext">Sold out</p>
                    </div>
                )}
            </div>
        </div>
    );
};
