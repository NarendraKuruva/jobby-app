import React from 'react'
import Header from '../Header'
import {
   NotFoundContainer,
   NotFoundErrDescription,
   NotFoundErrHeading,
   NotFoundImg,
   NotFoundPageMainContainer
} from './styledComponents'

const notFoundImgUrl =
   'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'
const notFoundImgAltText = 'not found'
const notFoundErrHeadingText = 'Page Not Found'
const notFoundErrDescriptionText =
   'we are sorry,the page you requested could not be found.'

const NotFoundPage = (): JSX.Element => (
   <NotFoundPageMainContainer>
      <Header />
      <NotFoundContainer>
         <NotFoundImg src={notFoundImgUrl} alt={notFoundImgAltText} />
         <NotFoundErrHeading>{notFoundErrHeadingText}</NotFoundErrHeading>
         <NotFoundErrDescription>
            {notFoundErrDescriptionText}
         </NotFoundErrDescription>
      </NotFoundContainer>
   </NotFoundPageMainContainer>
)
export default NotFoundPage
