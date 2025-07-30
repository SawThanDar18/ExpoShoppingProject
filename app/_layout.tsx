import { store } from "@/providers/redux/store";
import { Slot } from "expo-router";
import { Provider } from "react-redux";

export default function Root() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
