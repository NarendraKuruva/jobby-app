import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { BsSearch } from 'react-icons/bs'
import Header from '../Header'
import Profile from '../Profile'
import JobItem from '../JobItem'
import Filters from '../Filters'
import JobbyAppStore from '../../stores/JobbyAppStore'
import {
   AllJobsContainer,
   AllJobsLoadingContainer,
   HorizontalLine,
   JobsPageContentContainer,
   JobsPageMainContainer,
   NoJobsErrImg,
   NoJobsFoundContainer,
   NoJobsFoundErrText,
   NoJobsFoundHeading,
   NoJobsFoundWithFiltersErrText,
   NoJobsWithFiltersContainer,
   NoJobsWithFiltersErrImg,
   RetryButton,
   SearchContainer,
   SearchIconContainer,
   StyledSearchEl
} from './styledComponents'

interface InjectedProps {
   jobbyAppStore: JobbyAppStore
}

const noJobsWithFiltersErrImgUrl =
   'https://assets.ccbp.in/frontend/react-js/failure-img.png'
const noJobsWithFiltersErrImgAltText = 'failure-view'
const noJobsFoundHeadingText = 'No Jobs Found'
const noJobsFoundErrText =
   'We cannot seem to find the page you are looking for.'
const noJobsFoundWithFiltersErrText =
   'We could not find any jobs. Try other filters.'
const noJobsErrImgUrl =
   'https://assets.ccbp.in/frontend/react-js/no-jobs-img.png'
const noJobsErrImgAltText = 'no jobs'
@inject('jobbyAppStore')
@observer
class JobsPage extends Component {
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   renderAllJobsLoadingView = (): JSX.Element => (
      <AllJobsLoadingContainer>
         <Loader type='ThreeDots' color='#ffffff' height='50' width='50' />
      </AllJobsLoadingContainer>
   )
   renderAllJobsFailureView = (): JSX.Element => (
      <NoJobsWithFiltersContainer>
         <NoJobsWithFiltersErrImg
            src={noJobsWithFiltersErrImgUrl}
            alt={noJobsWithFiltersErrImgAltText}
         />
         <NoJobsFoundHeading>{noJobsFoundHeadingText}</NoJobsFoundHeading>
         <NoJobsFoundErrText>{noJobsFoundErrText}</NoJobsFoundErrText>
         <RetryButton onClick={() => window.location.reload()}>
            Retry
         </RetryButton>
      </NoJobsWithFiltersContainer>
   )

   renderNoJobsView = (): JSX.Element => {
      const { jobbyAppStore } = this.getInjectedProps()
      return (
         <NoJobsFoundContainer>
            <SearchContainer>
               <StyledSearchEl
                  type='search'
                  placeholder='Search'
                  onChange={jobbyAppStore.onChangeSearchInput}
                  onKeyDown={jobbyAppStore.onEnterInput}
                  value={jobbyAppStore.searchInput}
               />

               <SearchIconContainer onClick={jobbyAppStore.getAllJobDetails}>
                  <BsSearch />
               </SearchIconContainer>
            </SearchContainer>
            <AllJobsLoadingContainer>
               <NoJobsErrImg src={noJobsErrImgUrl} alt={noJobsErrImgAltText} />
               <NoJobsFoundHeading>{noJobsFoundHeadingText}</NoJobsFoundHeading>
               <NoJobsFoundWithFiltersErrText>
                  {noJobsFoundWithFiltersErrText}
               </NoJobsFoundWithFiltersErrText>
            </AllJobsLoadingContainer>
         </NoJobsFoundContainer>
      )
   }

   renderAllJobsSuccessView = (): JSX.Element => {
      const { jobbyAppStore } = this.getInjectedProps()
      const { jobItems } = jobbyAppStore
      if (jobItems.length === 0) {
         return this.renderNoJobsView()
      }
      return (
         <AllJobsContainer>
            <SearchContainer>
               <StyledSearchEl
                  type='search'
                  placeholder='Search'
                  onChange={jobbyAppStore.onChangeSearchInput}
                  onKeyDown={jobbyAppStore.onEnterInput}
                  value={jobbyAppStore.searchInput}
               />

               <SearchIconContainer onClick={jobbyAppStore.getAllJobDetails}>
                  <BsSearch />
               </SearchIconContainer>
            </SearchContainer>
            {jobItems.map(eachJob => (
               <JobItem jobItemDetails={eachJob} key={eachJob.id} />
            ))}
         </AllJobsContainer>
      )
   }
   renderAllJobs = () => {
      const { jobbyAppStore } = this.getInjectedProps()
      const { jobItemsApiStatus } = jobbyAppStore
      switch (jobItemsApiStatus) {
         case 200:
            return this.renderAllJobsSuccessView()
         case 400:
            return this.renderAllJobsFailureView()
         default:
            return this.renderAllJobsLoadingView()
      }
   }

   componentDidMount() {
      const { jobbyAppStore } = this.getInjectedProps()
      jobbyAppStore.getProfileDetails()
      jobbyAppStore.getAllJobDetails()
   }
   render(): JSX.Element {
      return (
         <JobsPageMainContainer>
            <Header />
            <JobsPageContentContainer>
               <div>
                  <Profile />
                  <HorizontalLine />
                  <Filters />
               </div>

               {this.renderAllJobs()}
            </JobsPageContentContainer>
         </JobsPageMainContainer>
      )
   }
}
export default JobsPage
