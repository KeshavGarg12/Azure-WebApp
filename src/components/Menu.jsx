// import React, { useEffect, useState } from 'react';

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:5000/menu')
//       .then((res) => res.json())
//       .then((data) => {
//         setMenuItems(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching menu:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading menu...</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Menu</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded shadow-md p-4 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold">{item.name}</h2>
//             <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching menu:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading menu...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow-md p-4 hover:shadow-lg transition"
          >
            {/* Display image or emoji */}
            <div className="text-5xl text-center mb-4">
              {item.image.startsWith('http') ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto h-16 w-16 object-cover rounded"
                />
              ) : (
                item.image
              )}
            </div>
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
