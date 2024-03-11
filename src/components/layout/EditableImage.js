import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EditableImage({ link, setLink }) {
  async function handleFileChange(ev) {
    const files = ev.target.files;
    //console.log("Files", files);
    if (files?.length === 1) {
      const data = new FormData();
      //console.log("edit data", data);
      data.set("file", files[0]);
      //data.append("file", files[0]);

      const uploadPromise = fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        if (response.ok) {
          return response.json().then((link) => {
            setLink(link);
          });
        }
        throw new Error("Something went wrong");
      });

      await toast.promise(uploadPromise, {
        loading: "uploading...",
        success: "uploaded saved!",
        error: "Error",
      });
    }
  }

  return (
    <>
      {link && (
        <div className=" w-40 h-20 mb-3">
          <Image
            className="rounded-lg w-full h-full mb-1"
            src={link.link}
            width={250}
            height={250}
            alt={"avatar"}
          />
        </div>
      )}

      {!link && (
        <div className="bg-gray-200 p-4 text-gray rounded-lg mb-1">
          No image
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
          upload
        </span>
      </label>
    </>
  );
}

// export default function EditableImage({ link, setLink }) {
//   async function handleFileChange(ev) {
//     const files = ev.target.files;
//     //console.log("Files", files);
//     if (files?.length === 1) {
//       const data = new FormData();
//       //console.log("edit data", data);
//       data.set("file", files[0]);
//       //data.append("file", files[0]);

//       try {
//         const response = await fetch("/api/upload", {
//           method: "POST",
//           body: data,
//         });

//         if (response.ok) {
//           toast.success("Image uploaded successfully");
//         } else {
//           throw new Error("Failed to upload image");
//         }
//       } catch (error) {
//         toast.error("Error uploading image" + error.message);
//         console.error(error);
//       }
//     }
//   }

//   return (
//     <>
//       {link && (
//         <Image
//           className="rounded-lg w-full h-full mb-1"
//           src={link}
//           width={250}
//           height={250}
//           alt={"avatar"}
//         />
//       )}
//       {!link && (
//         <div className="bg-gray-200 p-4 text-gray rounded-lg mb-1">
//           No image
//         </div>
//       )}

//       <label>
//         <input type="file" className="hidden" onChange={handleFileChange} />
//         <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
//           Edit
//         </span>
//       </label>
//     </>
//   );
// }

// export default function EditableImage({ link, setLink }) {
//   async function handleFileChange(ev) {
//     const files = ev.target.files;
//     if (files?.length === 1) {
//       //console.log("upload2");
//       const data = new FormData();
//       data.set("file", files[0]);

//       const uploadPromise = fetch("/api/upload", {
//         method: "POST",
//         body: data,
//       }).then((response) => {
//         if (response.ok) {
//           return response.json().then((link) => {
//             setLink(link);
//           });
//         }
//         throw new Error("Something went wrong");
//       });

//       await toast.promise(uploadPromise, {
//         loading: "Saving...",
//         success: "Profile saved!",
//         error: "Error",
//       });
//     }
//   }
//   return (
//     <>
//       {link && (
//         <Image
//           className="rounded-lg w-full h-full mb-1"
//           src={link}
//           width={250}
//           height={250}
//           alt={"avatar"}
//         />
//       )}
//       {!link && (
//         <div className="bg-gray-200 p-4 text-gray rounded-lg mb-1">
//           No image
//         </div>
//       )}

//       <label>
//         <input type="file" className="hidden" onChange={handleFileChange} />
//         <span className=" block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
//           Edit
//         </span>
//       </label>
//     </>
//   );
// }
