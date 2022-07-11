// class Hello extends React.Component {
//     render(){
//         return <h1>Hello There! Test Hmmmm</h1>;
//     }
// }

// function Hello() {
//     return(
//     <div>
//         <h1>Hello There! Function Version O.o</h1>
//         <h1>O.o</h1>
//         <h1>o.O</h1>
//         <h1>O.O</h1>
//     </div>
// }
//===================================================================
// function getMood(){
//     const moods = ['Angry', 'Hungry', 'Tired'];
//     return moods [Math.floor(Math.random() * moods.length)];
// }

// class JSXdemo extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>My Current Mood is: {getMood()}</h1>
//             </div>
//         )
//     }
// }

// getMood() retorna um numero aleatorio do array declarado dentro de si mesmo.
// é possivel declarar varias coisas dessa maneira da qual foi descrita acima para pegar o "getMood()"


// function getNum () {
//     return Math.floor(Math.random() * 10) + 1;
// }

// class NumPicker extends React.Component {
//     render () {
//         const num = getNum();
//         let msg;

//         if(num === 5){
//             msg = "Good!"
//         } else {
//             msg = "Bad!"
//         }
//         return (
//             <div>
//                 <h1>Your number is: {num} </h1>
//                 <p>{msg}</p>
//                 {
//                     num === 5 && 
//                     <img src="https://i.pinimg.com/originals/1c/1b/fa/1c1bfae1dcf422891f0005deabf12314.gif"/>
//                 }
//             </div>
//         );
//     }
// }
class App extends React.Component {
    render() {
        return(
            <div>
                <Hello />
                <NumPicker />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
// script do reactDOM chama a função render, (Classe que deseja rodar, aonde deseja rodar a classe);

