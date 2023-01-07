import React, { useState } from 'react'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const activityData = [
    {
        id: 1,
        primary: 'Leslie Alexander updated her',
        link: 'Account Type',
        secondary: '3 October 11:46 AM',
    },
    {
        id: 2,
        primary: 'John Smith removed Mark Fleix from',
        link: 'Family member',
        secondary: '5 October 11:46 AM',
    },
    {
        id: 3,
        primary: 'Leslie Alexander updated her',
        link: 'Account Type',
        secondary: '6 October 11:46 AM',
    },
    {
        id: 4,
        primary: 'John Smith removed Mark Fleix from',
        link: 'Family member',
        secondary: '8 October 11:46 AM',
    },
    {
        id: 5,
        primary: 'Leslie Alexander updated her',
        link: 'Account Type',
        secondary: '6 October 11:46 AM',
    },
]
export const ActivityItems = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <List sx={{ width: '100%', mt: 2, bgcolor: 'transparent', '& li': { paddingLeft: 0, paddingRight: 0, '& .MuiSvgIcon-root': { color: '#000' } } }}>
            {activityData.map((item) =>
                <ListItem 
                    key={item.id} 
                    alignItems="flex-start"
                >
                    <ListItemAvatar>
                        <Avatar>
                            <PeopleAltIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <>
                                <Typography variant="body2" sx={{fontSize: 14}}>{item.primary} 
                                    <Box component="span" sx={{color: '#F8991F'}}> {item.link}</Box>
                                </Typography>
                                {/* <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >{item.link}</ListItemButton> */}
                            </>
                        }
                        secondary={
                            <Typography sx={{fontSize: 13, color: '#C7C7C7'}}>{item.secondary}</Typography>
                        }
                        
                    />
                </ListItem>
            )

            }
        </List>
    )
}
