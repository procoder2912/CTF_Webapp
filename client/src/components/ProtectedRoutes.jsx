import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

export default function ProtectedRoutes() {
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001', { withCredentials: true })
      .then(res => {
        if (res.data.Status === 'Success') {
          setValid(true);
        } else {
          setValid(false);
        }
      })
      .catch(err => {
        console.log(err);
        setValid(false);
      })
      .finally(() => {
        setLoading(false); // Set loading to false once the request is completed
      });
  }, []); // Empty dependency array for componentDidMount-like behavior

  if (loading) {
    // You can show a loading spinner or message while the request is in progress
    return <div>Loading...</div>;
  }

  return valid ? <Outlet /> : <Navigate to="/" />;
}
// In this code, setValid is used to update the valid state variable based on the result of the Axios call. The useEffect hook will run after the initial render (similar to componentDidMount in class components) and will update the valid state when the Axios call completes. This will cause your component to re-render, and the correct route (either <Outlet /> or <Navigate />) will be rendered based on the value of valid.





