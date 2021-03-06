import React from 'react';
import { connect } from "react-redux";
import Button from '../../components/Button';
import { openModal } from "../../actions/modalActions"
import { store } from "../../configureStore";
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const action = (type, payload) => store.dispatch({type, payload});
class Shell extends React.Component {

  render() {
    return (
      <div className="App">
    <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button onClick={() => action("Test", "New data")}>Saga Test</Button>
          <div>
        <Button type="primary" onClick={() => this.props.openModal("TESTING HEADING", <p>Lorem ipsum</p>)}>
          Open Modal
        </Button>
        <br />
        {JSON.stringify(this.props.storeState)}
      </div>
        </header>
        
      </div>
    );
  }
}

export default connect((state) => ({storeState: state}), { openModal })(SagaTest);