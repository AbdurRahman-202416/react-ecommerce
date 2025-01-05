import React from 'react'

const Nofound = () => {
    return (
        <div style={{ height: '90vh' }} className="bg-slate-50  mt-2 ">
            <section className="text-center flex flex-col justify-center items-center h-96">
                <i className="fa-solid fa-triangle-exclamation fa-fade text-6xl m-8 p-5" />

                <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
                <p
                    style={{ fontSize: "30px" }}
                    className="text-xl text-orange-600 mb-5 "
                >
                    This page does not exist{" "}
                    <i
                        className="fa-solid fa-circle-info fa-beat-fade m-4"
                        style={{
                            "--fa-beat-fade-opacity": "0.67",
                            "--fa-beat-fade-scale": "1.075",
                        }}
                    ></i>
                </p>

                <Link
                    to="/"
                    className="text-white shadow-xl  bg-indigo-500 hover:bg-indigo-800 rounded-md px-3 py-2 mt-8 mb-8"
                >
                    <i className="fas fa-home m-1"> </i>
                    Go Back
                </Link>
            </section>
        </div>


    )
}

export default Nofound;