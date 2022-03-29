import React, { Component } from 'react'
//eslint-disable-next-line
import { History } from 'history'
import { Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Cookies from 'js-cookie'
import JobbyAppStore from '../../stores/JobbyAppStore'
import {
   ErrMsg,
   LoginPageWebsiteLogo,
   PasswordContainer,
   StyledInputElement,
   StyledLabelEl,
   StyledLoginButton,
   StyledLoginCard,
   StyledLoginPageContainer,
   UsernameContaier
} from './styledComponents'

interface LoginFormProps {
   history: History
}

const usernameText = 'USERNAME'
const passwordText = 'PASSWORD'
const websiteLogoUrl = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'
const websiteLogoImgAltText = 'website-logo'

interface InjectedProps extends LoginFormProps {
   jobbyAppStore: JobbyAppStore
}

@inject('jobbyAppStore')
@observer
class LoginPage extends Component<LoginFormProps> {
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   onSubmitSuccess = (jwtToken: string): void => {
      const { history } = this.props
      Cookies.set('jwt_token', jwtToken, { expires: 30 })
      history.replace('/jobby/')
   }

   onSubmitForm = async (event: React.FormEvent<HTMLInputElement>) => {
      const { jobbyAppStore } = this.getInjectedProps()
      const { username, password } = jobbyAppStore
      const userDetails = { username, password }
      event.preventDefault()
      const url = 'https://apis.ccbp.in/login'
      const options = {
         method: 'POST',
         body: JSON.stringify(userDetails)
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
         this.onSubmitSuccess(data.jwt_token)
      } else {
         jobbyAppStore.onLoginFailure(data.error_msg)
      }
   }
   render(): JSX.Element {
      const { jobbyAppStore } = this.getInjectedProps()
      const { showSubmitError, errorMsg } = jobbyAppStore
      const JwtToken = Cookies.get('jwt_token')
      if (JwtToken !== undefined) {
         return <Redirect to='/jobby/' />
      }
      return (
         <StyledLoginPageContainer>
            <StyledLoginCard>
               <LoginPageWebsiteLogo
                  alt={websiteLogoImgAltText}
                  src={websiteLogoUrl}
               />
               <UsernameContaier>
                  <StyledLabelEl htmlFor='username'>
                     {usernameText}
                  </StyledLabelEl>
                  <StyledInputElement
                     type='text'
                     id='username'
                     placeholder='Username'
                     onChange={jobbyAppStore.onChangeUsername}
                  />
               </UsernameContaier>
               <PasswordContainer>
                  <StyledLabelEl htmlFor='password'>
                     {passwordText}
                  </StyledLabelEl>
                  <StyledInputElement
                     type='password'
                     id='password'
                     placeholder='Password'
                     onChange={jobbyAppStore.onChangePassword}
                  />
               </PasswordContainer>

               <StyledLoginButton type='submit' onClick={this.onSubmitForm}>
                  Login
               </StyledLoginButton>
               {showSubmitError && <ErrMsg>*{errorMsg}</ErrMsg>}
            </StyledLoginCard>
         </StyledLoginPageContainer>
      )
   }
}

export default LoginPage
