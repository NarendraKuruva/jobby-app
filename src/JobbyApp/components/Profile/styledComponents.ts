import styled from 'styled-components'

export const ProfileLoadingContainer = styled.div`
   color: #ffffff;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #000000;
   width: 250px;
   border-radius: 25px;
   padding: 15px;
   @media screen and (max-width: 768px) {
      width: auto;
   }
`
export const ProfileContainer = styled.div`
   background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');
   background-size: cover;
   width: 250px;
   border-radius: 25px;
   padding: 15px;
   @media screen and (max-width: 768px) {
      width: auto;
   }
`
export const ProfileHeading = styled.h2`
   color: #6366f1;
   font-weight: bold;
   font-size: 18px;
`
export const RetryButton = styled.button`
   color: white;
   background-color: #4f46e5;
   padding: 6px;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 8px;
`
export const ProfileImg = styled.img``
export const ShortBio = styled.p``
