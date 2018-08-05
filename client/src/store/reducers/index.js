import { reducer as formReducer } from "redux-form";

import user from "./user";
import search from "./search";

export default {
    form: formReducer,
    user,
    github: search
};
