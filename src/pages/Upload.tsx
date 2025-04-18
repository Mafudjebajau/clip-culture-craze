
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload as UploadIcon, Music, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";

const Upload = () => {
  const navigate = useNavigate();
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      // After successful upload, navigate to profile
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-16">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">Upload Video</h1>
        <div className="w-6" />
      </div>

      <div className="p-4 flex-1">
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          {videoPreview ? (
            <div className="w-full max-w-[220px] h-[380px] bg-gray-900 rounded-lg overflow-hidden">
              <video 
                src={videoPreview} 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                controls
              />
            </div>
          ) : (
            <div className="w-full max-w-[220px] h-[380px] border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center bg-gray-900">
              <div className="text-center p-4">
                <UploadIcon className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-400">Tap to select a video</p>
                <p className="text-xs text-gray-500 mt-1">MP4 or MOV format, up to 3 minutes</p>
              </div>
            </div>
          )}

          <Label 
            htmlFor="video-upload" 
            className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-full cursor-pointer text-center"
          >
            {videoPreview ? "Change Video" : "Select Video"}
          </Label>
          <Input 
            id="video-upload" 
            type="file" 
            accept="video/*" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </div>

        {/* Caption */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium">Caption</span>
          </div>
          <Textarea 
            placeholder="Write a caption..." 
            className="bg-gray-900 border-gray-700 text-white"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            maxLength={150}
          />
          <div className="flex justify-end mt-1">
            <span className="text-xs text-gray-400">{caption.length}/150</span>
          </div>
        </div>

        {/* Hashtags */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Hash className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Hashtags</span>
          </div>
          <Input
            placeholder="Add hashtags (separated by spaces)"
            className="bg-gray-900 border-gray-700 text-white"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
          />
        </div>

        {/* Upload Button */}
        <Button 
          className="w-full py-6" 
          onClick={handleUpload} 
          disabled={!videoFile || isUploading}
        >
          {isUploading ? "Uploading..." : "Post Now"}
        </Button>
      </div>

      <Navbar />
    </div>
  );
};

export default Upload;
