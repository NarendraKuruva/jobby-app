import { ApisauceInstance, create } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import JobbyAppService from '.'

interface EndpointTypes {
   searchInputVal: string
   activeMinPackageVal: string
   employmentTypesVal: string
}
class JobbyAppServiceApi implements JobbyAppService {
   networkCallWithFetch: (
      api: any,
      url: string,
      requestObject: Record<string, any>,
      type?: any
   ) => Promise<any>
   api: ApisauceInstance
   AppBaseUrl!: string
   constructor(networkCallWithFetch) {
      this.networkCallWithFetch = networkCallWithFetch
      this.api = create({
         baseURL: 'https://apis.ccbp.in'
      })
      this.AppBaseUrl = this.api.getBaseURL()
   }
   getProfileData = (): Promise<any> => {
      const endpoint = `/profile`
      return this.networkCallWithFetch(this.api, endpoint, {}, apiMethods.get)
   }

   getAllJobsData = (apiEndpoint: EndpointTypes): Promise<any> => {
      const endpoint = `/jobs?employment_type=${apiEndpoint.employmentTypesVal}&minimum_package=${apiEndpoint.activeMinPackageVal}&search=${apiEndpoint.searchInputVal}`
      console.log(apiEndpoint)
      return this.networkCallWithFetch(this.api, endpoint, {}, apiMethods.get)
   }
   getJobDetails(id: string): Promise<any> {
      const endpoint = `/jobs/${id}`
      return this.networkCallWithFetch(this.api, endpoint, {}, apiMethods.get)
   }
}
export default JobbyAppServiceApi
