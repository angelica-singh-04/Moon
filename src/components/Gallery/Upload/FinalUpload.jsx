import React, { useState } from 'react';
import UploadForm from "@/components/Gallery/Upload/UploadForm";
import SubmissionConfirmation from "@/components/Gallery/Upload/SubmissionConfirmation";


const App = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-black text-gray-200 p-8 flex flex-col items-center justify-center">
            {!isSubmitted ? (
                <UploadForm onSubmit={handleFormSubmit} />
            ) : (
                <SubmissionConfirmation onReset={() => setIsSubmitted(false)} />
            )}
        </div>
    );
};

export default App;