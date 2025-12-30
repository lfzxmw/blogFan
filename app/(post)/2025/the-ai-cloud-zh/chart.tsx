import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function Chart() {
  const data = [
    { name: 'openai', 下载量: 2500000 },
    { name: 'ai (AI SDK)', 下载量: 1800000 },
    { name: 'langchain', 下载量: 1200000 },
    { name: '@tensorflow/tfjs', 下载量: 800000 },
    { name: 'brain.js', 下载量: 400000 },
  ]

  return (
    <div className="my-8 w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value.toLocaleString()} 下载量`, '']} />
          <Bar dataKey="下载量" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-sm text-gray-600 mt-2">
        npm 上 AI 相关包的周下载量比较
      </p>
    </div>
  )
}
