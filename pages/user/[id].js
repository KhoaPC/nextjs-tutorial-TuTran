import Head from "next/head";
/* 
- Phải export getStaticPaths, getStaticProps dưới dạng một hàm độc lập.
- Chỉ chạy được ở trong thư mục `pages` 

getStaticProps:
- getStaticProps sẽ chạy lúc build time
- Nó có thể gọi đến API bên thứ 3 để lấy data 
- getStaticProps chỉ chạy ở server side

getStaticPaths: 
- Nếu muốn dùng `Dynamic Parameters` với getStaticProps,
thì cần định nghĩa trước các đường dẫn được tạo

- Nên sử dụng getStaticPaths nếu đang pre-render các trang tĩnh,
sử dụng dynamic routes và data trả về từ database


Ví dụ lấy ra 1 list các users, ta muốn lấy data của từng user theo id,
sẽ cần khai báo trước list id user đó ở trong getStaticPaths
*/
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
    // Id nào không được getStaticPaths trả về sẽ dẫn đến trang 404.
  };
}

export const getStaticProps = async (context) => {
  // context: url hiện tại của page
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return { props: { user: data } };
};

function Detail({ user }) {
  return (
    <>
      <Head>
        <title>NextJS | {user.name}</title>
        <meta name="keywords" content="NextJS" />
      </Head>
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
        <p>
          Address: {user.address.street}, {user.address.city}
        </p>
        <p>Company: {user.company.name}</p>
      </div>
    </>
  );
}

export default Detail;
