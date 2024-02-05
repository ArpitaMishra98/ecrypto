import React from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import StarsIcon from '@mui/icons-material/Stars';
import SoapIcon from '@mui/icons-material/Soap';
import { Box } from '@mui/material'
const Commonbox = () => {
  return (
    <>
      <Box className="bannnercard">
        <Box className="card">
          <CurrencyExchangeIcon className='bannericons' />
          <Box className="cardtitle">
            Hot Coins
          </Box>
          <Box className="cardamt">
            $302.00
          </Box>
        </Box>
        <Box className="card">
          <SoapIcon className='bannericons' />
          <Box className="cardtitle">
            New Listing
          </Box>
          <Box className="cardamt">
            $0.5008
          </Box>
        </Box>
        <Box className="card">
          <StarsIcon className='bannericons' />
          <Box className="cardtitle">
         Top Gainer Coin
          </Box>
          <Box className="cardamt">
          $0.5008
          </Box>
        </Box>
        <Box className="card">
          <LocalConvenienceStoreIcon className='bannericons' />
          <Box className="cardtitle">
          Top Volumn Coin
          </Box>
          <Box className="cardamt">
          $0.5008
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Commonbox
