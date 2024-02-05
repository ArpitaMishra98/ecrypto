import React from 'react'

import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { fetchallexchanges } from '@/API/Apifunctions/Exchangeapimanage'
import Link from 'next/link'
import Commonbox from '../common/Commonbox'

const index = () => {
    const { data: allexchanges, isLoading: exchangeloading, isError: exchangeerror } = useQuery({
        queryFn: () => fetchallexchanges(),
        queryKey: ["allexchanges"]
    })

    console.log(allexchanges);

    return (
        <>
    <Commonbox />
            <Box className="exchanges-page">
                <center><Typography variant='h4' className='singletext'>All Exchange Details</Typography></center>
                <TableContainer className="custom-table-container">
                    <Table className="custom-table">
                        <TableHead className='tableheader'>
                            <TableRow>
                                <TableCell className="custom-cell header">ExchangeID</TableCell>
                                <TableCell align="center" className="custom-cell header">Rank</TableCell>
                                <TableCell align="center" className="custom-cell header">Name</TableCell>
                                <TableCell align="center" className="custom-cell header">Total Volume</TableCell>
                                <TableCell align="center" className="custom-cell header">Trading Pairs</TableCell>
                                <TableCell align="center" className="custom-cell header">Socket</TableCell>
                                <TableCell align="center" className="custom-cell header">URL</TableCell>
                                <TableCell align="center" className="custom-cell header">Updated</TableCell>
                                <TableCell align="center" className="custom-cell header">
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                allexchanges?.map((exchange, exkey) => {
                                    return (
                                        <>
                                            <TableRow key={exkey} className="custom-row">
                                                <TableCell align="center" className="custom-cell">{exchange.exchangeId}</TableCell>
                                                <TableCell align="center" className="custom-cell">{exchange?.rank}</TableCell>
                                                <TableCell align="center" className="custom-cell">{exchange?.name}</TableCell>
                                                <TableCell align="center" className="custom-cell">{exchange?.percentTotalVolume?.slice(0, 7)}</TableCell>
                                                <TableCell align="center" className="custom-cell">{exchange?.tradingPairs}</TableCell>
                                                <TableCell align="center" className="custom-cell">{exchange?.socket == true ? "True" : "False"}</TableCell>
                                                <TableCell align="center" className="custom-cell"><Link href={exchange?.exchangeUrl} style={{ textDecoration: "none", color: "blue" }}>URL</Link></TableCell>
                                                <TableCell align="center" className="custom-cell">{exchange?.updated}</TableCell>
                                                <TableCell align="center" className="custom-cell">
                                                    <Button href={`/exchanges/${exchange?.exchangeId}`} variant='contained' color='success'  className='btndesign'>View</Button></TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default index