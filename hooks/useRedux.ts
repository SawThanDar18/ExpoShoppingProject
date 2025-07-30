import type { AppDispatch, RootState } from "@/providers/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;