import styled from 'styled-components'
export const StyledHomeContainer = styled.div`
   background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
   background-size: cover;
   width: 100vw;
   height: 100vh;
   @media screen and (max-width: 768px) {
      background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
   }
`
export const StyledFindJobsButton = styled.button`
   background-color: #6366f1;
   padding-left: 40px;
   padding-right: 40px;
   padding-top: 15px;
   padding-bottom: 15px;
   font-size: 20px;
   border-radius: 10px;
   font-weight: bold;
   margin-top: 40px;
   @media screen and (max-width: 768px) {
      background-color: #6366f1;
      padding: 5px;
      padding-left: 30px;
      padding-right: 30px;
      border-radius: 6px;
      font-size: 15px;
      margin-top: 30px;
   }
`
export const HomeContentContainer = styled.div`
   padding: 20px;
   padding-top: 70px;
   padding-left: 70px;
   padding-right: 70px;
   color: #ffffff;
   width: 50vw;
   @media screen and (max-width: 768px) {
      width: auto;
      padding: 20px;
   }
`
export const StyledHomeHeading = styled.h1`
   font-weight: bolder;
   font-size: 80px;
   @media screen and (max-width: 768px) {
      font-size: 45px;
   }
`
export const StyledHomeDescription = styled.p`
   font-size: 20px;
`
