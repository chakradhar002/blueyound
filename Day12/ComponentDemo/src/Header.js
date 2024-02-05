function Header(props){
     const shoot = ()=>{
    alert(" greate shot !")

     }

    return (
     <><h1> I am HEader...{props.brand}</h1>
     <button onClick={shoot}>Take the shot!</button>
     
     </>
     
  )
}

export default Header;