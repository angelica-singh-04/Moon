import React, { useState } from 'react';
import HeroButton from "@/components/Button/Button";
import Primary from "@/components/PrimaryButton/PrimaryButton";
import Secondary from "@/components/SecondaryButton/SecondaryButton";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the API call to submit the form data and file
        console.log('Submitting:', { ...formData, file });
        onSubmit();
    };

    return (
        <div className="bg-black p-8 rounded-lg w-full max-w-2xl">
            <div className='border-b border-neutral-800 p-2 text-md flex justify-end'>Upload Your Media</div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-10">
                
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
                {/* <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Upload Your Media
                </button> */}
<div className='flex gap-2 justify-end'>
        <Secondary
        label="Cancel"
        />  
        <Primary 
        label="Upload Your Media" 
        type="submit" 
        className="text-xs py-1 px-2"
        />

</div> 
</form>

        </div>
    );
};

export default UploadForm;