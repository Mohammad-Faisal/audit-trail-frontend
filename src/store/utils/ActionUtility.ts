export class ActionUtility {

    static getFulfilledAction = (actionName:string) =>`${actionName}/fulfilled`

    static getPendingAction = (actionName:string) =>`${actionName}/pending`

}