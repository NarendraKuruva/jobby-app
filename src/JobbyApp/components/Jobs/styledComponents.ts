import styled from 'styled-components'
export const AllJobsContainer = styled.div`
   margin-left: 20px;
   @media screen and (max-width: 768px) {
      margin: auto;
      margin-top: 10px;
   }
`
export const AllJobsLoadingContainer = styled.div`
   width: 75vw;
   height: 90vh;
   display: flex;
   flex-direction: column;
   color: #ffffff;
   justify-content: center;
   align-items: center;
`
export const NoJobsWithFiltersContainer = styled(AllJobsLoadingContainer)``
export const HorizontalLine = styled.hr`
   height: 2px;
   background-color: #cbd5e1;
   margin-top: 20px;
   margin-bottom: 20px;
`
export const NoJobsWithFiltersErrImg = styled.img``
export const JobItemTitle = styled.h2`
   font-weight: bolder;
   font-size: 20px;
   margin: 0px;
`
export const JobsPageContentContainer = styled.div`
   display: flex;
   padding-left: 70px;
   padding-right: 70px;
   padding-top: 35px;

   @media screen and (max-width: 768px) {
      width: auto;
      padding: 20px;
      flex-direction: column;
   }
`
export const JobsPageMainContainer = styled.div`
   background-color: #000000;
   min-height: 100vh;
   width: 100vw;
`
export const NoJobsFoundContainer = styled.div`
   padding-left: 30px;
`
export const RetryButton = styled.button`
   color: white;
   background-color: #4f46e5;
   padding: 6px;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 8px;
`
export const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   border: 1px solid #ffffff;
   color: white;
   width: 50%;
   border-radius: 5px;
   margin-bottom: 15px;
   flex-wrap: wrap;
   @media screen and (max-width: 768px) {
      width: auto;
   }
`
export const SearchIconContainer = styled.div`
   background-color: #272727;
   width: 5%;
   display: flex;
   justify-content: center;
   height: 40px;
   margin-right: 2px;
   display: flex;
   flex-direction: color;
   justify-content: center;
   align-items: center;
   @media screen and (max-width: 768px) {
      width: 10%;
   }
`
export const StyledSearchEl = styled.input`
   background-color: #000000;
   width: 90%;
   margin-left: 15px;
   @media screen and (max-width: 768px) {
      width: 80%;
   }
`
export const NoJobsFoundHeading = styled.h1`
   font-weight: bolder;
   font-size: 20px;
   margin: 0px;
`
export const NoJobsErrImg = styled.img``
export const NoJobsFoundWithFiltersErrText = styled.p``
export const NoJobsFoundErrText = styled.p``
