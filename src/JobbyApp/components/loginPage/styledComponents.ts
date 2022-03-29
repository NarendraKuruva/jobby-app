import styled from 'styled-components'
export const UsernameContaier = styled.div`
   display: flex;
   flex-direction: column;
`
export const PasswordContainer = styled(UsernameContaier)``
export const StyledLoginButton = styled.button`
   background-color: #6366f1;
   width: 100%;
   padding-top: 8px;
   padding-bottom: 8px;
   border-radius: 4px;
`
export const StyledInputElement = styled.input`
   border: 1px solid #7e858e;
   border-radius: 4px;
   background-color: transparent;
   padding: 8px;
`
export const StyledLoginCard = styled.form`
   background-color: #272727;
   height: 40vh;
   //    width: 50vw;
   padding: 30px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   color: #ffffff;
   border-radius: 5px;
`
export const StyledLoginPageContainer = styled.div`
   background-color: #000000;
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const StyledLabelEl = styled.label`
   margin: 0px;
   font-size: 15px;
   font-weight: bold;
`
export const ErrMsg = styled.p`
   color: #ff0b37;
   align-self: flex-start;
`
export const LoginPageWebsiteLogo = styled.img``
