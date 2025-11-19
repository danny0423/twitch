import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// 使用這些 hooks 而不是原始的 useDispatch 和 useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
