import JobbyAppStore from '../../JobbyApp/stores/JobbyAppStore'
import { networkCallWithFetch } from '../..//Common/utils/APIUtils'
import JobbyAppService from '../../JobbyApp/services/JobbyAppServices/index.api'
import CounterStore from './CounterStore'

const jobbyAppService = new JobbyAppService(networkCallWithFetch)

const counterStore = new CounterStore()

const jobbyAppStore = new JobbyAppStore(jobbyAppService)

export default {
   counterStore,
   jobbyAppStore
}
