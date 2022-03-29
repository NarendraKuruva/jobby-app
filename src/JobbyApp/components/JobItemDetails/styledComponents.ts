import styled from 'styled-components'
export const JobItemDetailsContentContainer = styled.div`
   padding-left: 70px;
   padding-right: 70px;
   padding-top: 35px;
   color: #ffffff;
   @media screen and (max-width: 768px) {
      width: auto;
      padding: 20px;
   }
`
export const JobItemDetailedContainer = styled.div`
   background-color: #272727;
   padding: 20px;
   border-radius: 20px;
`
export const LogoAndTitleContainer = styled.div`
   display: flex;
`
export const JobItemCompanyLogo = styled.img`
   width: 70px;
`
export const JobItemTitleAndRatingContainer = styled.div`
   margin-left: 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const JobItemTitle = styled.h2`
   font-weight: bolder;
   font-size: 20px;
   margin: 0px;
`
export const JobItemRatingContainer = styled.div`
   display: flex;
   align-items: center;
`
export const LocationAndCTCContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
   align-items: center;
`
export const EmplomentTypeAndLocationContainer = styled.div`
   display: flex;
`
export const LocationContainer = styled.div`
   display: flex;
   align-items: center;
   margin-right: 10px;
`
export const EmplomentTypeContainer = styled.div`
   display: flex;
   align-items: center;
   margin-left: 8px;
`
export const PackagePerAnum = styled(JobItemTitle)`
   margin: 0px;
`
export const HorizontalLine = styled.hr`
   height: 2px;
   background-color: #cbd5e1;
   margin-top: 20px;
   margin-bottom: 20px;
`
export const DescriptionAndWebsiteUrlContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const DescriptionHeading = styled.h3`
   font-weight: bold;
   font-size: 20px;
   margin-bottom: 15px;
   @media screen and (max-width: 768px) {
      font-size: 20px;
   }
`
export const WebsiteLink = styled.a`
   display: flex;
   align-items: center;
   color: #b6c5ff;
`
export const SkillsMainContainer = styled.div`
   padding-top: 50px;
`
export const SkillsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
`
export const LifeAtWorkMainContainer = styled.div`
   margin-top: 50px;
`
export const LifeAtCompanyContainer = styled.div`
   display: flex;
   @media screen and (max-width: 768px) {
      flex-direction: column;
   }
`
export const SimilarJobsMainContainer = styled.div`
   margin-top: 50px;
`
export const SimilarJobsHeading = styled.h1`
   font-size: 30px;
   font-weight: bolder;
   margin-bottom: 30px;
`
export const SimilarJobsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
`
export const JobItemDetailsLoadingContainer = styled.div`
   width: 100vw;
   height: 90vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #ffffff;
`
export const RetryButton = styled.button`
   color: white;
   background-color: #4f46e5;
   padding: 6px;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 8px;
`
export const JobItemDetailsMainContainer = styled.div`
   background-color: #000000;
   min-width: 100vw;
   min-height: 100vh;
   // font-family: 'Roboto';
   @media screen and (max-width: 768px) {
   }
`
export const SkillItemContainer = styled.div`
   display: flex;
   align-items: center;
   width: 250px;
   margin-right: 30px;
   margin-bottom: 10px;
   @media screen and (max-width: 768px) {
      width: 130px;
   }
`
export const SkillImg = styled.img`
   width: 50px;
   @media screen and (max-width: 768px) {
      width: 30px;
   }
`
export const SkillHeading = styled.h2`
   font-weight: bold;
   margin-left: 30px;
   font-size: 20px;
   @media screen and (max-width: 768px) {
      font-size: 17px;
      font-weight: bold;
      margin-left: 10px;
   }
`

export const JobRating = styled.p``
export const JobLocation = styled.p``
export const EmploymentType = styled.p``
export const JobDescription = styled.p``

export const LifeAtCompanyDescription = styled.p``

export const LifeAtCompanyImg = styled.img``

export const JobItemDetailsFailureContainer = styled.div`
   width: 100vw;
   height: 90vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #ffffff;
`
