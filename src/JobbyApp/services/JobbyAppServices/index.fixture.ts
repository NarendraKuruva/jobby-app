import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import sampleProfile from '../../fixtures/sampleProfile.json'
import sampleJobs from '../../fixtures/sampleJobs.json'
import sampleJobDetails from '../../fixtures/sampleJobItemDetails.json'
import JobbyAppService from '.'
import JobItemDetailsModel from '../../stores/models/JobItemDetailsModel'

interface EndpointTypes {
   searchInputVal: string
   activeMinPackageVal: string
   employmentTypesVal: string
}
class JobbyAppFixture implements JobbyAppService {
   getProfileData(): Promise<{
      profile_details: {
         name: string
         profile_image_url: string
         short_bio: string
      }
   }> {
      return resolveWithTimeout(sampleProfile)
   }
   getAllJobsData(
      apiEndpoint: EndpointTypes
   ): Promise<{
      jobs: {
         company_logo_url: string
         employment_type: string
         id: string
         job_description: string
         location: string
         package_per_annum: string
         rating: number
         title: string
      }[]
      total: number
   }> {
      return resolveWithTimeout(sampleJobs)
   }
   getJobDetails(id: string) {
      return resolveWithTimeout(sampleJobDetails)
   }
}

export default JobbyAppFixture
