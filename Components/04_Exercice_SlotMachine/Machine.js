// function getNum () {
//     return Math.floor(Math.random() * 3) + 1;
// }
// vari =[getNum(), getNum(), getNum()]

class Machine extends React.Component {
    render () {
        let props = this.props.s1
        let slot =[];

        for (i=0;i<props.length;i++){
            slot = shift.props[i];
        }

        if (this.props.s1 === this.props.s2 && this.props.s1 === this.props.s3) {
            slot = "You Win! " + this.props.s1
        } else {
            slot = "You lose, try again!"
        }
        return (
            <div>
                <div>{this.props.s1 + this.props.s2 + this.props.s3}</div>
                <p>{slot}</p>
            </div>
        )
    }
}