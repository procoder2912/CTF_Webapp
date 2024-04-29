import React from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = ({children,accessBy})=>{
    
        axios.get('http://localhost:3001',{withCredentials:true})
        .then(res=>{
            if(accessBy==="non-authenticated")
            {
                if(res.data.Status!=='Success')
                {
                    console.log("rendered");
                    return children;
                }
            }
            else if(accessBy==="authenticated")
            {
                if(res.data.Status==='Success')
                {
                    console.log("srendered");
                    // return children
                    <Navigate to='/'></Navigate>
                }
            }
            return <Navigate to='/'></Navigate>
        })
    
};
export default PrivateRoutes;
