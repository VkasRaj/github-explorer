import { watchUserSagas } from "./user";

export function* watchSagas() {
    yield watchUserSagas();
}
