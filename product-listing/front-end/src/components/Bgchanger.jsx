function Bgchanger(){
    
const bg_color=()=>{
    var alpha="0123456789ABCDEF"
    var val='#'
    for(var i=0; i<6; i++){
      val+=alpha[Math.floor(Math.random()*16)]
      document.querySelector(".bg-color").style.backgroundColor = val;
      document.body.style.backgroundColor = val;
      }
  }
    return(
        <div className="bg-color">
        <h1>BackGround Changer  </h1>
      <button onClick={bg_color}>BG Change</button>
        </div>
    );
}
export default Bgchanger;
