import {FC} from "react";
import { CircleLoader} from "react-spinners";
import {useSelector} from "react-redux";
import {selectRequesting} from "../../../store/misc/requesting/RequestingSelector";
import {SiteAction} from "../../../store/site/SiteAction";
import './loading.css';

export const LoadingIndicator: FC = () => {


    let isLoading = useSelector(state => selectRequesting(state, [SiteAction.GET_SITES]))

    return isLoading ? <div className='container-loadingmodal modal-content'>
            <CircleLoader
                color={"#36D7B7"}
                size={120}
            />
    </div> : <div></div>


}