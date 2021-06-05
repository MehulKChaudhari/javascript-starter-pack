import App from './App';
import icon from './icon.svg';

const root = document.getElementById("root");

root.innerHTML = `
${App ({greet: "Hey"})}
<h1 class="main">The javascript starter pack!</h1>
<p>Make your app's with modern javascript which runs on all browsers, and with the optimisations and basic loaders.</P>
<img src="${icon}" alt="sample icon"/>
`;