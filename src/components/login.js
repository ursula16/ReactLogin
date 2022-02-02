import React from "react";
import {Avatar, Button, Checkbox, FormControlLabel, Grid,Link,Paper, TextField, Typography} from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



const Login= ()=>{
    const paperStyle={
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    };
    const AvatarStyle={backgroundColor:"blue"}
    const btnStyle={margin:"8px 0"}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                    <Avatar style={AvatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder="Enter username here" fullWidth required/>
                <TextField label='Password' placeholder="Enter password here" type="password" fullWidth required/>
                <FormControlLabel
                control={
                <Checkbox
               
                name="checkedB"
                color="primary"    
                />
            }
            label="Remember me"
            />
          
            <Button type="submit" color="primary" fullWidth variant="contained" style={btnStyle}>Sign in</Button>
            <Typography style={{textAlign: 'end', fontSize: '14px', marginBottom: '4px'}}>
                <Link href="a" >Forgot Password?</Link>
            </Typography>
            <Typography>Do not have an account?
                <Link href="a" >Sign Up</Link>
            </Typography>
            </Paper>
        </Grid>
    )
        
}
export default Login 