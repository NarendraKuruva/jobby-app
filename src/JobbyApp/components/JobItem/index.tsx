import { inject, observer } from 'mobx-react'
import { BsBriefcaseFill, BsFillStarFill } from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md'
import React from 'react'
import { Link } from 'react-router-dom'
import JobItemModel from '../../stores/models/JobItemModel'
import {
   DescriptionHeading,
   EmplomentTypeAndLocationContainer,
   EmplomentTypeContainer,
   EmploymentType,
   HorizontalLine,
   JobDescription,
   JobItemCompanyLogo,
   JobItemContainer,
   JobItemRatingContainer,
   JobItemTitle,
   JobItemTitleAndRatingContainer,
   JobLocation,
   JobRating,
   LocationAndCTCContainer,
   LocationContainer,
   LogoAndTitleContainer
} from './styledComponents'

interface InjectedProps {
   jobItemDetails: JobItemModel
}

const descriptionHeadingText = 'Description'

const JobItem = inject('jobbyAppStore')(
   observer(
      (props): JSX.Element => {
         const getInjectedProps = (): InjectedProps => props as InjectedProps
         const { jobItemDetails } = getInjectedProps()
         const {
            companyLogoUrl,
            id,
            employmentType,
            jobDescription,
            location,
            packagePerAnnum,
            rating,
            title
         } = jobItemDetails
         return (
            <Link to={`/jobby/job/${id}`}>
               <JobItemContainer>
                  <LogoAndTitleContainer>
                     <JobItemCompanyLogo src={companyLogoUrl} alt={title} />
                     <JobItemTitleAndRatingContainer>
                        <JobItemTitle>{title}</JobItemTitle>
                        <JobItemRatingContainer>
                           <BsFillStarFill color='yellow' className='mr-1' />
                           <JobRating>{rating}</JobRating>
                        </JobItemRatingContainer>
                     </JobItemTitleAndRatingContainer>
                  </LogoAndTitleContainer>
                  <LocationAndCTCContainer>
                     <EmplomentTypeAndLocationContainer>
                        <LocationContainer>
                           <MdLocationPin size='25px' className='mr-2' />
                           <JobLocation>{location}</JobLocation>
                        </LocationContainer>
                        <EmplomentTypeContainer>
                           <BsBriefcaseFill size='25px' className='mr-2' />
                           <EmploymentType>{employmentType}</EmploymentType>
                        </EmplomentTypeContainer>
                     </EmplomentTypeAndLocationContainer>
                     <JobItemTitle>{packagePerAnnum}</JobItemTitle>
                  </LocationAndCTCContainer>
                  <HorizontalLine />
                  <DescriptionHeading>
                     {descriptionHeadingText}
                  </DescriptionHeading>
                  <JobDescription>{jobDescription}</JobDescription>
               </JobItemContainer>
            </Link>
         )
      }
   )
)
export default JobItem
