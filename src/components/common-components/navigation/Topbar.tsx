import {FC} from "react";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {UserAction} from "../../../store/user/UserAction";

export const Topbar:FC = () => {
    const dispatch= useDispatch();
    return <div>
        <Button onClick={() => dispatch(UserAction.signOut())}> Log Out</Button>
    </div>
}