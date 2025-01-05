import React, { useEffect, useState } from "react";
import apiRequest from "../Axios";

const Products = () => {

    const [Product, setProduct] = useState();
    const GetProduct = async () => {
        try {
            const response = await apiRequest.get("/products");
            const data = response.data;
            console.log(data)
            setProduct(data);
        } catch (error) {
            console.log(error)

        }
    }


    useEffect(() => {
        GetProduct();
    }, []);

    const filteredProducts = Product?.slice(0, 18);

    return (
        <div className="container mx-auto py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                    Our <span className="text-blue-600">Products</span><hr className="bg-gray-500 py-1 rounded-xl px-12"/>
                </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 px-2 lg:grid-cols-3 gap-6">
                {filteredProducts?.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="relative group">
                            <div className="mx-auto  w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                                <img
                                    className=" h-[200px] sm:h-[300px] w-full object-cover object-center"
                                    src={product.category.image}
                                    alt="Product Image"
                                />
                                <div className="p-4">
                                    <h2 className="mb-2 text-[13] sm:text-[16px]  font-medium dark:text-white text-nowrap text-gray-900">{product.title}</h2>
                                    
                                    <div className="flex items-center">
                                        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                                        <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                                        <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                       
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <a
                    href="#"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                    View All Products
                </a>
            </div>
        </div>
    );
};

export default Products;
