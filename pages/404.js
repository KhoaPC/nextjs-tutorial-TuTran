import { useRouter } from "next/router";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Sau 5s điều hướng về trang chủ
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <h2>Oooops....</h2>
      <h1>Page Not Found</h1>
    </>
  );
}

export default NotFound;
