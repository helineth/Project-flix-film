
interface MenuItemProps  {
    title: string
     address: string
     Icon: string
}
export default function MenuItem(props: MenuItemProps) {
  return (
    <a href={props.address} className='hover:text-amber-500'>
     {/*  <Icon className="text-2xl sm:hidden"/> */}
      <p className='uppercase hidden sm:inline text-sm'>{props.title}</p>
    </a>
  );
}