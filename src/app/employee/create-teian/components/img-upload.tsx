"use client";

import { deleteImage } from "@/lib/deleteImage";
import { uploadImage } from "@/lib/uploadImage";
import { Upload, X } from "lucide-react";
import { useRef, useState } from "react";

type UploadStatus = {
  before: boolean;
  after: boolean;
};

type Props = {
  type: "before" | "after";

  name: string;
  preview: string | null;
  setPreview: (value: string | null) => void;
  onFileChange: (value: string | null) => void;
  setUploadStatus: React.Dispatch<React.SetStateAction<UploadStatus>>;
  // onFileChange: (file: File | null) => void;
};

export default function ImageUpload({
  type,
  name,
  preview,
  setPreview,
  onFileChange,
  setUploadStatus,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploaderUrl, setUploaderUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  console.log(uploaderUrl, "link upload");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);
      setUploaded(false);
      setProgress(0);

      const file = e.target.files?.[0];

      if (!file) return;

      // onFileChange(file);
      // memulai upload
      setUploadStatus((prev) => ({
        ...prev,
        [type]: true,
      }));

      const url = URL.createObjectURL(file);
      setPreview(url);

      let current = 0;

      const interval = setInterval(() => {
        current += Math.random() * 15;

        if (current >= 90) {
          current = 90;
        }

        setProgress(Math.floor(current));
      }, 200);

      if (uploaderUrl) {
        await deleteImage(uploaderUrl);
      }

      const urlBeforeImg = await uploadImage(file, type);

      clearInterval(interval);

      setProgress(100);

      setUploaded(true);

      setTimeout(() => {
        setUploaded(false);
        setIsUploading(false);
        setProgress(0);
      }, 1200);

      console.log("oke", urlBeforeImg);

      setUploaderUrl(urlBeforeImg);

      onFileChange(urlBeforeImg);
    } catch (error) {
      console.log(error);
    } finally {
      setUploadStatus((prev) => ({
        ...prev,
        [type]: false,
      }));
    }
  };

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
        // name={name}
        // required
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="
          border-2 border-dashed
          rounded-lg
          p-6
          text-center
          cursor-pointer
          hover:bg-muted
        "
      >
        <Upload className="mx-auto mb-2" />

        <p className="font-medium">Tap to upload file</p>

        <p className="text-xs text-muted-foreground">Images only</p>
      </div>

      {preview && (
        <div className="relative w-20 h-20">
          <img
            src={preview}
            alt=""
            className="
              w-full
              h-full
              object-cover
              rounded-lg
              border
            "
          />

          <button
            type="button"
            onClick={async () => {
              if (uploaderUrl) {
                await deleteImage(uploaderUrl);
              }

              setUploaderUrl(null);
              setPreview(null);
              onFileChange(null);

              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
            className="
              absolute
              -top-2
              -right-2
              bg-red-500
              text-white
              rounded-full
              p-1
            "
          >
            <X size={12} />
          </button>
        </div>
      )}

      {isUploading && (
        <div className="mt-3 space-y-2">
          <div className="flex justify-between text-xs">
            <span>Uploading...</span>

            <span>{progress}%</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      )}

      {uploaded && (
        <div
          className="
            mt-3
            text-green-600
            text-sm
            font-medium
            animate-pulse
        "
        >
          ✅ Upload berhasil
        </div>
      )}
    </div>
  );
}
