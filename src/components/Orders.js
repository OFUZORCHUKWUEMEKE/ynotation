import { Box } from '@mui/system'
import React from 'react'
import { Grid, Stack } from '@mui/material';

const Orders = () => {
    return (
        <>
            <div className='py-4 bg-gray-100'>
                <div className='w-[90%] mx-auto'>
                    <h3 className='mb-2'>Upcoming Order</h3>
                    <Box p={3} className="bg-white rounded-md shadow-md">
                        <div className='w-[95%] mx-auto'>
                            <Stack  spacing={2}>
                                <div className='space-y-2 border-l-[4px] border-[#804000]'>
                                    <h2 className='ml-2'>Dudu Osun African...</h2>
                                    <p className='ml-2'>Alvan Emmanuel</p>
                                </div>

                            </Stack>
                            <div className='py-4'>
                                <div className='space-y-2 divide-y-2'>
                                    <div className='flex justify-between w-full '>
                                        <p>Quantity</p>
                                        <p>150 Cartons</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Quantity</p>
                                        <p>150 Cartons</p>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-[#804000] w-full rounded-md text-white py-2'>View Order</button>

                        </div>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Orders