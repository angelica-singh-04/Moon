import React, { useState } from 'react';
import Button from "@/components/Button/Button";


const UploadForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        category: 'Photo',
        tags: '',
        email: ''
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0]);
    // };

    // const handleDragOver = (e) => {
    //     e.preventDefault();
    // };

    // const handleDrop = (e) => {
    //     e.preventDefault();
    //     const droppedFile = e.dataTransfer.files[0];
    //     setFile(droppedFile);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the API call to submit the form data and file
        console.log('Submitting:', { ...formData, file });
        onSubmit();
    };

    return (
        <div className="bg-black p-8 rounded-lg w-full max-w-2xl">
            {/* <h2 className="text-2xl font-semibold mb-6">Upload Your Media</h2>
            
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Guidelines</h3>
                <ul className="text-sm text-gray-400 list-disc list-inside">
                    <li>Allowed file types: JPG, PNG, GIF, MP4.</li>
                    <li>Maximum file size: 50MB.</li>
                    <li>Ensure high-quality, original content.</li>
                </ul>
            </div> */}

            {/* <form onSubmit={handleSubmit} className="space-y-6">
                <p>Name</p>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name / Username" 
                    value={formData.name} 
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title of Upload (e.g., Milky Way from Bangalore)" 
                    value={formData.title} 
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea 
                    name="description" 
                    placeholder="Description / Story" 
                    value={formData.description} 
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                
                <select 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Photo">Photo</option>
                    <option value="Artwork">Artwork</option>
                    <option value="Wallpaper">Wallpaper</option>
                    <option value="Video">Video</option>
                </select>

                <input 
                    type="text" 
                    name="tags" 
                    placeholder="Tags (#moon, #galaxy, #art)" 
                    value={formData.tags} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Optional Email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div 
                    className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer transition-colors duration-200 hover:bg-gray-700"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload').click()}
                >
                    <input 
                        id="file-upload" 
                        type="file" 
                        onChange={handleFileChange} 
                        className="hidden" 
                    />
                    {file ? (
                        <p className="text-sm text-green-400">✅ File Selected: {file.name}</p>
                    ) : (
                        <p className="text-sm">Drag & drop a file here, or click to browse</p>
                    )}
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Upload Your Media
                </button>
            </form> */}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
  <label
    htmlFor="file-upload"
    className="w-32 text-right text-sm text-neutral-400 font-regular"
  >
    Browse Media
  </label>
  <div
    className="flex-1 border-[0.4px] border-dashed border-neutral-800 p-3 rounded-md bg-neutral-900 text-neutral-500 text-xs
               cursor-pointer text-center hover:bg-neutral-800 transition-colors duration-200"
    onClick={() => document.getElementById('file-upload').click()}
  >
    {file ? `Selected: ${file.name}` : 'Click to browse or drag & drop a file'}
    <input
      id="file-upload"
      type="file"
      onChange={(e) => setFile(e.target.files[0])}
      className="hidden"
    />
  </div>
</div>


  <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
    <label className="w-32 text-right text-sm text-neutral-400 font-regular">Upload Title</label>
    <input 
      type="text" 
      name="name" 
      placeholder="e.g., “Lunar Eclipse – Bangalore, 2025”" 
      value={formData.name} 
      onChange={handleChange}
      required
      className="flex-1 p-3 rounded-md bg-neutral-900 text-neutral-500 text-xs border-[0.4px] border-neutral-800  focus:outline-none focus:ring-[0.5px] focus:ring-yellow-400"
    />
  </div>

<div className="flex flex-col md:flex-row md:items-start md:space-x-4">
  <label
    htmlFor="description"
    className="w-32 text-right text-sm text-neutral-400 font-regular pt-3"
  >
    Description
  </label>
  <textarea
    id="description"
    name="description"
    placeholder="Write your description here..."
    value={formData.description}
    onChange={handleChange}
    required
    rows="4"
    className="flex-1 p-3 rounded-md bg-neutral-900 text-neutral-500 text-xs border-[0.4px] border-neutral-800
               focus:outline-none focus:ring-[0.5px] focus:ring-yellow-400 resize-none"
  />
</div>


    <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
    <label className="w-32 text-right text-sm text-neutral-400 font-regular">Date of Capture</label>
    <input 
      type="date" 
      name="date" 
      placeholder="xyz@gmail.com" 
      value={formData.date} 
      onChange={handleChange}
      required
      className="flex-1 p-3 rounded-md bg-neutral-900 text-neutral-500 text-xs border-[0.4px] border-neutral-800  focus:outline-none focus:ring-[0.5px] focus:ring-yellow-400"
    />
  </div>

<div className="flex flex-col md:flex-row md:items-center md:space-x-4">
  <label
    htmlFor="tags"
    className="w-32 text-right text-sm text-neutral-400 font-regular"
  >
    Tags
  </label>
  <input
    id="tags"
    type="text"
    name="tags"
    placeholder="#moon, #galaxy, #art"
    value={formData.tags}
    onChange={handleChange}
    className="flex-1 p-3 rounded-md bg-neutral-900 text-neutral-500 text-xs border-[0.4px] border-neutral-800
               focus:outline-none focus:ring-[0.5px] focus:ring-yellow-400"
  />
</div>
<div className="flex flex-col md:flex-row md:items-center md:space-x-4">
  <label
    htmlFor="location"
    className="w-32 text-right text-sm text-neutral-400 font-regular"
  >
    Location
  </label>
  <input
    id="location"
    type="text"
    name="location"
    placeholder="City, Country"
    value={formData.location}
    onChange={handleChange}
    className="flex-1 p-3 rounded-md bg-neutral-900 text-neutral-500 text-xs border-[0.4px] border-neutral-800
               focus:outline-none focus:ring-[0.5px] focus:ring-yellow-400"
  />
</div>
{/* 
                    <Button 
                    label="Read more"
                    direction="left"
                    /> */}
</form>

        </div>
    );
};

export default UploadForm;