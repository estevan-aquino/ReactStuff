class App extends React.Component {
    render(){
        return(
            <div>
                <Friend
                    name="Estevan"
                    hobbies={["Play Games", "Music", "Movies"]}
                    />

                <Friend
                    name="Teste"
                    hobbies={["Play Games", "Music", "Movies"]}
                    />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))