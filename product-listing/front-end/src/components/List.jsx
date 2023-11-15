function List(){
    
const bg_color=()=>{
    var alpha="0123456789ABCDEF"
 
var val='#'
for(var i=0; i<6; i++){
  
val+=alpha[Math.floor(Math.random()*16)]
document.body.style.backgroundColor = val;
}
}
    return(
        <div>
        <h1>BackGround Changer  </h1>
      
      <button onClick={bg_color}>change</button>
        
   
        </div>
    );
}
export default List;