import { h, Component } from 'preact';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render(props, { name }) {
    return (
      <div>
        <input
          type="text"
          name="name"
          onInput={this.handleOnChange}
          value={name}
        />
        <h1>
          Hello World!! {name}
        </h1>
      </div>
    );
  }
}

export default App;

