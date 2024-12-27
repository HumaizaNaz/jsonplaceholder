

// import Image from "next/image";

// // interface Product {
// //   id: number;
// //   title: string;
// //   price: number;
// //   description: string;
// //   image: string;
// // }
// export default async function Home() {

//   const url = await fetch("https://fakestoreapi.com/products")
// const data = await url.json()
// console.log(data)


  
//   return (
//     <div className="w-full h-screen bg-white grid place-items-center 
//     grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 
//     gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6 md:px-10 lg:px-12">

//     {data.map((product: any, index: number) => (
//       <div
//         key={product.id}
//         className="grid place-items-center py-10 w-full px-7 mt-10 h-full xs:w-36 xs:h-60 sm:w-40 sm:h-72   md:w-48 md:h-[300px] lg:w-[300px] lg:min-h-[530px] xl:w-[300px] xl:min-h-[530px]
//         shadow-md hover:shadow-xl transition-shadow duration-300 bg-red-300 shadow-gray-400  rounded-lg">

//         <div className="relative">
//           <Image
//             src={product.image}
//             alt={product.title}
//             width={200}
//             height={200}
//             objectFit="cover"
//           />
//         </div>
//         <div className="p-4">
//           <h1 className="text-black text-xl font-semibold">{product.title}</h1>
//           <h2 className="text-black text-lg mt-2">Price: ${product.price}</h2>
//           {/* <p className="text-black mt-2">{product.description}</p> */}
//         </div>
//       </div>
//     ))}
// </div>
//   );
// }
