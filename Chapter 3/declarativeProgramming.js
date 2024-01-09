/**
 * Declarative programming is a style of programming
 * where applications are strucutred in a way that prioritizes
 * describing what should happen over defining how it 
 * should haapen
 */
const string = "This is the mid day show with Cheryl Waters";
const urlFriendly = string.replace(/ /g, "-");
console.log(urlFriendly);


const Welcome = () => (
    <div id="welcome">
        <h1>Hello World</h1>
    </div>
);

ReactDOM.render(<Welcome />, document.getElementById('target'))
