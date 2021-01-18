export default function Button(props) {
  return ( 
    <div className="z-40 flex justify-between items-center sticky top-20 md:top-0">
      <button className=
      {`textTransform: ${props.textTransform}
        hover:${props.hover}
        rounded: ${props.rounded}
        bg: ${props.bg || 'bg-transparent'}
        color: ${props.color}
        fontFamily: ${props.fontFamily}
        fontWeight: ${props.fontWeight}
        fontSize: ${props.fontSize}
        focus: outline-none ${props.className}`}
        type={props.type}>
        {props.text}
      </button>
    </div>
  )
}
  