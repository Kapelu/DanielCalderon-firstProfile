import logo from './logo.svg'
import './App.css'
import ConceptosBasicos from './components/ConceptosBasicos'

function App() {
	return (
		<>
			<div className='App'>
				<header className='App-header'>
					<section>
						<img src={logo} className='App-logo' alt='logo' />
						<section className='titulo'>
							<h1>Curso de React</h1>
							<p>Jon Mircha - React Route</p>
							<a href='https://reactrouter.com' target='_blank' rel='noreferrer'>Documentacion de React Route</a>
						</section>
					</section>

					<section>
						{/* Video 53 - Introducción y definicion de rutas */}
						<hr />
						<ConceptosBasicos />
					</section>
				</header>
			</div>
		</>
	)
}
export default App