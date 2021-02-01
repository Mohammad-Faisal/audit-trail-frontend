import {FC} from "react";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {UserAction} from "../../../store/user/UserAction";
import {selectLoggedInUserInfo} from "../../../store/user/UserSelector";

export const Topbar:FC = () => {

    const dispatch= useDispatch();

    const userInfo:any = useSelector(selectLoggedInUserInfo)

    return <div style={{ margin:"20px",textAlign:'start', display:"grid" , gridTemplateColumns:"1fr auto" , borderBottom:"1px solid"}}>
        {userInfo && <h2>Logged In as {userInfo?.data?.name}</h2> }
        <Button danger onClick={() => dispatch(UserAction.signOut())}> Log Out</Button>
    </div>
}