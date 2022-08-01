function slot() {
   let valor = Math.floor(Math.random() * 3) + 1;
   switch (valor){
    case 1: 
        return "🍇";
        break;
    case 2: 
        return "🍊";
        break;
    case 3: 
        return"🍒";
        break;
   }
}
class App extends React.Component {
    render(){
        return(
            <div>
                <h1> Slot Machine !!</h1>
                <Machine
                 s1={slot()}
                 s2={slot()}
                 s3={slot()}
                 />
                 <Machine
                 s1={slot()}
                 s2={slot()}
                 s3={slot()}
                 />
                 <Machine
                 s1={slot()}
                 s2={slot()}
                 s3={slot()}
                 />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))