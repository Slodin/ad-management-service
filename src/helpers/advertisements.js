import models from "../models";

export const getAdvertisements = () => {
    try{
        return models.Advertisements.find().sort({createdAt:-1});
    } catch(err){
        throw new Error(err);
    }
}