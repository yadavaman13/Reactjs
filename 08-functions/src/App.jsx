const App = () => {

  function btnClick(){
    console.log('button is clicked');
  }

  function btnEnter(){
    console.log('btn entered');
  }

  function onTyping(val){
    console.log(val);
  }

  function scrolling(elem){
    console.log("speed of scrolling:",elem.deltaY)
  }

  return (
    <div>
      <button onDoubleClick={btnClick}>Click me!</button>
      <button onMouseEnter={btnEnter}>Click me!</button><br />

      <input onChange={function(elem){
        onTyping(elem.target.value);
      }} 
      type="text" placeholder='Enter your name'/>

      <div 
      onMouseMove={(elem)=>{
        console.log(elem.clientY)
      }}
      className="box">

      </div>
    
      {/**scrolling */}
      <div onWheel={(elem)=>{
        scrolling(elem)
      }}>
          <div className="page1"></div>
          <div className="page2"></div>
      </div>
    </div>
  )
}

export default App
