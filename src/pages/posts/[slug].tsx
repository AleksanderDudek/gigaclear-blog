import React from "react";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { dateFormat, fetchApi, PostData } from "../../api/mockedApi";
import { Layout } from "src/components/layout";
import { format } from "date-fns";
import Image from "next/image";
import FullPost from "@/molecules/FullPost";
const PostWrapper = styled.div`
  padding: 16px;
`;

const PostTitle = styled.h1`
  font-size: 24px;
  color: #333;
`;

const PostContent = styled.div`
  margin-top: 16px;
  color: #666;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const BlogPost: React.FC<PostData[]> = ({ postsList }) => {
  const router = useRouter();
  const { slug } = router.query;
  const index = Number(slug) - 1;

  return (
    <Layout>
      <FullPost {...postsList[index]} />
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

export default BlogPost;
