import { AppState } from "../AppState.js"

class ProfilesService{
async getProfileById(profileId){
    AppState.activeProfile = null
    const res = await api.get{`api/profiles/${profileId}`}
    logger.log(res.data)
}
}

export const profilesService = new ProfilesService()