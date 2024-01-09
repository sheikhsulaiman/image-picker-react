import React, { useRef, useState } from "react";

const ImagePicker = ({ label, name }: { label?: string; name?: string }) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const pickerRef = useRef<HTMLInputElement>(null);

  function handlePickImage() {
    if (pickerRef.current) {
      pickerRef.current.click();
    }
  }

  function handleImageChange(
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) {
    if (event) {
      const file = event.target.files![0];
      if (!file) {
        setPickedImage(null);
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
    return;
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <div className=" mb-2 flex items-center justify-center min-h-40 min-w-40 border-sky-100 border ">
          {!pickedImage && <p>No Image Picked</p>}
          {pickedImage && <img src={pickedImage as string} />}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={pickerRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className="border p-2 bg-blue-500 rounded-md"
          onClick={handlePickImage}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
