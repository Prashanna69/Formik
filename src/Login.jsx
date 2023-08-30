import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";

export default function Login() {
  const [gender, setGender] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      pass: "",
      mail: "",
      gender: "",
    },
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Box
        minH="100vh"
        bgGradient="linear(to-b, #435334 , #9EB384 , #CEDEBD, #FAF1E4 )"
      >
        <Flex align="center" justify="center">
          <Box bg="#f1f1f1" width="auto" padding="2rem">
            <Flex flexDir="column" align="center">
              <Heading fontSize="2rem">Formik</Heading>
              <form
                style={{ marginTop: "2rem" }}
                onSubmit={formik.handleSubmit}
              >
                <FormLabel>Usename:</FormLabel>
                <Input
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                />
                <FormLabel>Password:</FormLabel>
                <Input
                  id="pass"
                  onChange={formik.handleChange}
                  value={formik.values.pass}
                  type="password"
                />
                <FormLabel>Email:</FormLabel>
                <Input
                  id="mail"
                  onChange={formik.handleChange}
                  value={formik.values.mail}
                  type="email"
                />
                <FormLabel>Gender:</FormLabel>
                <RadioGroup
                  id="gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                >
                  <HStack spacing="1rem">
                    <Radio gender="male" colorScheme="red">
                      Male
                    </Radio>
                    <Radio gender="female" colorScheme="pink">
                      female
                    </Radio>
                    <Radio gender="other" colorScheme="yellow">
                      Others
                    </Radio>
                  </HStack>
                </RadioGroup>
                <Button type="submit" colorScheme="whatsapp" mt="2rem">
                  Submit
                </Button>
              </form>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
