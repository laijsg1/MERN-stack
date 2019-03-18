const contentNode = document.getElementById('contents');

const continents=['af','am','as'];
const message=continents.map(c=> `Hello ${c}!`).join(' ');

const component = <h1>{message}</h1>;        // A simple component, written in JSX

ReactDOM.render(component, contentNode);      // Render the component inside the content Node
