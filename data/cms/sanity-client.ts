
const PROJECT_ID = "z78d3ycf";
const DATASET = "production";

const sanityClient = require('@sanity/client')

const myConfiguredSanityClient = sanityClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2022-12-11', // use current UTC date - see "specifying API version"!
  //token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default myConfiguredSanityClient;