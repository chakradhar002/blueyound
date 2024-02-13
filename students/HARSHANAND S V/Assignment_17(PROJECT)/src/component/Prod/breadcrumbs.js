const breadcrumbs=(props)=>{
    return(
    <div className="breadcrumbs" style={{paddingTop:'80px',paddingBottom:'80px'}}>
        <div className="container">
          <h2>{props.header}</h2>
          <p>
            {props.description}
          </p>
        </div>
      </div>
    );
}
export default breadcrumbs;