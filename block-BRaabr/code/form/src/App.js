import User from './component/Errorinput';
import Multipleinput from './component/MultiInput';

function App() {
  return (
    <div className="App">
      <section className='form'>
        <h1>Form</h1>
      <Multipleinput/>
      </section>
      <section className='form'>
      <h1>
        Registration Form
      </h1>
       <User/>
      </section>
    </div>
  );
}

export default App;
