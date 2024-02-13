import { Outlet, Link } from "react-router-dom";
const furniture_gallary=(props)=>{
    return(
        <>
        <div style={{ margin: '0 10px 20px', height: '200px', width: '200px', textAlign: 'center' }}>
            <Link to={"/product/"+ props.header+"/"+props.id}> <img src={props.url} alt="Bookcases & Shelving Units" style={{ maxWidth: '100%', height: 'auto' }} /></Link> 
            <div style={{ marginTop: '10px' }}>
                <p>{props.name}</p>
            </div>
        </div>

        </>
    );
};

export default furniture_gallary;