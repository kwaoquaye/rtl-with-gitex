import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <header>
        <h3 className="">Counter App to grasp the gitex workflow extension</h3>
        <div className="">
          <article>Authored by:&nbsp;
            <a href="https://www.linkedin.com/in/humphrey-quaye-8622a2191/" target={"_blank"} rel="author">Quaye&nbsp;Humphrey&#8209;Kwao</a>
            <time  dateTime="2022-08-30" title="August 30th, 2022"> on 8/30/22</time>
          </article>
        </div>
      </header>

      <main className="">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter /><br />
        <small>first major release.. We went real public at this point</small>
        <small>another bug fix 😪</small>
      </main>
      <footer>v1.2.0</footer>
    </div>

  );
}

export default App;
