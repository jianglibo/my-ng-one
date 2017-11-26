import { extend } from "webdriver-js-extender";
import { AttributesBase } from "./dto/jsonapi-object";

export class DtoUtil {
    static cloneAttributes<T extends AttributesBase>(attr: T) {
        let mo = Object.assign({}, attr);
        delete mo.createdAt;
        delete mo.dtoAction;
        delete mo.dtoApplyTo;
        return mo;
    }
}
