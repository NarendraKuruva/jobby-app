class JobItemModel {
   companyLogoUrl: string
   employmentType: string
   id: string
   jobDescription: string
   location: string
   packagePerAnnum: string
   rating: number
   title: string
   constructor(data) {
      this.companyLogoUrl = data.company_logo_url
      this.employmentType = data.employment_type
      this.id = data.id
      this.jobDescription = data.job_description
      this.location = data.location
      this.packagePerAnnum = data.package_per_annum
      this.rating = data.rating
      this.title = data.title
   }
}
export default JobItemModel
