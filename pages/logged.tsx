import { getSession } from "next-auth/react";

const loggedPage = ({ session }) => {
  console.log(session);
  // const { name, email } = session.user;
  return <div>Welcome </div>;
};

export default loggedPage;

export async function getServerSideProps({ req, res }) {
  //is currently logged in
  const session = await getSession({ req });
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      session,
    },
  };
}