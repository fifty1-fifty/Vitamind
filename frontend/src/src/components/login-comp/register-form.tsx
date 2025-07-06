import "./form.css"

function Register()
{

/*function doLogin(event:any) : void
{
    event.preventDefault();
    alert('doIt()');
}*/
    return (
        <form className="form-container">

            <div className="form-group">
                <input type="text" id="input" placeholder="Email"/>
            </div>

            <div className="form-group">
                <input type="text" id="input" placeholder="Username"/>
            </div>


            <div className="form-group">
                <input type="password" id="input" placeholder="Password"/>
            </div>
        

            <button type="button" id="loginButton" >Back to Login</button>




        </form>
    );
};
export default Register;