import React from 'react';

const SubmissionConfirmation = ({ onReset }) => {
    return (
        <div className="bg-[bg-gradient-to-br from-orange-400 to-red-400
] p-8 rounded-lg shadow-xl w-full max-w-md text-center">
            <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Thanks for sharing your creation!</h2>
            <p className="text-gray-400 mb-6">Our team will review it before it appears in the gallery.</p>
            <button
                onClick={onReset}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Upload another file
            </button>
        </div>
    );
};

export default SubmissionConfirmation;