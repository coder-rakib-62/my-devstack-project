import { useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";

const Alltechnology = ({ technologies }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const handleAddToStack = (technology) => {
    const alreadyExists = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );
    if (alreadyExists) {
      toast.error(`${technology.technologyName} already added!`);
      return;
    }
    setSelectedTechnologies((previous) => [...previous, technology]);
    toast.success(`${technology.technologyName} added successfully!`);
  };
  const handleRemoveFromStack = (id) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id),
    );
    toast.error("removed successfully!");
  };
  const handleClearStack = () => {
    if (selectedTechnologies.length === 0) {
      toast.error("Your stack is already empty!");
      return;
    }
    setSelectedTechnologies([]);

    toast.success("Your stack cleared successfully!");
  };
//   return (
//     <div className="grid grid-cols-12 container mx-auto gap-6 items-start relative">
//       <div className="col-span-9">
//         <h3 className="text-4xl font-bold">
//           Explore the
//           <span className="bg-linear-to-r from-pink-500 to-violet-800 bg-clip-text text-transparent">
//             {" "}
//             Technologies
//           </span>
//         </h3>

//         <p className="pt-2 pb-10">
//           Pick one technology per category to build your ideal stack.
//         </p>

//         <div className="grid grid-cols-3 gap-4">
//           {technologies.map((technology) => (
//             <TechnologyCard
//               key={technology.id}
//               technology={technology}
//               onAddToStack={handleAddToStack}
//               isAdded={selectedTechnologies.some(
//                 (item) => item.id === technology.id,
//               )}
//             />
//           ))}
//         </div>
//       </div>
//       {/* <div className="col-span-3 mt-27.5">
//         <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm sticky top-5">
//           <div className="flex items-center justify-between mb-2">
//             <h2 className="text-2xl font-bold text-slate-900">Your Stack</h2>
//           </div>

//           <p className="text-slate-400 text-base mb-6">
//             {selectedTechnologies.length === 0
//               ? "No technologies selected yet."
//               : `${selectedTechnologies.length} technologies selected`}
//           </p>
//           {selectedTechnologies.length > 0 && (
//             <button
//               onClick={handleClearStack}
//               className="w-full mb-4 bg-rose-50 hover:bg-rose-100 text-rose-500 font-semibold py-2.5 rounded-xl transition-colors duration-300"
//             >
//               Clear All
//             </button>
//           )}
//           {selectedTechnologies.length === 0 ? (
//             <div className="border-2 border-dashed border-slate-200 rounded-2xl py-9 flex items-center justify-center">
//               <p className="text-slate-400 text-base">Your stack is empty.</p>
//             </div>
//           ) : (
//             <div className="space-y-3">
//               {selectedTechnologies.map((technology) => (
//                 <div
//                   key={technology.id}
//                   className="flex items-center justify-between gap-3 border border-slate-100 rounded-2xl p-3 hover:border-pink-200 transition-colors"
//                 >
//                   <div className="flex items-center gap-3 min-w-0">
//                     <img
//                       src={technology.technologyIcon}
//                       alt={technology.technologyName}
//                       className="w-10 h-10 object-contain"
//                     />

//                     <div className="min-w-0">
//                       <h3 className="font-semibold text-slate-800 truncate">
//                         {technology.technologyName}
//                       </h3>

//                       <p className="text-xs text-slate-400">
//                         {technology.category}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleRemoveFromStack(technology.id)}
//                     className="shrink-0 text-rose-500 hover:bg-rose-50 rounded-lg px-3 py-2 font-bold transition-colors"
//                     title="Remove technology"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div> */}
//     </div>
//   );
};

export default Alltechnology;
