const ColorCheck = ({color}) => (
  <div className="block">
  <span className="text-gray-700 font-montserrat uppercase text-xs font-semibold">Color:</span>
  <div className="mt-4 flex w-24 justify-between">
      <label className="inline-flex items-center">
        <input type="checkbox" checked={color === 'White'}  value="white" className="form-checkbox bg-white text-white h-5 w-5 rounded-full shadow border border-solid border-gray-200"/>
      </label>
      <label className="inline-flex items-center">
        <input type="checkbox" checked={color === 'Red'} value="red" className="form-checkbox bg-redless text-redless h-5 w-5 shadow rounded-full"/>
      </label>
      <label className="inline-flex items-center">
        <input type="checkbox" checked={color === 'Yellow'} value="yellow" className="form-checkbox bg-yellow-400 text-yellow-400 h-5 w-5 shadow rounded-full"/>
      </label>
      <label className="inline-flex items-center">
        <input type="checkbox" checked={color === 'Green'} value="green" className="form-checkbox bg-green-600 text-green-600 h-5 w-5 shadow rounded-full"/>
      </label>
  </div>
</div>
)

export default ColorCheck