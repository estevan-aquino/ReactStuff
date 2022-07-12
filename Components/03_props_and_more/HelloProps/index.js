class App extends React.Component {
    render(){
        return(
            <div>
                <Hello
                 to="Ringo"
                 from="Paul"
                 num= {3}
                 data = {[1,2,3,4,5]}
                 isFunny={false}

                 info={5}
                 img="https://ci4.googleusercontent.com/proxy/kQGGXoxb1-J38VKm4pYYeXlDdThuDAZcoLWafwNMU6z2ozfhWURT7M-X9-tfR5GsnTOiHNWEiaeu4723W_bRFuUOhDBG_HglTSfFTh9zHviPaRL-JLSs_Md8PhWBQb06KGrVadOINjjH07vh9dBSKXY2=s0-d-e1-ft#https://static.kabum.com.br/conteudo/temas/001/imagens/mensageiro/2016/mensageiro_kabum_top.jpg"
                />
                <Hello to="Cher" from="Sonny"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))