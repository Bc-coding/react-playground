import React, { useState, useEffect } from "react";
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

const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(credentials: { email: $email, password: $password }) {
      token
      userErrors {
        message
      }
    }
  }
`;

export default function Signin() {
  let router = useRouter();
  const [signin, { data, loading }] = useMutation(SIGNIN);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    signin({
      variables: {
        email,
        password,
      },
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      if (data.signin.userErrors.length) {
        setError(data.signin.userErrors[0].message);
      }
      if (data.signin.token) {
        localStorage.setItem("token", data.signin.token);
        router.push("/textEditor");
      }
    }
  }, [data]);

  return (
    <FlexGrid>
      <Row>
        <Column sm={3} md={7}>
          <Form>
            <FormGroup legendText="Signin form">
              <Stack gap={7}>
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
                {error && <p>{error}</p>}
                <Button
                  kind="primary"
                  tabIndex={0}
                  type="submit"
                  onClick={handleClick}
                >
                  Signin
                </Button>
              </Stack>
            </FormGroup>
          </Form>
        </Column>
      </Row>
    </FlexGrid>
  );
}
