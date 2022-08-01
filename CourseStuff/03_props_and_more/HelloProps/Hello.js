class Hello extends React.Component {
    render () {
        let info = "!".repeat(this.props.info)
        return (
            <div>
                <p>Hi! To {this.props.to} From {this.props.from}{info}</p> 
                <img src={this.props.img} />
            </div>
        )
    }
}