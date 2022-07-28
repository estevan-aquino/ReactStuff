// function getNum () {
//     return Math.floor(Math.random() * 3) + 1;
// }
// vari =[getNum(), getNum(), getNum()]

class Machine extends React.Component {
    render () {
        const {s1, s2, s3} = this.props;

        if (s1 === s2 && s1 === s3) {
            slot = "You Win! " + this.props.s1
        } else {
            slot = "You lose, try again!"
        }
        return (
            <div>
                <div>{s1}{s2}{s3}</div>
                <p>{slot}</p>
            </div>
        )
    }
}