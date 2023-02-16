import ClipLoader from 'react-spinners/ClipLoader'

export default function Loading({ loading = true }: { loading?: boolean }) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ClipLoader
        loading={loading}
        size={150}
        color="#ffffff"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
