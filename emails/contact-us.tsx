import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactUsEmail() {
  return (
    <Html>
      <Head />
      <Preview>This is shown in the inbox -- email abstract</Preview>
      <Tailwind>
        <Body className="bg-slate-100">
          <Container className="">
            <Heading>Hi, this is a test email!</Heading>
            <Text className="text-base">
              Thanks for signing up for my newsletter. You can unsubscribe
              anytime.
            </Text>
            <Text>Here's a picture of a cat:</Text>
            <Img
              src="https://placekitten.com/600/300"
              alt="Cat"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
