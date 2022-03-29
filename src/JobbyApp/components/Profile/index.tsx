import { inject, observer } from 'mobx-react'
import Loader from 'react-loader-spinner'
import React from 'react'
import JobbyAppStore from '../../stores/JobbyAppStore'
import {
   ProfileContainer,
   ProfileHeading,
   ProfileImg,
   ProfileLoadingContainer,
   RetryButton,
   ShortBio
} from './styledComponents'

interface InjectedProps {
   jobbyAppStore: JobbyAppStore
}

const retryBtnText = 'Retry'

const Profile = inject('jobbyAppStore')(
   observer(
      (props): JSX.Element => {
         const getInjectedProps = (): InjectedProps => props as InjectedProps

         const renderProfileLoadingView = (): JSX.Element => (
            <ProfileLoadingContainer>
               <Loader
                  type='ThreeDots'
                  color='#ffffff'
                  height={50}
                  width={50}
               />
            </ProfileLoadingContainer>
         )
         const renderProfileFailureVeiw = (): JSX.Element => (
            <ProfileLoadingContainer>
               <RetryButton>{retryBtnText}</RetryButton>
            </ProfileLoadingContainer>
         )
         const renderProfileSuccessView = (): JSX.Element => {
            const { jobbyAppStore } = getInjectedProps()
            const {
               name,
               profile_image_url,
               short_bio
            } = jobbyAppStore.profileDetails
            return (
               <ProfileContainer>
                  <ProfileImg src={profile_image_url} alt={name} />
                  <ProfileHeading>{name}</ProfileHeading>
                  <ShortBio>{short_bio}</ShortBio>
               </ProfileContainer>
            )
         }
         const { jobbyAppStore } = getInjectedProps()
         const { profileApiStatus } = jobbyAppStore
         switch (profileApiStatus) {
            case 200:
               return renderProfileSuccessView()
            case 400:
               return renderProfileFailureVeiw()
            default:
               return renderProfileLoadingView()
         }
      }
   )
)
export default Profile
