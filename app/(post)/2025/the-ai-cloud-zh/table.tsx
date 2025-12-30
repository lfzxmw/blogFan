export function Table() {
  return (
    <div className="my-8 w-full overflow-y-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-gray-50 text-left">页面</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-50 text-left">智能体</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">同步渲染</td>
            <td className="border border-gray-300 px-4 py-2">异步执行</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">静态内容</td>
            <td className="border border-gray-300 px-4 py-2">动态工具创建</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">固定指令</td>
            <td className="border border-gray-300 px-4 py-2">智能决策</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">用户体验</td>
            <td className="border border-gray-300 px-4 py-2">问题解决</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
