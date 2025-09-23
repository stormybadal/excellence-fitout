// // src/components/shared/Loader.jsx
// import React from "react";
// import { PacmanLoader } from "react-spinners";

// function Loader({
//     loading = true,
//     size = 25,
//     color = "#3B82F6", // Tailwind's blue-500
//     speedMultiplier = 1,
//     margin = 2,
//     cssOverride = {},
// }) {
//     return (
//         <div className="flex items-center justify-center w-full h-full">
//             <PacmanLoader
//                 loading={loading}
//                 size={size}
//                 color={color}
//                 speedMultiplier={speedMultiplier}
//                 margin={margin}
//                 cssOverride={cssOverride}
//             />
//         </div>
//     );
// }

// export default Loader;


import React from "react";
import { PacmanLoader } from "react-spinners";

function Loader({
    loading = true,
    size = 25,
    speedMultiplier = 1,
    margin = 2,
    cssOverride = {},
}) {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                <PacmanLoader
                    loading={loading}
                    size={size}
                    // 👇 pick a neutral base color, gradient will override visually
                    color="#facc15" // yellow-400 as fallback
                    speedMultiplier={speedMultiplier}
                    margin={margin}
                    cssOverride={{
                        ...cssOverride,
                        display: "inline-block",
                    }}
                />
            </div>
        </div>
    );
}

export default Loader;
