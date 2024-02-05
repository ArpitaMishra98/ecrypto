import { Box, Container } from '@mui/material';
import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



interface wrapperProps {
    children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
    const { children } = props;
    return (
        <>
            <Box maxWidth="xl">
                <Header />
                <Box className="bodycontent">
                    {children}
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default Wrapper