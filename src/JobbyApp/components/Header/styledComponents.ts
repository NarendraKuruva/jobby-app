import styled from 'styled-components'
export const StyledLogoutButton = styled.button`
   background-color: #6366f1;
   padding: 5px;
   padding-left: 30px;
   padding-right: 30px;
   border-radius: 6px;
   @media screen and (max-width: 768px) {
      display: none;
   }
`
export const StyledHeader = styled.div`
   background-color: #272727;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   color: #ffffff;
   padding-left: 70px;
   padding-right: 70px;
   @media screen and (max-width: 768px) {
      padding: 20px;
   }
`
export const StyledList = styled.ul`
   display: flex;
   @media screen and (max-width: 768px) {
      display: none;
   }
`
export const StyledListItem = styled.li`
   margin-right: 8px;
   font-weight: bold;
`
export const HeaderMobileContainer = styled.div`
   display: flex;
   @media screen and (min-width: 768px) {
      display: none;
   }
`
export const StyledLogo = styled.img`
   @media screen and (max-width: 768px) {
      width: 80px;
   }
`
