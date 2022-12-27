import Head from "next/head";
import Link from "next/link";
import { use } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { allUser: data },
  };
};

function User({ allUser }) {
  return (
    <>
      <Head>
        <title>NextJS | User</title>
        <meta name="keywords" content="NextJS" />
      </Head>
      <div>
        <h1>User:</h1>
        {allUser.map((user) => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <h4>{user.name}</h4>
          </Link>
        ))}
      </div>
    </>
  );
}

export default User;
