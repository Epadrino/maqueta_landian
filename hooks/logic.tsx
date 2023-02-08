//Fuction para copiar referido
export const CopyText = async (referido: string) => {
	const copy = referido;
	await navigator.clipboard.writeText(referido).then(() => {
		alert('Copy: ' + copy);
	});
	return;
};
