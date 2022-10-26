import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import {
  Form,
  Button,
  TextInput,
  Stack,
  FormGroup,
  FlexGrid,
  Row,
  Column,
  TextArea,
} from "@carbon/react";

const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $bio: String!
  ) {
    signup(
      credentials: { email: $email, password: $password }
      name: $name
      bio: $bio
    ) {
      token
      userErrors {
        message
      }
    }
  }
`;

export default function Signup() {
  let router = useRouter();
  const [signup, { data, loading }] = useMutation(SIGNUP);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    signup({
      variables: {
        email,
        password,
        name,
        bio,
      },
    });
  };

  useEffect(() => {
    if (data) {
      if (data.signup.userErrors.length) {
        setError(data.signup.userErrors[0].message);
      }
      if (data.signup.token) {
        localStorage.setItem("token", data.signup.token);
        router.push("/textEditor");
      }
    }
  }, [data, router]);

  return (
    <FlexGrid>
      <Row>
        <Column sm={3} md={7}>
          <Form>
            <FormGroup legendText="Signup form group">
              <Stack gap={7}>
                <TextInput
                  id="test2"
                  invalidText="Invalid error message."
                  labelText="Name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />

                <TextInput
                  id="test2"
                  invalidText="Invalid error message."
                  labelText="Email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextInput
                  id="test2"
                  invalidText="Invalid error message."
                  labelText="Password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <TextArea
                  labelText="Bio"
                  helperText="Tell us a little bit about yourself"
                  cols={50}
                  rows={4}
                  id="text-area-1"
                  onChange={(e) => setBio(e.target.value)}
                />

                {error && <p>{error}</p>}
                <Button
                  kind="primary"
                  tabIndex={0}
                  type="submit"
                  onClick={handleClick}
                >
                  Signup
                </Button>
              </Stack>
            </FormGroup>
          </Form>
        </Column>
      </Row>
    </FlexGrid>
  );
}
