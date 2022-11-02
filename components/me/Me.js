import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import CenteredLayout from "../layout/centeredLayout";

const GET_ME = gql`
  query GetMe {
    me {
      id
      name
      email
    }
  }
`;

const Wrapper = styled.section`
  padding-top: -80px;
`;

export default function Me() {
  const { data, error, loading } = useQuery(GET_ME);

  console.log(data, error, loading);

  if (error) return <div>Error page</div>;

  if (loading) return <div>spinning...</div>;

  const { me } = data;

  return (
    <CenteredLayout>
      <Wrapper>
        <h1>{me.name}</h1>
        <br />
        <p>{me.email}</p>
      </Wrapper>
    </CenteredLayout>
  );
}
