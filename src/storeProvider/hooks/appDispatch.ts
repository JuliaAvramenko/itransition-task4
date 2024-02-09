import { useDispatch } from 'react-redux'
import { AppDispatch } from '../storeProvider'
// import type { AppDispatch } from '@/app/providers/StoreProvider/config/store'

// export type AppStoreState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
