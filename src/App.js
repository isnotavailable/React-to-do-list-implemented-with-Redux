import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './TaskReducer';
import AddTask from './AddTask';
import { useSelector } from 'react-redux';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './TodoList';
function App() {
  const store = createStore(taskReducer);

  return (
    <div className="App">
      <Provider store={store}>
      <Navbar></Navbar>
      <AddTask></AddTask>
      <TodoList></TodoList>
       </Provider>
      </div>
  );
}

export default App;
