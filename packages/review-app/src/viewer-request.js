export async function handler(event) {
  const request = event.Records[0].cf.request
  const pathFragments = request.uri.split('/').filter(v => v !== '')
  const reviewAppName = pathFragments[0];
  const lastPathFragment = pathFragments[pathFragments.length - 1]
  // Assuming last front end app route path fragment has no dot in it. 
  if (lastPathFragment.indexOf('.') === -1) {
    request.uri = `/${reviewAppName}/index.html`
  }
  return request
}
