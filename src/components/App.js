import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { fetchUserAction } from '../actions/userActions';

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
    this.props.fetchUserAction(value);
  }

  render(props, { name }) {
    console.log(props);
    return (
      <div>
        <input
          type="text"
          name="name"
          onInput={this.handleOnChange}
          // value={name}
        />
        <h1>
          Hello World!! {name}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
  inFlight: state.user.inFlight
})

export default connect(mapStateToProps, {
  fetchUserAction,
})(App);

