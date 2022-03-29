import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { BsBriefcaseFill, BsFillStarFill } from 'react-icons/bs'
import { MdLocationPin, MdOpenInNew } from 'react-icons/md'
//eslint-disable-next-line
import { match } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import stores from '../../../Common/stores'
import Header from '../Header'
import SimilarJobItem from '../SimilarJobItem'

import JobbyAppStore from '../../stores/JobbyAppStore'
import {
   DescriptionAndWebsiteUrlContainer,
   DescriptionHeading,
   EmplomentTypeAndLocationContainer,
   EmplomentTypeContainer,
   EmploymentType,
   HorizontalLine,
   JobDescription,
   JobItemCompanyLogo,
   JobItemDetailedContainer,
   JobItemDetailsContentContainer,
   JobItemDetailsFailureContainer,
   JobItemDetailsLoadingContainer,
   JobItemDetailsMainContainer,
   JobItemRatingContainer,
   JobItemTitle,
   JobItemTitleAndRatingContainer,
   JobLocation,
   JobRating,
   LifeAtCompanyContainer,
   LifeAtCompanyDescription,
   LifeAtCompanyImg,
   LifeAtWorkMainContainer,
   LocationAndCTCContainer,
   LocationContainer,
   LogoAndTitleContainer,
   PackagePerAnum,
   RetryButton,
   SimilarJobsContainer,
   SimilarJobsHeading,
   SimilarJobsMainContainer,
   SkillHeading,
   SkillImg,
   SkillItemContainer,
   SkillsContainer,
   SkillsMainContainer,
   WebsiteLink
} from './styledComponents'

interface JobItemDetailsProps {
   match: match<Params>
}

interface Params {
   id: string
}

interface InjectedProps {
   jobbyAppStore: JobbyAppStore
}

const lifeAtCompanyHeadingText = 'Life at Company'
const jobDescriptionHeadingText = 'Description'
const skillsHeadingText = 'Skills'
const similarJobsHeadingText = 'Similar Jobs'
const jobItemNotFoundImgUrl =
   'https://assets.ccbp.in/frontend/react-js/failure-img.png'
const jobItemNotFoundImgAltText = 'failure-view'
const jobItemNotFoundImgErrHeading = 'Oops! Something Went Wrong'
const jobItemNotFoundImgErrMsg =
   'We cannot seem to find the page you are looking for.'
const retyrBtnText = 'Retry'

@inject('jobbyAppStore')
@observer
class JobItemDetails extends Component<JobItemDetailsProps> {
   // getInjectedProps = (): InjectedProps => this.props as InjectedProps

   componentDidMount() {
      const { jobbyAppStore } = stores
      const id = this.getId()
      jobbyAppStore.getJobItemDetails(id)
   }
   renderSkillItem = (props: {
      imageUrl: string
      name: string
   }): JSX.Element => {
      const { imageUrl, name } = props
      return (
         <SkillItemContainer>
            <SkillImg src={imageUrl} alt={name} />
            <SkillHeading>{name}</SkillHeading>
         </SkillItemContainer>
      )
   }
   getId = () => {
      const { match } = this.props
      const { params } = match
      const { id } = params
      return id
   }

   renderJobItemDetailsSuccessView = (): JSX.Element => {
      const { jobbyAppStore } = stores
      const { jobItemDetails } = jobbyAppStore
      const {
         title,
         companyLogoUrl,
         rating,
         employmentType,
         packagePerAnnum,
         jobDescription,
         location,
         companyWebsiteUrl,
         skills,
         lifeAtCompany
      } = jobItemDetails.jobDetails
      const { similarJobs } = jobItemDetails
      return (
         <JobItemDetailsContentContainer>
            <JobItemDetailedContainer>
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
                  <PackagePerAnum>{packagePerAnnum}</PackagePerAnum>
               </LocationAndCTCContainer>
               <HorizontalLine />
               <DescriptionAndWebsiteUrlContainer>
                  <DescriptionHeading>
                     {jobDescriptionHeadingText}
                  </DescriptionHeading>
                  <WebsiteLink href={companyWebsiteUrl} target='_blank'>
                     Visit <MdOpenInNew />
                  </WebsiteLink>
               </DescriptionAndWebsiteUrlContainer>
               <JobDescription>{jobDescription}</JobDescription>
               <SkillsMainContainer>
                  <DescriptionHeading>{skillsHeadingText}</DescriptionHeading>
                  <SkillsContainer>
                     {skills.map(eachSkill => this.renderSkillItem(eachSkill))}
                  </SkillsContainer>
               </SkillsMainContainer>
               <LifeAtWorkMainContainer>
                  <DescriptionHeading>
                     {lifeAtCompanyHeadingText}
                  </DescriptionHeading>
                  <LifeAtCompanyContainer>
                     <LifeAtCompanyDescription>
                        {lifeAtCompany.description}
                     </LifeAtCompanyDescription>
                     <LifeAtCompanyImg src={lifeAtCompany.imageUrl} />
                  </LifeAtCompanyContainer>
               </LifeAtWorkMainContainer>
            </JobItemDetailedContainer>
            <SimilarJobsMainContainer>
               <SimilarJobsHeading>{similarJobsHeadingText}</SimilarJobsHeading>
               <SimilarJobsContainer>
                  {similarJobs.map(eachJob => (
                     <SimilarJobItem
                        similarJobItemDetails={eachJob}
                        key={eachJob.id}
                     />
                  ))}
               </SimilarJobsContainer>
            </SimilarJobsMainContainer>
         </JobItemDetailsContentContainer>
      )
   }

   renderJobItemDetailsLoadingView = (): JSX.Element => (
      <JobItemDetailsLoadingContainer>
         <Loader type='ThreeDots' color='#ffffff' height='50' width='50' />
      </JobItemDetailsLoadingContainer>
   )

   renderJobItemDetailsFailureView = (): JSX.Element => (
      <JobItemDetailsFailureContainer>
         <img src={jobItemNotFoundImgUrl} alt={jobItemNotFoundImgAltText} />
         <h1>{jobItemNotFoundImgErrHeading}</h1>
         <p>{jobItemNotFoundImgErrMsg}</p>
         <RetryButton onClick={() => window.location.reload()}>
            {retyrBtnText}
         </RetryButton>
      </JobItemDetailsFailureContainer>
   )

   renderJobItemDetails = () => {
      const { jobbyAppStore } = stores
      const { jobDetailsApiStatus } = jobbyAppStore
      switch (jobDetailsApiStatus) {
         case 200:
            return this.renderJobItemDetailsSuccessView()
         case 400:
            return this.renderJobItemDetailsSuccessView()
         default:
            return this.renderJobItemDetailsLoadingView()
      }
   }

   render(): JSX.Element {
      return (
         <JobItemDetailsMainContainer>
            <Header />
            {this.renderJobItemDetails()}
         </JobItemDetailsMainContainer>
      )
   }
}

export default JobItemDetails
