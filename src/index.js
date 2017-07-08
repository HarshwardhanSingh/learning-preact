import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './components/App';

render(
	(
		<Provider store={store}>
			<App />
		</Provider>
	),
	document.querySelector('main'));
