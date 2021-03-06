import { Utils } from "../../Utils";

export interface UpdateNotecardProps {
    id: string,
    send: {
        title: string;
        task: string;
        answer: string;
    }
    refSet: string;
    reqId?: string;
}


export class UpdateNotecardApi {

    public static readonly ID: string = 'update-notecard';

    public static buildRequest(props: UpdateNotecardProps) {

        return {
            url: Utils.apiUrl('/notecard/' + props.id),
            method: 'PUT',
            category: UpdateNotecardApi.ID
                .concat((props.reqId) ? props.reqId : '')
                .concat((props.refSet) ? props.refSet : ''),
            send: props.send
        };

    }
}