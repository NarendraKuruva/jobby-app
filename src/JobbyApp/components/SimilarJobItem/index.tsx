import React from 'react'
import { BsBriefcaseFill, BsFillStarFill } from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SimilarJobModel from '../../stores/models/JobItemDetailsModel/SimilarJobsModel'
import {
   DescriptionHeading,
   EmplomentTypeAndLocationContainer,
   EmplomentTypeContainer,
   JobItemCompanyLogo,
   JobItemRatingContainer,
   JobItemTitle,
   JobItemTitleAndRatingContainer,
   LocationAndCTCContainer,
   LocationContainer,
   SimilarJobItemContainer,
   SimilarJobTitleAndLogoContainer
} from './styledComponents'
interface SimilarJobItemTypes {
   similarJobItemDetails: SimilarJobModel
}
const SimilarJobItem = (props: SimilarJobItemTypes): JSX.Element => {
   const {
      companyLogoUrl,
      employmentType,
      id,
      jobDescription,
      location,
      rating,
      title
   } = props.similarJobItemDetails
   return (
      <Link to={`/jobby/job/${id}`}>
         <SimilarJobItemContainer>
            <SimilarJobTitleAndLogoContainer>
               <JobItemCompanyLogo src={companyLogoUrl} alt={title} />
               <JobItemTitleAndRatingContainer>
                  <JobItemTitle>{title}</JobItemTitle>
                  <JobItemRatingContainer>
                     <BsFillStarFill color='yellow' className='mr-1' />
                     <p>{rating}</p>
                  </JobItemRatingContainer>
               </JobItemTitleAndRatingContainer>
            </SimilarJobTitleAndLogoContainer>

            <DescriptionHeading>Description</DescriptionHeading>
            <p>{jobDescription}</p>
            <LocationAndCTCContainer>
               <EmplomentTypeAndLocationContainer>
                  <LocationContainer>
                     <MdLocationPin size='25px' className='mr-2' />
                     <p>{location}</p>
                  </LocationContainer>
                  <EmplomentTypeContainer>
                     <BsBriefcaseFill size='25px' className='mr-2' />
                     <p>{employmentType}</p>
                  </EmplomentTypeContainer>
               </EmplomentTypeAndLocationContainer>
            </LocationAndCTCContainer>
         </SimilarJobItemContainer>
      </Link>
   )
}
export default SimilarJobItem
