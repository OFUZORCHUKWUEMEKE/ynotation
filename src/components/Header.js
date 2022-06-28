import React from 'react'
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    return (
        <div className='h-[10vh] bg-white shadow-lg'>
            <div className='w-4/5 mx-auto flex justify-between items-center pt-2'>
                <Avatar
                    alt="Remy Sharp"
                    src="/image/logo.png"
                    sx={{ width: 56, height: 56 }}
                />
               <MenuIcon className='cursor-pointer'/>
            </div>

        </div>
    )  
}

export default Header