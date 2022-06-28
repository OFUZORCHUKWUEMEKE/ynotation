import React from 'react'
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Sales = () => {
    return (
        <>
            <div className='bg-orange-100 h-[30vh]'>
                <div className='w-4/5 mx-auto'>
                    <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                        <Grid item xs={6}>
                            <Box p={2} className="border-[2px] bg-white border-orange-400 h-20">
                                <div className='flex flex-col w-[95%] mx-auto justify-between'>
                                    <div className='justify-between flex items-center'>
                                        <p className='text-[11px] text-gray-500 font-bold'>Total sales</p>
                                        <p>-</p>
                                    </div>
                                    <div className='space-x-3 flex items-center justify-between'>
                                        <p className='text-[11px] font-bold'>20</p>
                                        <p>-</p>
                                    </div>
                                </div>

                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                           <Box p={2} className="border-[2px] bg-white border-orange-400 h-20">
                                <div className='flex flex-col w-[95%] mx-auto justify-between'>
                                    <div className='justify-between flex items-center'>
                                        <p className='text-[11px] text-gray-500 font-bold'>Total sales</p>
                                        <p>-</p>
                                    </div>
                                    <div className='space-x-3 flex items-center justify-between'>
                                        <p className='text-[11px] font-bold'>20</p>
                                        <p>-</p>
                                    </div>
                                </div>

                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box p={2} className="border-[2px] bg-white border-orange-400 h-20">
                                <div className='flex flex-col w-[95%] mx-auto justify-between'>
                                    <div className='justify-between flex items-center'>
                                        <p className='text-[11px] text-gray-500 font-bold'>Total sales</p>
                                        <p>-</p>
                                    </div>
                                    <div className='space-x-3 flex items-center justify-between'>
                                        <p className='text-[11px] font-bold'>20</p>
                                        <p>-</p>
                                    </div>
                                </div>

                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box p={2} className="border-[2px] bg-white border-orange-400 h-20">
                                <div className='flex flex-col w-[95%] mx-auto justify-between'>
                                    <div className='justify-between flex items-center'>
                                        <p className='text-[11px] text-gray-500 font-bold'>Total sales</p>
                                        <p>-</p>
                                    </div>
                                    <div className='space-x-3 flex items-center justify-between'>
                                        <p className='text-[11px] font-bold'>20</p>
                                        <p>-</p>
                                    </div>
                                </div>

                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Sales