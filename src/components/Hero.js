import React from 'react'
import Avatar from '@mui/material/Avatar';
const Hero = () => {
    return (
        <>
            <div className='bg-white h-[25vh] mt-2'>
                <div className='flex justify-between w-4/5 mx-auto py-8'>
                    <div className='space-y-4'>
                        <div className=''>
                            <h3>Good Morning,</h3>
                            <h3 className='text-left mr-3'>Olamide</h3>
                        </div>
                        <h3>Analytics</h3>
                    </div>
                    <Avatar
                        alt="Remy Sharp"
                        src="/image/man.webp"
                        sx={{ width: 46, height: 46 }}
                    />
                </div>
            </div>
        </>
    )
}

export default Hero