import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Foodie</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Menu</a>
            <a href="#" className="text-gray-700 hover:text-green-500">About</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Delicious Food, Delivered Fast</h2>
          <p className="text-lg text-gray-600 mb-6">Explore your favorite meals and get them delivered right to your doorstep.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300">
            Explore Menu
          </button>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">Popular Dishes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Margherita Pizza', image: '🍕', price: '$12' },
              { name: 'Veggie Burger', image: '🍔', price: '$9' },
              { name: 'Pasta Alfredo', image: '🍝', price: '$11' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
                <div className="text-5xl text-center mb-4">{item.image}</div>
                <h4 className="text-xl font-semibold mb-2 text-center">{item.name}</h4>
                <p className="text-center text-green-600 font-medium">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="text-center">&copy; 2025 Foodie. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default HomePage;
