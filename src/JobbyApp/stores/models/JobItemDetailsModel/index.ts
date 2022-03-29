import React from 'react'
import SkillModel from './SkillModel'
import LifeAtCompanyModel from './LifeAtCompanyModel'
import SimilarJobModel from './SimilarJobsModel'
class JobItemDetailsModel {
   jobDetails: {
      companyWebsiteUrl: string
      companyLogoUrl: string
      employmentType: string
      id: string
      jobDescription: string
      location: string
      skills: SkillModel[]
      lifeAtCompany: LifeAtCompanyModel
      rating: number
      packagePerAnnum: string
      title: string
   }
   similarJobs: SimilarJobModel[]

   constructor(data) {
      this.jobDetails = data.job_details
      this.jobDetails.companyLogoUrl = data.job_details.company_logo_url
      this.jobDetails.companyWebsiteUrl = data.job_details.company_website_url
      this.jobDetails.employmentType = data.job_details.employment_type
      this.jobDetails.id = data.job_details.id
      this.jobDetails.location = data.job_details.location
      this.jobDetails.skills = data.job_details.skills.map(
         each => new SkillModel(each)
      )
      this.jobDetails.lifeAtCompany = new LifeAtCompanyModel(
         data.job_details.life_at_company
      )
      this.jobDetails.rating = data.job_details.rating
      this.jobDetails.packagePerAnnum = data.job_details.package_per_annum
      this.jobDetails.title = data.job_details.title
      this.jobDetails.jobDescription = data.job_details.job_description
      this.similarJobs = data.similar_jobs.map(
         each => new SimilarJobModel(each)
      )
   }
}
export default JobItemDetailsModel
