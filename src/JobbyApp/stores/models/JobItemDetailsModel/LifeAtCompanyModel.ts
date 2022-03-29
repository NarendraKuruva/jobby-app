class LifeAtCompanyModel {
   description: string
   imageUrl: string
   constructor(data) {
      this.description = data.description
      this.imageUrl = data.image_url
   }
}
export default LifeAtCompanyModel
