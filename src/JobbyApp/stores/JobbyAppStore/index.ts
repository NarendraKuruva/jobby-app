import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { action, computed, observable } from 'mobx'
import JobbyAppService from '../../services/JobbyAppServices/index'
import JobItemDetailsModel from '../models/JobItemDetailsModel'
import JobItemModel from '../models/JobItemModel'
import ProfileModel from '../models/ProfileModel'

const employmentTypesList = [
   {
      label: 'Full Time',
      employmentTypeId: 'FULLTIME'
   },
   {
      label: 'Part Time',
      employmentTypeId: 'PARTTIME'
   },
   {
      label: 'Freelance',
      employmentTypeId: 'FREELANCE'
   },
   {
      label: 'Internship',
      employmentTypeId: 'INTERNSHIP'
   }
]

const salaryRangesList = [
   {
      salaryRangeId: '1000000',
      label: '10 LPA and above'
   },
   {
      salaryRangeId: '2000000',
      label: '20 LPA and above'
   },
   {
      salaryRangeId: '3000000',
      label: '30 LPA and above'
   },
   {
      salaryRangeId: '4000000',
      label: '40 LPA and above'
   }
]

interface EmplomentType {
   label: string
   employmentTypeId: string
}
interface SalaryRangeItemTypes {
   salaryRangeId: string
   label: string
}
interface EndpointTypes {
   searchInputVal: string
   activeMinPackageVal: string
   employmentTypesVal: string
}

class JobbyAppStore {
   jobbyAppService!: JobbyAppService
   @observable username!: string
   @observable password!: string
   @observable showSubmitError!: boolean
   @observable errorMsg!: string
   @observable profileApiStatus!: number
   @observable profileDetails!: ProfileModel
   @observable jobItems!: JobItemModel[]
   @observable jobItemsApiStatus!: number
   @observable searchInput!: string
   @observable activeMinPackage!: string
   @observable employmentTypesList!: EmplomentType[]
   @observable salaryRangesList!: SalaryRangeItemTypes[]
   @observable employmentTypes: string[]
   @observable jobDetailsApiStatus!: number
   @observable jobItemDetails!: JobItemDetailsModel

   constructor(jobbyAppService) {
      this.username = ''
      this.password = ''
      this.showSubmitError = false
      this.errorMsg = ''
      this.jobbyAppService = jobbyAppService
      this.profileApiStatus = 0
      this.profileDetails = { name: '', profile_image_url: '', short_bio: '' }
      this.jobItems = []
      this.jobItemsApiStatus = 0
      this.searchInput = ''
      this.activeMinPackage = ''
      this.employmentTypesList = employmentTypesList
      this.salaryRangesList = salaryRangesList
      this.employmentTypes = []
      this.jobDetailsApiStatus = 0
      this.jobItemDetails = {
         jobDetails: {
            companyWebsiteUrl: '',
            companyLogoUrl: '',
            employmentType: '',
            id: '',
            jobDescription: '',
            location: '',
            skills: [],
            lifeAtCompany: { description: '', imageUrl: '' },
            rating: 0,
            packagePerAnnum: '',
            title: ''
         },
         similarJobs: []
      }
   }
   @action.bound onLoginFailure(errorMsg: string): void {
      this.showSubmitError = true
      this.errorMsg = errorMsg
   }
   @action.bound onChangeUsername(
      event: React.ChangeEvent<HTMLInputElement>
   ): void {
      this.username = event.target.value
   }
   @action.bound onChangePassword(
      event: React.ChangeEvent<HTMLInputElement>
   ): void {
      this.password = event.target.value
   }

   @action.bound
   getProfileDetails = async (): Promise<any> => {
      const profileDetailsPromiseObj = this.jobbyAppService.getProfileData()
      return bindPromiseWithOnSuccess(profileDetailsPromiseObj)
         .to(
            status => {
               this.profileApiStatus = status
            },
            response => {
               if (!response) return
               const updatedData = new ProfileModel(response)

               this.profileDetails = updatedData
            }
         )
         .catch(error => {
            console.log(error)
         })
   }
   @action.bound getAllJobDetails = async (): Promise<any> => {
      const apiEndpointDetails = {
         searchInputVal: this.searchInput,
         activeMinPackageVal: this.activeMinPackage,
         employmentTypesVal: this.employmentTypes.join(',')
      }
      const allJobsDetailsPromise = this.jobbyAppService.getAllJobsData(
         apiEndpointDetails
      )
      return bindPromiseWithOnSuccess(allJobsDetailsPromise)
         .to(
            status => {
               this.jobItemsApiStatus = status
            },
            response => {
               if (!response) return
               const updatedData = response.jobs.map(
                  eachJobItem => new JobItemModel(eachJobItem)
               )

               this.jobItems = updatedData
            }
         )
         .catch(error => {
            console.log(error)
         })
   }

   @action.bound onClickMinSalary(event): void {
      this.activeMinPackage = event.target.value
      console.log(this.activeMinPackage)
      this.getAllJobDetails()
   }

   @action.bound onClickTypeOfEmployment(event): void {
      const selectedValue = event.target.value

      const isPresent = this.employmentTypes.includes(selectedValue)
      if (isPresent) {
         this.employmentTypes = this.employmentTypes.filter(
            each => each !== selectedValue
         )
         this.getAllJobDetails()
         console.log(this.activeMinPackage)
      } else {
         this.employmentTypes.push(selectedValue)
         this.getAllJobDetails()
      }
   }
   @action.bound
   onChangeSearchInput(event) {
      this.searchInput = event.target.value
   }
   @action.bound
   onEnterInput(event) {
      if (event.keyCode === 13) {
         this.getAllJobDetails()
      }
   }

   @action.bound getJobItemDetails(id: string) {
      const jobItemDetailsPromise = this.jobbyAppService.getJobDetails(id)
      return bindPromiseWithOnSuccess(jobItemDetailsPromise)
         .to(
            status => {
               this.jobDetailsApiStatus = status
            },
            response => {
               if (!response) return
               const updatedData = new JobItemDetailsModel(response)

               this.jobItemDetails = updatedData
            }
         )
         .catch(error => {
            console.log(error)
         })
   }
}
export default JobbyAppStore
