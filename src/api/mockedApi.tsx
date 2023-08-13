export const fetchApi: Promise<PostData[]> = fetch(
  "http://localhost:3333/data"
).then(function (response) {
  return response.json();
});
export const dateFormat = "dd MMM yyy";

export type PostData = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  tags: string[];
  imageUrl: string;
};
