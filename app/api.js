import axios from 'axios';
import config from './common/config';


export const getGitHubUsers = () => { 
    return axios.get(`${config.FETCH_GIT_HUB_USERS_REQUEST}`);
}
