import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tracker = () => {
  const [bugData, setBugData] = useState([]);

  useEffect(() => {
    const fetchBugData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get('https://bugtracker-jm8k3ia48-praveenkumars-projects.vercel.app/bug', config);
        
        setBugData(response.data);
      } catch (error) {
        console.error('Error fetching bug data:', error);
      }
    };

    fetchBugData();
  }, []);

  const handleDeleteBug = async (bugId) => {
    try {
      const token = localStorage.getItem('token');
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      await axios.delete(`https://bugtracker-jm8k3ia48-praveenkumars-projects.vercel.app/bug/${bugId}`, config);
      
      setBugData(prevBugData => prevBugData.filter(bug => bug._id !== bugId));
    } catch (error) {
      console.error('Error deleting bug:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Bug Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bugData.map((bug) => (
          <div key={bug._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{bug.title}</h2>
            <p className="text-gray-600 mb-2">{bug.description}</p>
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">Severity:</span>
              <span>{bug.severity}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Raised By:</span>
              <span>{bug.raised_by}</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="font-semibold mr-2">Created At:</span>
              <span>{new Date(bug.created_at).toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Updated At:</span>
              <span>{new Date(bug.updated_at).toLocaleString()}</span>
            </div>
            <button onClick={() => handleDeleteBug(bug._id)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracker;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BugDetails = () => {
//   const [bugData, setBugData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             // Retrieve token from localStorage
//             const token = localStorage.getItem('token');
            
//             // Set headers with token for authentication
//             const config = {
//               headers: {
//                 Authorization: `Bearer ${token}`
//               }
//             };
    
//             // Fetch bug data with token
//             const response = await axios.get('https://bugtracker-jm8k3ia48-praveenkumars-projects.vercel.app/bug', config);
            
//             setBugData(response.data);
//           } catch (error) {
//             console.error('Error fetching bug data:', error);
//             // Handle error here, for example, show an error message to the user
//           }    };

//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once after the initial render

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-semibold mb-4">Bug Tracker</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {bugData.map((bug) => (
//           <div key={bug._id} className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-2">{bug.title}</h2>
//             <p className="text-gray-600 mb-2">{bug.description}</p>
//             <div className="flex items-center mb-2">
//               <span className="font-semibold mr-2">Severity:</span>
//               <span>{bug.severity}</span>
//             </div>
//             <div className="flex items-center">
//               <span className="font-semibold mr-2">Raised By:</span>
//               <span>{bug.raised_by}</span>
//             </div>
//             <div className="flex items-center mt-4">
//               <span className="font-semibold mr-2">Created At:</span>
//               <span>{new Date(bug.created_at).toLocaleString()}</span>
//             </div>
//             <div className="flex items-center">
//               <span className="font-semibold mr-2">Updated At:</span>
//               <span>{new Date(bug.updated_at).toLocaleString()}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BugDetails;
