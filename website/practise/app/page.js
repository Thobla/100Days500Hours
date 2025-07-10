import LikeButton from './like-button'; 

function createTitle(title) {
	return title ? title : "Default title";
}
function Header(props) {
	return <h1>{ createTitle(props.title) }</h1>;
}
export default function HomePage() {
	const names = ['Nils', 'Mikal', 'Fitjar'];
	return (
		<div>
		<Header/><Header title="React"/>
		<ul>
		{names.map((name) => (
			<li key={name}>{name}</li>
		))}
		</ul>
		<LikeButton/>
		</div>

	);
}
