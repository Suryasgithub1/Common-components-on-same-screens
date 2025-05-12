import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTab2Data } from "../utils/tab2slice"
import Tab3 from "./Tab3";
import APIResults from "./APIResults";

const ShowData = ({handleClick}) => {
    const [showOtherTab, setShowOtherTab] = useState(false);
    const [loading, setLoading] = useState(false); 

    //console.log(renderComponent)
    
    const data = useSelector((state) => state.tab2.data);
    const dispatch = useDispatch();

    const navigate = useNavigate();
   
    const handleClickShowData = async () => {
        if (data.length === 0) {
            setLoading(true); 
            await getAPIData();
        }
        else{
            null
        }
    };

    useEffect(()=>{
        handleClickShowData();
    })
    
    const getAPIData = async () => {
        const response = await fetch("https://reqres.in/api/users?page=1", {
            headers: {
                'x-api-key': 'reqres-free-v1',
            },
        });
        const json = await response.json();
        dispatch(setTab2Data(json.data));  
        setLoading(false);  
    };

        const handleClickToNavigateToTab3 = (() => {
                setShowOtherTab(true);
                handleClick({ target: { textContent: "Recursive Function" } });
        });


    return (
        <div>
                <div className="flex flex-col align-center justify-center items-center mt-3">
                    {loading && <p>Loading Data...</p>}
                    {data.length > 0 && !loading && <APIResults detailsAPI={data} />}
                    <p className="text-3xl text-green-600">Click the button below to go to Recursive Function Tab</p>
                    <button
                        onClick={handleClickToNavigateToTab3}
                        className="bg-gray-500 rounded-xl p-3"
                    >
                        Click me
                    </button>
                </div>
        </div>
    );
};

export default ShowData;
