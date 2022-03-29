class SimilarJobModel {
   companyLogoUrl: string
   employmentType: string
   id: string
   jobDescription: string
   location: string
   rating: number
   title: string
   constructor(data) {
      this.companyLogoUrl = data.company_logo_url
      this.employmentType = data.employment_type
      this.id = data.id
      this.jobDescription = data.job_description
      this.location = data.location
      this.rating = data.rating
      this.title = data.title
   }
}
export default SimilarJobModel
