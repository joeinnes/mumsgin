import { useEffect, useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import {
  Box,
  Grid,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/GinPanel.module.css";

export default function GinPanel({ gin, index, preview = false }) {
  const threshold = useBreakpointValue({ base: 0.2, lg: 0.5 });
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });
  const getTimeDifference = (d1, d2) => {
    const preciseInterval = d1.getTime() - d2.getTime();
    const days = Math.floor(preciseInterval / (24 * 60 * 60 * 1000));
    const hours =
      d1.getHours() - d2.getHours() > -1
        ? d1.getHours() - d2.getHours()
        : 24 + d1.getHours() - d2.getHours();
    const minutes =
      d1.getMinutes() - d2.getMinutes() > -1
        ? d1.getMinutes() - d2.getMinutes()
        : 60 - d1.getMinutes() - d2.getMinutes();
    const seconds = 60 - d2.getSeconds(); // HUH? Y U NO USE D1?
    // Well, turns out Directus doesn't zero out times, it uses the current time's 'seconds' value

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  const d1 = new Date(gin.display_after);
  const d2 = new Date();

  const [timeRemaining, setTimeRemaining] = useState(getTimeDifference(d1, d2));

  useEffect(() => {
    const interval = setInterval(() => {
      const d1 = new Date(gin.display_after);
      const d2 = new Date();
      setTimeRemaining(getTimeDifference(d1, d2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      minH="100vh"
      bg={gin.bg_colour}
      textColor={gin.text_colour}
      placeItems="center"
      p={12}
      id={gin.id}
      ref={ref}
    >
      {new Date(gin.display_after) < new Date() || preview ? (
        <>
          <Heading
            fontSize={["4xl", "4xl", "5xl"]}
            textAlign="center"
            mb={6}
            textDecoration="underline"
          >
            {gin.name}
          </Heading>
          <Stack
            direction={[
              "column",
              "column",
              index % 2 === 0 ? "row" : "row-reverse",
            ]}
            h="100%"
            placeItems="center"
            alignItems="center"
            justifyContent="center"
            maxW="container.xl"
          >
            <Box
              maxW={["100%", "100%", "50%"]}
              w={["100%", "100%", "50%"]}
              pos="relative"
              h="100%"
              minH="60vh"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${gin.image}`}
                layout="fill"
                objectFit="contain"
                priority={true}
                className={`${styles.animate} ${
                  inView
                    ? styles.visible
                    : index % 2 === 0
                    ? styles.hiddenToLeft
                    : styles.hiddenToRight
                }`}
              />
            </Box>

            <Box
              maxW={["100%", "100%", "50%"]}
              w={["100%", "100%", "50%"]}
              borderWidth={0}
              borderColor={gin.text_colour}
              borderRightWidth={[0, 0, index % 2 === 0 ? 0 : 2]}
              borderLeftWidth={[0, 0, index % 2 === 0 ? 2 : 0]}
              p={4}
            >
              <Heading mb={4}>About this gin</Heading>
              <ReactMarkdown renderers={ChakraUIRenderer()}>
                {gin.description}
              </ReactMarkdown>
            </Box>
          </Stack>
        </>
      ) : (
        <Box textAlign="center">
          <Heading mb={4} fontSize="5xl">
            Next gin in...
          </Heading>
          <Text fontSize="3xl">
            {timeRemaining.days} {timeRemaining.days === 1 ? "day" : "days"},{" "}
            {timeRemaining.hours} {timeRemaining.hours === 1 ? "hour" : "hours"}
            , {timeRemaining.minutes}{" "}
            {timeRemaining.minutes === 1 ? "minute" : "minutes"}, and{" "}
            {timeRemaining.seconds}{" "}
            {timeRemaining.seconds === 1 ? "second" : "seconds"}
          </Text>
        </Box>
      )}
    </Grid>
  );
}
