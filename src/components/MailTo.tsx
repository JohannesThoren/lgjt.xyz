export default function MailTo(params: { mail: string }) {
	return (
		<a className="text-sky-500 underline" href={"mailto:" + params.mail}>
			{params.mail}
		</a>
	);
}
