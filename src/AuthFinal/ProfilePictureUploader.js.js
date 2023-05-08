import React, { useState } from "react";
import { storage } from "../config";
// import { getDownloadURL } from "firebase/storage";

// import React, { useState } from 'react';
// import { storage } from '../firebase';


// const ProfilePictureUploader = ({ currentImageUrl, onSave }) => {
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState(currentImageUrl);

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleImageUpload = () => {
//     const uploadTask = storage.ref(`profile-pictures/${image.name}`).put(image);
//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {},
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref('profile-pictures')
//           .child(image.name)
//           .getDownloadURL()
//           .then((url) => {
//             setImageUrl(url);
//             onSave(url);
//           });
//       }
//     );
//   };

//   const handleImageDelete = () => {
//     if (window.confirm('Are you sure you want to delete your profile picture?')) {
//       storage
//         .refFromURL(imageUrl)
//         .delete()
//         .then(() => {
//           setImageUrl(null);
//           onSave(null);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       <button onClick={handleImageUpload}>Upload</button>
//       {imageUrl && (
//         <div>
//           <img src={imageUrl} alt="Profile" />
//           <button onClick={handleImageDelete}>Delete</button>
//           <button onClick={() => setImageUrl(currentImageUrl)}>Replace</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePictureUploader;


const ProfilePictureUploader = ({ onSave }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    const uploadTask = storage.ref(`profile-pictures/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('profile-pictures')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImageUrl(url);
            onSave(url);
          });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="profile-pictures" />}
    </div>
  );
};

export default ProfilePictureUploader;



// const ProfilePictureUploader = () => {
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);

//   const handlePicChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handlePicUpload = () => {
//     const uploadTask = storage.ref(`profile-pictures/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {},
//       (error) => {
//         (error) => {
//           console.log(error);
//         },
//           () => {
//             storage 
//               .ref("profile-pictures") 
//               .Children(image.name) 
//               .getDownloadURL() 
//               .then((url) => {
//                 setImageUrl(url);
//                 onSave(url);
//               });
//           }
//     );
//       };
//       return (
//         <div>
//           <input type="file" onChange={handlePicChange} />
//           <button onClick={handlePicUpload}>Upload</button>
//         </div>
//     );
// };
// export default ProfilePictureUploader;
