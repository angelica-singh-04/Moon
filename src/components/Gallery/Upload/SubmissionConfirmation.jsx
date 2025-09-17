import React from 'react';
import Secondary from "@/components/SecondaryButton/SecondaryButton";

const SubmissionConfirmation = ({ onReset }) => {
    return (
        <div className="bg-black p-8 rounded-lg flex flex-col justify-center items-center shadow-xl w-full max-w-md text-center">
            <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h2 className="text-xl font-medium text-white mb-2">Thanks for sharing!</h2>
            <p className="text-gray-400 mb-6 text-sm">Our team will review it before it appears in the gallery.</p>
            <Secondary
            onClick={onReset}
            label='Upload Another Media'
            />

        </div>
    );
};

export default SubmissionConfirmation;