import Joi from "joi";

export const getCommuneSchema = Joi.object({
    commune_code: Joi.string().required()

})

export const getProvinceSchema = Joi.object({
    province_code: Joi.string().required()

})
export const getRegionSchema = Joi.object({
    region_iso: Joi.string().required()

})
export const getFromRegionSchema = Joi.object({
    region_iso: Joi.string().required().not().empty(),

})
export const paginationSchema = Joi.object({
    page: Joi.string().optional(),
    amount: Joi.string().optional()
})

export const addRegionSchema = Joi.object({
    region_name: Joi.string().required(),
    roman_number: Joi.string().required(),
    region_number: Joi.number().required(),
    region_iso_3166_2: Joi.string().required(),
    region_abbreviation: Joi.string().required()

},)