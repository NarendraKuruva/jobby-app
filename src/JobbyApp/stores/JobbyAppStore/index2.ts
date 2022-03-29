import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { action, observable } from 'mobx'
import JobbyAppService from '../../services/JobbyAppServices/index'
import JobItemModel from '../models/JobItemModel'
import ProfileModel from '../models/ProfileModel'

// const employmentTypesList = [
//    {
//       label: 'Full Time',
//       employmentTypeId: 'FULLTIME'
//    },
//    {
//       label: 'Part Time',
//       employmentTypeId: 'PARTTIME'
//    },
//    {
//       label: 'Freelance',
//       employmentTypeId: 'FREELANCE'
//    },
//    {
//       label: 'Internship',
//       employmentTypeId: 'INTERNSHIP'
//    }
// ]

// const salaryRangesList = [
//    {
//       salaryRangeId: '1000000',
//       label: '10 LPA and above'
//    },
//    {
//       salaryRangeId: '2000000',
//       label: '20 LPA and above'
//    },
//    {
//       salaryRangeId: '3000000',
//       label: '30 LPA and above'
//    },
//    {
//       salaryRangeId: '4000000',
//       label: '40 LPA and above'
//    }
// ]

// class JobbyAppStore {
//    jobbyAppService!: JobbyAppService
//    @observable username!: string
//    @observable password!: string
//    @observable showSubmitError!: boolean
//    @observable errorMsg!: string
//    @observable profileApiStatus!: number
//    @observable profileDetails!: ProfileModel
//    @observable jobItems!: JobItemModel[]
//    @observable jobItemsApiStatus!: number
//    @observable searchInput!: string
//    @observable activeMinPackage!: string
//    @observable emplomentTypes!: []
//    constructor(jobbyAppService) {
//       this.username = ''
//       this.password = ''
//       this.showSubmitError = false
//       this.errorMsg = ''
//       this.jobbyAppService = jobbyAppService
//       this.profileApiStatus = 0
//       this.profileDetails = { name: '', profile_image_url: '', short_bio: '' }
//       this.jobItems = []
//       this.jobItemsApiStatus = 0
//       this.searchInput = ''
//       this.activeMinPackage = ''
//       this.emplomentTypes = []
//    }
//    @action.bound onLoginFailure(errorMsg: string): void {
//       this.showSubmitError = true
//       this.errorMsg = errorMsg
//    }
//    @action.bound onChangeUsername(event): void {
//       this.username = event.target.value
//    }
//    @action.bound onChangePassword(event): void {
//       this.password = event.target.value
//    }
//    @action.bound getProfileDetails = async (): Promise<any> => {
//       const getProfileUrl = `https://apis.ccbp.in/profile`
//       const response = this.jobbyAppService.getProfileData(getProfileUrl)
//       return bindPromiseWithOnSuccess(response)
//          .to(
//             status => {
//                this.profileApiStatus = status
//             },
//             response => {
//                if (!response) return
//                const updatedData = new ProfileModel(response)
//                this.profileDetails = updatedData
//             }
//          )
//          .catch(error => {
//             console.log(error)
//          })
//    }
//    @action.bound getAllJobDetails = async (): Promise<any> => {
//       const getAllJobsUrl = `https://apis.ccbp.in/jobs?employment_type=${this.emplomentTypes}&minimum_package=${this.activeMinPackage}&search=${this.searchInput}`
//       const response = this.jobbyAppService.getAllJobsData(getAllJobsUrl)
//       return bindPromiseWithOnSuccess(response)
//          .to(
//             status => {
//                this.jobItemsApiStatus = status
//             },
//             response => {
//                if (!response) return
//                const updatedData = response.jobs.map(
//                   eachJobItem => new JobItemModel(eachJobItem)
//                )

//                this.jobItems = updatedData
//                // console.log(this.jobItems)
//             }
//          )
//          .catch(error => {
//             console.log(error)
//          })
//    }
// }
// export default JobbyAppStore
