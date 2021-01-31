export class ApiEndpoints{

    static BASE_URL:string = 'http://localhost:3200/api/v1';

    static user = {
        signIn: `${ApiEndpoints.BASE_URL}/user/signIn`,
        signUp: `${ApiEndpoints.BASE_URL}/user/signUp`
    }


    static site = {
        createSite: `${ApiEndpoints.BASE_URL}/site/createSite`,
        getSites: `${ApiEndpoints.BASE_URL}/site/getSites`,
        updateSite: `${ApiEndpoints.BASE_URL}/site/updateSite`
    }
}