import Head from "next/head";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error } = useSWR("/api/status", fetcher);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <Head>
        <title>Lovable Project</title>
      </Head>
      <h1>Welcome to Lovable Project</h1>
      <p>A modern Next.js app scaffold.</p>
      {error && <p>Error: {error.message}</p>}
      {!data && <p>Loading...</p>}
      {data && (
        <p>
          API Status: <strong>{data.status}</strong> at{" "}
          {new Date(data.timestamp).toLocaleTimeString()}
        </p>
      )}
    </div>
  );
}