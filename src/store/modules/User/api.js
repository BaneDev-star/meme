// import http from "../../../services/http";
import {FAKE_NOTIFICATION_LIST} from "./constants";

export default class User {
    static fetchNotifications(address) {
        // TODO: UNCOMMENT WHEN API IS READY
        // return http.get(`/Notifications`, {params: {address}});

        return new Promise(resolve => setTimeout(() => resolve({
            data: FAKE_NOTIFICATION_LIST
        }), 1000));
    }
}
