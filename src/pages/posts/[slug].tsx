import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchApi, PostData } from "../../api/mockedApi";
import { Layout } from "src/components/layout";
import FullPost from "@/molecules/FullPost";

const BlogPost: React.FC<PostData[]> = (postsList) => {
  const router = useRouter();
  const { slug } = router.query;
  const index = Number(slug) - 1;

  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<PostData>();
  useEffect(() => {
    fetchApi.then((value) => {
      setPost(value[index]);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout>
      {isLoading ? "Loading post content" : <FullPost post={post} />}
    </Layout>
  );
};

export default BlogPost;
