'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Feedback {
  name: string;
  comment: string;
  image: string | null;
}

const FeedbackPage = () => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const storedFeedbacks = localStorage.getItem('feedbacks');
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleComment = () => {
    if (!name || !comment) return;
    
    const newFeedback: Feedback = { name, comment, image };
    setFeedbacks([newFeedback, ...feedbacks]);
    setName('');
    setComment('');
    setImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">Share Your Experience</h1>
      <p className="text-gray-700 text-lg mb-6">Comment respectfully and share your journey.</p>
      
      <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:border-green-600"
        />
        <textarea 
          placeholder="Write your comment here..." 
          value={comment} 
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300 mb-4 h-28 focus:outline-none focus:border-green-600"
        />
        
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload}
          className="mb-4"
        />
        
        <button 
          onClick={handleComment} 
          className="w-full bg-green-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-800 transition-all"
        >
          Comment
        </button>
      </div>
      
      <div className="w-full max-w-2xl mt-6 space-y-4">
        {feedbacks.slice(0, 10).map((feedback, index) => (
          <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md">
            {feedback.image && (
              <Image 
                src={feedback.image} 
                alt="User Image" 
                width={40} 
                height={40} 
                className="rounded-full mr-4"
              />
            )}
            <div>
              <h2 className="text-lg font-semibold text-black">{feedback.name}</h2>
              <p className="text-gray-700">{feedback.comment}</p>
            </div>
          </div>
        ))}
        {feedbacks.length > 10 && <p className="text-center text-gray-600">Showing latest 10 comments...</p>}
      </div>
    </div>
  );
};

export default FeedbackPage;
