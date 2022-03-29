import React from 'react'
import Cookies from 'js-cookie'
import { BsBriefcaseFill } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
//eslint-disable-next-line
import { History } from 'history'
import { Link, withRouter } from 'react-router-dom'
import {
   HeaderMobileContainer,
   StyledHeader,
   StyledList,
   StyledListItem,
   StyledLogo,
   StyledLogoutButton
} from './styledComponents'

interface Props {
   history: History
}

const homeListItemTextContent = 'Home'
const jobsListItemTextContent = 'Jobs'
const logoutBtnTextContent = 'Logout'

const Header = (props: Props) => {
   const { history } = props
   const onLogout = (): void => {
      Cookies.remove('jwt_token')
      history.replace('/jobby/login')
   }
   return (
      <StyledHeader>
         <Link to='/jobby/'>
            <StyledLogo
               src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
               alt='website-logo'
            />
         </Link>
         <StyledList>
            <Link to='/jobby/'>
               <StyledListItem>{homeListItemTextContent}</StyledListItem>
            </Link>
            <Link to='/jobby/jobs'>
               <StyledListItem>{jobsListItemTextContent}</StyledListItem>
            </Link>
         </StyledList>
         <StyledLogoutButton onClick={onLogout}>
            {logoutBtnTextContent}
         </StyledLogoutButton>
         <HeaderMobileContainer>
            <Link to='/jobby/'>
               <AiFillHome size='22px' className='mr-3' />
            </Link>
            <Link to='/jobby/jobs'>
               <BsBriefcaseFill size='22px' className='mr-3' />
            </Link>
            <MdLogout onClick={onLogout} size='22px' />
         </HeaderMobileContainer>
      </StyledHeader>
   )
}
export default withRouter(Header)
