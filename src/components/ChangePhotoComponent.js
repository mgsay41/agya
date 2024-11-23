import React from "react";
import { Camera } from "lucide-react";

const ChangePhotoComponent = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Change Photo</h2>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-24 h-24 bg-gray-300 flex items-center justify-center mb-4">
          <Camera className="w-12 h-12 text-gray-500" />
        </div>
        <div className="mb-4 text-gray-500">
          <p>Drag and Drop here</p>
          <p>or</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2">
            Browse Files
          </button>
        </div>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default ChangePhotoComponent;
