import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import stores from '../../../Common/stores'
import Header from '../Header'
import {
   HomeContentContainer,
   StyledFindJobsButton,
   StyledHomeContainer,
   StyledHomeDescription,
   StyledHomeHeading
} from './styledComponents'

const homePageHeadingText = 'Find The Job That Fits Your Life'
const homePageDescriptionText =
   'Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential.'
const findJobsBtnText = 'Find Jobs'

@observer
class JobbyHome extends Component {
   render(): JSX.Element {
      return (
         <StyledHomeContainer>
            <Header />
            <HomeContentContainer>
               <StyledHomeHeading>{homePageHeadingText}</StyledHomeHeading>
               <StyledHomeDescription>
                  {homePageDescriptionText}
               </StyledHomeDescription>
               <Link to='/jobby/jobs'>
                  <StyledFindJobsButton>{findJobsBtnText}</StyledFindJobsButton>
               </Link>
            </HomeContentContainer>
         </StyledHomeContainer>
      )
   }
}
export default JobbyHome
