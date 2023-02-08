import { useState, useEffect } from 'react';
import { config } from '../interfaces';

const useFetch = (url: string, options: config) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;
		const doFetch = async () => {
			setLoading(true);
			try {
				const res = await fetch(url, options);
				const json = await res.json();
				if (!signal.aborted) {
					setResponse(json);
				}
			} catch (e: any) {
				if (!signal.aborted) {
					setError(e);
				}
			} finally {
				if (!signal.aborted) {
					setLoading(false);
				}
			}
		};
		doFetch();
		return () => {
			abortController.abort();
		};
	});
	return { response, error, loading };
};
export default useFetch;
