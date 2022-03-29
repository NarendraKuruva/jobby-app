interface EndpointTypes {
   searchInputVal: string
   activeMinPackageVal: string
   employmentTypesVal: string
}

interface JobbyAppService {
   getProfileData(): Promise<any>
   getAllJobsData(apiEndpoint: EndpointTypes): Promise<any>
   getJobDetails(id: string): Promise<any>
}

export default JobbyAppService
