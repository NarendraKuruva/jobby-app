import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import JobbyAppStore from '../../stores/JobbyAppStore'
import {
   SalaryRangeItemInput,
   FilterLabel,
   SalaryRangeListItem,
   EmplomentTypeListItem,
   EmplomentTypeInput,
   EmplomentTypeFilterContainer,
   JobItemTitle,
   EmplomentTypeList,
   HorizontalLine,
   SalayrRangeContainer,
   SalaryRangeList
} from './styledComponents'

interface InjectedProps {
   jobbyAppStore: JobbyAppStore
}

const typeofEmploymentHeadingText = 'Type of Employment'
const salaryRangeHeadingText = 'Salary Range'

@inject('jobbyAppStore')
@observer
class Filters extends Component {
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   renderSalaryRangeItem = (props: {
      salaryRangeId: string
      label: string
   }): JSX.Element => {
      const { salaryRangeId, label } = props
      const { jobbyAppStore } = this.getInjectedProps()
      return (
         <SalaryRangeListItem>
            <SalaryRangeItemInput
               type='radio'
               id={salaryRangeId}
               name='salaryRange'
               value={salaryRangeId}
               onClick={jobbyAppStore.onClickMinSalary}
            />
            <FilterLabel htmlFor={salaryRangeId}>{label}</FilterLabel>
         </SalaryRangeListItem>
      )
   }

   renderTypeOfEmploymentItem = (props: {
      label: string
      employmentTypeId: string
   }): JSX.Element => {
      const { jobbyAppStore } = this.getInjectedProps()
      const { label, employmentTypeId } = props
      return (
         <EmplomentTypeListItem>
            <EmplomentTypeInput
               type='checkbox'
               id={employmentTypeId}
               value={employmentTypeId}
               onClick={jobbyAppStore.onClickTypeOfEmployment}
            />
            <FilterLabel htmlFor={employmentTypeId}>{label}</FilterLabel>
         </EmplomentTypeListItem>
      )
   }
   render() {
      const { jobbyAppStore } = this.getInjectedProps()
      const { salaryRangesList, employmentTypesList } = jobbyAppStore
      return (
         <div>
            <EmplomentTypeFilterContainer>
               <JobItemTitle>{typeofEmploymentHeadingText}</JobItemTitle>
               <EmplomentTypeList>
                  {employmentTypesList.map(eachItem =>
                     this.renderTypeOfEmploymentItem(eachItem)
                  )}
               </EmplomentTypeList>
            </EmplomentTypeFilterContainer>
            <HorizontalLine />
            <SalayrRangeContainer>
               <JobItemTitle>{salaryRangeHeadingText}</JobItemTitle>
               <SalaryRangeList>
                  {salaryRangesList.map(each =>
                     this.renderSalaryRangeItem(each)
                  )}
               </SalaryRangeList>
            </SalayrRangeContainer>
         </div>
      )
   }
}

export default Filters
