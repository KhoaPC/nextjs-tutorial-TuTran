import Link from "next/link";

function Header() {
  return (
    <>
      <div class="topnav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/user">User</Link>
      </div>
    </>
  );
}

export default Header;
