import React from "react";
import "../../index.css";
import "./MovingText.css"
// import AOS from "aos";
import "aos/dist/aos.css";


const MovingText = () => {

    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000, // duration of the animation
    //       easing: 'ease-in-out', // easing of the animation
    //       once: false, // animation occurs only once
    //     });
    //   }, []);

    const className = "MovingText";
    return (
        <>
            <div className={className + " w-full bg-white cursor-pointer"} data-aos="fade-up">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className={className + "__container w-full py-2 pb-4 overflow-hidden border-blue-900 border-t-4 border-b-4"}>
                        <div className={className + "__movingTexts"}>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                        </div>
                        <div className={className + "__movingTexts"}>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                        </div>
                        <div className={className + "__movingTexts"}>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                            <h1 className="text-blue-900 text-3xl w-max text-left mx-48">Join Us.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovingText;










// const MovingText = () => {
//     const className = "MovingText";
//   return (
//     <>
//         <div className={className + " w-full bg-blue-900 pb-5 "}>
//             <div className="w-full flex flex-col items-center justify-center">
//                 <div className={className + "__movingTexts w-full py-2 pb-4 flex flex-row overflow-auto border-blue-600 border-t-4 border-b-4"}>
//                     <h1 className="text-white text-3xl w-max text-left mx-16 ">Congratulatios.</h1>
//                     <h1 className="text-white text-3xl w-max text-left mx-16 ">Congratulatios.</h1>
//                     <h1 className="text-white text-3xl w-max text-left mx-16 ">Congratulatios.</h1>
//                     <h1 className="text-white text-3xl w-max text-left mx-16 ">Congratulatios.</h1>
//                     <h1 className="text-white text-3xl w-max text-left mx-16 ">Congratulatios.</h1>
//                     <h1 className="text-white text-3xl w-max text-left mx-16 ">Congratulatios.</h1>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default MovingText