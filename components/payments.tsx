import Image from 'next/image'

const Payments = (props) => (
  <div className="flex justify-between w-52">
    { props.iconList.map(icon => (
      <Image
        key={icon.name}
        alt="Logo"
        className="h-12 w-12 mr-2"
        src={icon.src}
        width={32}
        height={20}
      />   
    ))}
  </div>
)

export default Payments