function getNum () {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render () {
        const num = getNum();
        let msg;

        if(num === 5){
            msg = "Good!"
            
        } else {
            msg = "Bad!"
        }
        return (
            <div>
                <h1>Your number is: {num} </h1>
                <p>{msg}</p>
            </div>
        );
    }
}