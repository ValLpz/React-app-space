import { useState, useEffect } from "react";
import  CircularProgress  from "@mui/material/CircularProgress";
import ".Apod.css"

const photoCard = (title, photo) => {
    return (
        <div className="photo-card">
            <h3 className="photo-title">{title}</h3>
            <img src={API_URL} alt={title} className="img"/>

        </div>
    );
}

function Apod() {
    const API_URL="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    const [photoData, setphotoData] = useState(null);
   
    useEffect(() => {
        const fetchData= async () => {
            const data = await fetch(API_URL);
            const res= await data.json();
            setphotoData({
                title: data.title,
                photo: API_URL,
            })
        };
        fetchData().catch((err) => console.error(err));
    }, []);
    return (
        <div className="nasa-photo">
            {!photoData? (
                <CircularProgress sx={{color:"#3a1078"}}/>
            ) : (
                <photoCard title={photoData.title} url={photoData.API_URL} />
            )
            }
        </div>
    )
}


export default Apod;