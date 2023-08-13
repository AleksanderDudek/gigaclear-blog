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
      <PostGrid posts={postsList} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const response = await fetchApi;
  const postsList: PostData[] = response;

  return {
    props: {
      postsList,
    },
  };
}

export default Home;
