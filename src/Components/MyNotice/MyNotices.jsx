import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react"; 
import { useDispatch, useSelector } from "react-redux";
import  { getServices, getPosts, getUsers, deletePosts,updatePost} from "../../Redux/Actions/noticesAction"
import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';

const MyNoticesUser = () => {
    const {user} = useAuth0()
    const email= user.email
   
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getUsers())
    dispatch(getServices())
    dispatch(getPosts());
    }, [dispatch])

// const allServices = useSelector((state) => state.notices.services)

const  allPosts = useSelector((state) => state.notices.adposts)

const allUsers = useSelector((state) => state.notices.users)

const filterUser= allUsers.filter(u => u.email === email)

const filterPosts = allPosts && filterUser[0]
  ? allPosts.filter(p => p.UserId === filterUser[0].id)
  : [];

return (
    <Grid container >
        {filterPosts && filterPosts.map(e =>
     <Grid  item xs={12} sm={6} md={4}>
     <Link href={`/detail/${e.id}`}>
        
          <Card sx={{ padding: 0 }}>
            <CardContent>
              {/* <Typography variant="h5">{cardService}</Typography> */}
              <Typography variant="h6">{e.name}</Typography>
              {/* <Typography variant="h6">{e.image}</Typography> */}
              {/* <Typography variant="h6">{e.description}</Typography> */}
            </CardContent>
            <CardMedia
              component="img"
              image={e.image}
              height={250}
              style={{ padding: 0 }}
            />
          </Card>
          </Link>
    </Grid>
     
    )}

    </Grid>
  );




}

export default MyNoticesUser
