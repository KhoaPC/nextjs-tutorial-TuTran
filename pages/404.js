import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="keywords" content="NextJS" />
      </Head>
      <h2>Oooops....</h2>
      <h1>Page Not Found</h1>
    </>
  );
}

export default NotFound;
