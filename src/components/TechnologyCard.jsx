// const TechnologyCard = ({ technology, onAddToStack, isAdded }) => {
//   return (
//     <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-4">
//       <div className="flex items-center justify-between mb-8">
//         <img
//           src={technology.technologyIcon}
//           alt={technology.technologyName}
//           className="w-12 h-12 object-contain"
//         />
//         <span className="text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full text-sm font-medium">
//           {technology.badge}
//         </span>
//       </div>
//       <h2 className="text-2xl font-bold text-slate-900 mb-3">
//         {technology.technologyName}
//       </h2>
//       <p className="text-slate-500 text-base leading-7 min-h-20">
//         {technology.description}
//       </p>
//       <div className="border-t border-slate-100 my-4"></div>
//       <div className="flex items-center justify-between gap-2 mb-6 flex-wrap">
//         <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm">
//           {technology.category}
//         </span>

//         <span className="text-slate-500 text-sm">{technology.difficulty}</span>

//         <span className="text-slate-700 font-medium text-sm flex items-center gap-1">
//           <span className="text-amber-400 text-lg">★</span>
//           {technology.rating}
//         </span>
//       </div>
//       <button
//         disabled={isAdded}
//         onClick={() => onAddToStack(technology)}
//         className={`w-full py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
//           isAdded
//             ? "bg-emerald-100 text-emerald-600 cursor-not-allowed"
//             : "bg-slate-950 hover:bg-slate-800 text-white"
//         }`}
//       >
//         {isAdded ? "✓ Added" : "Add to Stack"}
//       </button>
//     </div>
//   );
// };

// export default TechnologyCard;
