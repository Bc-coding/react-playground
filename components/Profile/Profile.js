import { useRouter } from "next/router";
// import AddPostModal from "../../components/AddPostModal/AddPostModal";
import { gql, useQuery } from "@apollo/client";
import Post from "../post/post";

const GET_PROFILE = gql`
  query GetProfile($userId: ID!) {
    profile(userId: $userId) {
      id
      bio
      isMyProfile
      user {
        id
        name
        email
        posts {
          id
          title
          content
          createdAt
          published
        }
      }
    }
  }
`;

export default function Profile({ id }) {
  const { data, error, loading } = useQuery(GET_PROFILE, {
    variables: {
      userId: Number(id),
    },
  });

  console.log(data, error, loading);

  if (error) return <div>Error page</div>;

  if (loading) return <div>spinning...</div>;

  const { profile } = data;

  return (
    <>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex ",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>{profile.user.name}</h1>
          <p>{profile.bio}</p>
        </div>
        {/* <div>{profile.isMyProfile ? <AddPostModal /> : null}</div> */}
      </div>
      <div>
        {profile.user.posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              content={post.content}
              id={post.id}
              date={post.createdAt}
              user={profile.user.name}
              published={post.published}
              isMyProfile={profile.isMyProfile}
            />
          );
        })}
      </div>
    </>
  );
}
