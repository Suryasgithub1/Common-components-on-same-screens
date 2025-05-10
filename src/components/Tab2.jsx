import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTab2Data } from '../utils/tab2Slice'; 
import Tab3 from "./Tab3";
import APIResults from "./APIResults";

const ShowData = () => {
    const [showOtherTab, setShowOtherTab] = useState(false);
    const [loading, setLoading] = useState(false); 

    
    const data = useSelector((state) => state.tab2.data);
    const dispatch = useDispatch();

    const navigate = useNavigate();

   
    const handleClickShowData = async () => {
        if (data.length === 0) {
            setLoading(true); 
            await getAPIData();
        } else {
            setShowOtherTab(true); 
        }
    };

    
    const getAPIData = async () => {
        const response = await fetch("https://reqres.in/api/users?page=1", {
            headers: {
                'x-api-key': 'reqres-free-v1',
            },
        });
        const json = await response.json();
        dispatch(setTab2Data(json.data));  
        setLoading(false); 
        setShowOtherTab(true); 
    };

    useEffect(() => {
        
        setShowOtherTab(false);
    }, []);

    return (
        <div>
            
            {!showOtherTab ? (
                <div className="flex flex-col align-center justify-center items-center mt-10">
                    <p className="text-3xl text-green-600">Click the button below to see data</p>
                    <button
                        onClick={handleClickShowData}
                        className="bg-gray-500 rounded-xl p-3"
                    >
                        Click me
                    </button>

                    
                    {loading && <p>Loading...</p>}

                    
                    {data.length > 0 && !loading && <APIResults detailsAPI={data} />}
                </div>
            ) : (
                
                <Tab3 />
            )}
        </div>
    );
};

export default ShowData;
