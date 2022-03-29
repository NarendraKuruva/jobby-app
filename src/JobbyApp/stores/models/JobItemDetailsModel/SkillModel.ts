class SkillModel {
   imageUrl: string
   name: string
   constructor(data) {
      this.imageUrl = data.image_url
      this.name = data.name
   }
}
export default SkillModel
