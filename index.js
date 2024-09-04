import React from 'react';

function PodcastWebsite() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Podcast Hub</h1>
          <nav>
            <a href="#" className="px-4">Home</a>
            <a href="#about" className="px-4">About</a>
            <a href="#episodes" className="px-4">Episodes</a>
            <a href="#contact" className="px-4">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Podcast Hub</h2>
          <p className="text-xl mb-6">Listen to the latest episodes from your favorite podcast.</p>
          <a href="#episodes" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Listen Now</a>
        </div>
      </section>

      {/* Featured Podcast Episode */}
      <section className="py-10">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Featured Episode</h3>
          <div className="bg-white rounded shadow-md p-6 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-2">Episode Title</h4>
            <p className="text-gray-700 mb-4">
              This is a brief description of the featured episode. It gives listeners an idea of what the episode is about and why they should listen to it.
            </p>
            <audio controls className="w-full">
              <source src="episode.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>

      {/* Episodes List Section */}
      <section id="episodes" className="py-10 bg-gray-200">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">All Episodes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Episode Card */}
            <div className="bg-white rounded shadow-md p-4">
              <h4 className="text-xl font-bold mb-2">Episode 1</h4>
              <p className="text-gray-700 mb-4">A brief description of Episode 1.</p>
              <audio controls className="w-full">
                <source src="episode1.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            {/* More Episode Cards... */}
            <div className="bg-white rounded shadow-md p-4">
              <h4 className="text-xl font-bold mb-2">Episode 2</h4>
              <p className="text-gray-700 mb-4">A brief description of Episode 2.</p>
              <audio controls className="w-full">
                <source src="episode2.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="bg-white rounded shadow-md p-4">
              <h4 className="text-xl font-bold mb-2">Episode 3</h4>
              <p className="text-gray-700 mb-4">A brief description of Episode 3.</p>
              <audio controls className="w-full">
                <source src="episode3.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">About Us</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Podcast Hub is your go-to place for the best podcasts on various topics. Whether you're interested in technology, lifestyle, education, or entertainment, we have something for everyone. Join us and dive into the world of insightful and engaging conversations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p className="mb-4">Have questions or suggestions? We'd love to hear from you!</p>
          <form className="max-w-md mx-auto">
            <input type="text" className="w-full p-2 mb-4 rounded" placeholder="Your Name" />
            <input type="email" className="w-full p-2 mb-4 rounded" placeholder="Your Email" />
            <textarea className="w-full p-2 mb-4 rounded" placeholder="Your Message" rows="4"></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Podcast Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PodcastWebsite;
