export default class RoadsterData extends Component {
    constructor(){
      super();
      this.state = {
      roadsterspecs: {}
      }
    }
        componentDidMount() {
        axios
        .get('/v2/info/falconheavy').then(response =>{this.setState({rocketspec5: response.data}, console.log(response.data))})
        .catch(err => console.log("Now ya fucked up."))}
}