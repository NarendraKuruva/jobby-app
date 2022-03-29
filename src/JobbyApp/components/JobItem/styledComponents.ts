import styled from 'styled-components'
export const JobItemContainer = styled.div`
   background-color: #272727;
   color: #ffffff;
   border-radius: 18px;
   padding: 18px;
   margin-bottom: 15px;
   width: auto;
`
export const DescriptionHeading = styled.h3`
   font-weight: bold;
   font-size: 20px;
   margin-bottom: 15px;
   @media screen and (max-width: 768px) {
      font-size: 20px;
   }
`
export const EmplomentTypeAndLocationContainer = styled.div`
   display: flex;
`
export const EmplomentTypeContainer = styled.div`
   align-items: center;
   margin-left: 8px;
   display: flex;
`
export const HorizontalLine = styled.hr`
   height: 2px;
   background-color: #cbd5e1;
   margin-top: 20px;
   margin-bottom: 20px;
`
export const JobItemCompanyLogo = styled.img`
   width: 70px;
`
export const JobItemRatingContainer = styled.div`
   display: flex;
   align-items: center;
`
export const JobItemTitle = styled.h2`
   font-weight: bolder;
   font-size: 20px;
   margin: 0px;
`
export const JobItemTitleAndRatingContainer = styled.div`
   margin-left: 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const LocationAndCTCContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
   align-items: center;
`
export const LocationContainer = styled.div`
   display: flex;
   align-items: center;
   margin-right: 10px;
`
export const LogoAndTitleContainer = styled.div`
   display: flex;
`

export const JobRating = styled.p``
export const JobLocation = styled.p``
export const EmploymentType = styled.p``
export const JobDescription = styled.p``
