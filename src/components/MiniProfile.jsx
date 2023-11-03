
export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img className="h-16 rounded-full border p-[2px]" src="/atikur.jpg" alt="user-image" />
        <div className="flex-1 ml-4">
            <h2 className="font-bold">atikurrahman1587</h2>
            <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 test-sm">Sing out</button>
    </div>
  )
}
