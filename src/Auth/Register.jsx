import RegisterForm from "../Components/auth/RegisterForm"

const Register = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>Welcome To Notely</div>
                <p style={{color: '#4A4D55', marginBottom: '1.8rem'}}>Please create an account to continue</p>
                <RegisterForm />
            </div>
        </div>
    )
}


export default Register