import { Box, ChakraProvider, Flex, FormLabel } from "@chakra-ui/react";
import { DatePicker } from "@orange_digital/chakra-datepicker";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <ChakraProvider>
            <Flex justifyContent="center" mt={8}>
                <Box
                    w={{ base: "full", md: "250px" }}
                    h="200"
                    mx={4}
                    justifySelf="center"
                >
                    <FormLabel>Date Picker</FormLabel>
                    <DatePicker />
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
