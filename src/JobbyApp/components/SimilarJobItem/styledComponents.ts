import styled from 'styled-components'

export const JobItemCompanyLogo = styled.img`
   width: 70px;
`
export const SimilarJobItemContainer = styled.div`
   background-color: #272727;
   padding: 15px;
   border-radius: 15px;
   width: 350px;
   margin-right: 15px;
   margin-bottom: 20px;
   @media screen and (max-width: 768px) {
      width: auto;
   }
`
export const SimilarJobTitleAndLogoContainer = styled.div`
   display: flex;
   margin-bottom: 25px;
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
   display: flex;
   align-items: center;
   margin-left: 8px;
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
