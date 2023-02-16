export default function NextPage(lastPage: any) {
  return lastPage.total < (lastPage.page + 1) * lastPage.limit
    ? undefined
    : { page: lastPage.page + 1, limit: lastPage.limit }
}
