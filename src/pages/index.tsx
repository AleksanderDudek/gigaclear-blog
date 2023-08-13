import React, { FC } from "react";
import { Layout } from "../components/layout";

import { fetchApi, PostData } from "../api/mockedApi";
import PostGrid from "src/components/organisms/PostGrid";

interface HomePropsInterface {
  postsList: PostData[];
}

const Home: FC<HomePropsInterface> = ({ postsList }) => {
  return (
    <Layout>
      <h1 style={{ color: "rgba(133, 0, 0, 1)" }}>Check our latest Posts</h1>
      <PostGrid posts={postsList} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const response = await fetchApi;
  const postsList: PostData[] = response;
  console.log(postsList);
  return {
    props: {
      postsList,
    },
  };
}

export default Home;
