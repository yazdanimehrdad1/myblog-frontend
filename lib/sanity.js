import sanityClient from '@sanity/client';



const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: '2021-10-21', 
    useCdn: process.env.NODE_ENV == 'production'
    // useCdn === true, gives you fast response, it will get you cached data
    // useCdn === true, gives you slow response, it will get you most recent data

}

export default sanityClient(options);