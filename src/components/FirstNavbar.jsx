import React from 'react';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';

const FirstNavbar = () => {
  return (
    <>
    <Flex background="white" px={4} py={2} boxShadow="md" gap="10px" fontSize="12px" textAlign="center" alignItems="center">
    <Box fontSize="20px" fontWeight="bold">Intuit</Box>
    <Box >Quickbooks</Box>
    <Box>Mailchimp</Box>
</Flex>

    <Flex
      className="freeTrial--banner discount__banner--global"
      justify="center"
      align="center"
      bg="#241C15"
      color="white"
      py={4}
      px={6}
      data-behavior="freeTrialBanner"
      data-dollar-promo-node=""
    >
      <Box textAlign="center">
        {/* <Text as="span" display={{ base: "block", md: "none" }}>
          <Text as="p">Save 50% for 12 months</Text> <br />
          - limited time offer.{' '}
          <Text href="/pricing/marketing/" textDecoration="underline" color="white">
            Get started today
          </Text>
        </Text> */}
        <Text as="span" display={{ base: "none", md: "block" }}>
          <Text as="p" fontSize="15px">
          Save 50% for 12 months <br /> - limited time offer. 
            <Link href="/pricing/marketing/" textDecoration="underline" color="white">
            Get started today
            </Link>.
          </Text>
        </Text>
      </Box>
    </Flex>
    </>
  );
};

export default FirstNavbar;
