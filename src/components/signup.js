import React from "react";
import { Button, Checkbox, FormControlLabel, Grid,Link,Paper, TextField, Typography} from "@material-ui/core";


const SignUp= ()=>{
    const paperStyle={
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    };
    
    const btnStyle={margin:"8px 0"}
    

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                    
                    <h2>Create Here</h2>
                </Grid>
                <Grid>
                    <h6>Please fill this form to create an account</h6>
                </Grid>
                <TextField label='First Name' placeholder="Enter first name here" fullWidth required/>
                <TextField label='Last Name' placeholder="Enter last name here" fullWidth  required/>
                <TextField label='Email' placeholder="Enter email here" type="email" fullWidth required/>
                <TextField label='Password' placeholder="Enter password here" type="password" fullWidth required/>
                <FormControlLabel
                control={
                <Checkbox
               
                name="checkedB"
                color="primary"    
                />
            }
            label="I accept the Terms of use and Privacy policy"
            />
         
          
            
            <Button type="submit" color="primary" variant="contained" style={btnStyle}>Sign up</Button>
           
            <Typography>Already have an account?
                <Link href="a" >Sign In</Link>
            </Typography>
            </Paper>
        </Grid>
    )
        
}
export default SignUp