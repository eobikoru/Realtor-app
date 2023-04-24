import { Box } from '@chakra-ui/layout';
const date = new Date()
const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © {date.getFullYear()} Obikoru Realtor, Inc.
  </Box>
);

export default Footer;