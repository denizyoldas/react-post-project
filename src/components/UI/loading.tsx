import ClipLoader from 'react-spinners/ClipLoader'

export default function Loading({ loading = true }: { loading?: boolean }) {
  return (
    <ClipLoader
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}
