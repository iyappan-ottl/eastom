import React from 'react';

const NewsletterSubscription = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-5 p-14 mb-10 justify-between mx-5 lg:mx-32 bg-gradient-to-r from-emerald-300 to-lime-300 rounded">
      <div className="w-full lg:w-2/3 flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Subscribe to our Newsletter</h1>
        <p className="text-lg">Stay up-to-date with the latest news and updates</p>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-2 justify-center text-md">
        <input
          type="text"
          placeholder="Enter your email address"
          className="p-2 border rounded-md text-black border-black placeholder:text-black"
        />
        <button className="bg-black font-bold text-xl text-white px-8 py-2 rounded-md hover:bg-white hover:text-black">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
