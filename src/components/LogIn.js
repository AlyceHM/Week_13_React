import React from "react" 
export default class LogIn extends React.Component {

    render () {

        return(

            <div class = "containter-sm">
<div class = "container-sm">
                <br>
                </br>
                <h3>Log In Here</h3>
</div>

                <br>
                </br>


  

<div class="container-sm">
<div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">

    </input>

</div>



<div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">

    </input>

</div>
</div>

  <button type="button" class="btn btn-light">Submit</button>         

            </div>

           

         
            
        )
    }

}
