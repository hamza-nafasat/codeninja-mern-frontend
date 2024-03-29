import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Container h="80vh">
			<VStack justifyContent={"center"} h="full" spacing={"4"}>
				<RiErrorWarningFill size={"5rem"} />
				<Heading children="Page Not Found" />
				<Link to="/">
					<Button fontSize={"1.4rem"} variant={"link"} children="	Go to home" />
				</Link>
			</VStack>
		</Container>
	);
};

export default NotFound;
